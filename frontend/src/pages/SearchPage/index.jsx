import React, { useCallback, useEffect, useState } from 'react';
import HeaderPage from '../../components/Header/index';
import SearchBar from '../../components/SearchBar/index';
import { useHistory, useLocation } from 'react-router-dom';
import api from '../../services/api';

import { Container, Content, Images, Places} from './styles';

const SearchPage = () => {
    const history = useHistory();
    const [city, setCity] = useState();
    const [place, setPlace] = useState([])
    const search = useLocation().search;
    const [selectedTags, setSelectedTags] = useState([]);
    
    const getPlaces = useCallback(async () => {
        const query = new URLSearchParams(search);
        console.log(city)
        
        
        if(selectedTags.length > 0) {
            if(!city) {
                console.log('Buscando somente por tags')
                let places_array = [];
                for(let i = 0; i < selectedTags.length; i++) { // percorre todos as tags selecionadas
                    const response_1 = await api.get(`/tags/search/${selectedTags[i].tag}`) // busca todos os lugares que tem as tags selecionas - pega o id do lugar que tem a tag
                    for(let j = 0; j < response_1.data.length; j++) { // aqui percorre tudo que foi achado no primeiro const - o lugar que tem a tag
                        const response_2 = await api.get(`/places/one/${response_1.data[j].places_id}`); // retorna os lugares - pega id do primeiro const passa como parametro e assim ele retorna o lugar como um todo
                        places_array.push(response_2.data);
                    }
                    if(i === selectedTags.length-1) { // aqui verifica se tudo foi percorrido
                        var okay_google = [];
                        for(let k = 0; k < places_array.length; k++) { // percorre pra não duplicar as imagens conforme as tags selecionadas
                            for(let l = 0; l < places_array.length; l++) {
                                if(places_array[l].id === places_array[k].id) {
                                    if(okay_google.findIndex(el => el.id === places_array[k].id) === -1) {
                                        okay_google.push(places_array[l]);
                                    }
                                }
                            }
                            
                            if(k === places_array.length-1) {
                                setPlace(okay_google)
                            }
                        }
                    }
                }
            } else {
                console.log('Buscando por tags e cidade')
                let places_array = [];
                for(let i = 0; i < selectedTags.length; i++) {
                    const response_1 = await api.get(`/tags/search/${selectedTags[i].tag}`)
                    for(let j = 0; j < response_1.data.length; j++) {
                        const response_2 = await api.get(`/places/one/${response_1.data[j].places_id}`);
                        places_array.push(response_2.data);
                    }
                    if(i === selectedTags.length-1) {
                        var okay_google = [];
                        for(let k = 0; k < places_array.length; k++) {
                            for(let l = 0; l < places_array.length; l++) {
                                if(places_array[l].id === places_array[k].id && places_array[l].address.city === city) { // aqui verifica se o endereço da cidade é a cidade especificada
                                    if(okay_google.findIndex(el => el.id === places_array[k].id) === -1) {
                                        okay_google.push(places_array[l]);
                                    }
                                }
                            }
                            
                            if(k === places_array.length-1) {
                                setPlace(okay_google)
                            }
                        }
                    }
                }
            }
        } else if(!city && query.get('cidade') === null && !selectedTags.length) { // aqui se não tiver tag selecionado, nao tiver cidade selecionada e se nao tiver cidade no query(URL), busca todos os lugares
            console.log('Buscando todos')
            const response = await api.get('/places/all');
            setPlace(response.data)
        } else {
            console.log('Buscando por cidade (Query and city)')
            if(query.get('cidade') && !city) { 
                const response = await api.get(`/places/search_city/${query.get('cidade')}`); // se tiver a cidade na URL, mas nao tiver selecioando a cidade passa como parametro o proprio query(getCity)
                setPlace(response.data)
            } else {
                const response = await api.get(`/places/search_city/${city}`); // não passa como parametro o query, passa a prórpia cidade selecionada
                setPlace(response.data)
            }
        }
    }, [city, selectedTags, place]) // pra saber quando foi mudado ou não

    const goToRegister = useCallback(() => {
        history.push('/cadastro')
    }, [])
    
    useEffect(() => {
        getPlaces()
    }, [])

    const goToResults = useCallback((place_id) => {
        history.push(`/resultados/${place_id}`)
    }, [])
    
    // aqui toda vez que seleciona ou não, faz a mudança 
    const setCheckedValues = useCallback(async (value, name_tag) => {
        if(value === true) {
            var tags = {
                id: Math.random(),
                tag: name_tag
            }
            setSelectedTags([...selectedTags, tags])
        } else { // faz filtro de tags que não são iguais ao name_tag (no caso, não tem nada referente essas tags, tira as tags que nao esta selecionadas dentro do array)
            var new_tags = selectedTags.filter(el => el.tag !== name_tag);
            setSelectedTags(new_tags);
        }
    }, [selectedTags])
    
    
    return (
        <>            
           <HeaderPage searchPage onClick={goToRegister}/>

           <Container>
                <SearchBar
                    city={city}
                    handleCity={(e) => setCity(e.target.value)}
                    onClick={getPlaces}
                    onChangeCheck={setCheckedValues}
                    undefinedCity={() => setCity(undefined)}
                    />
              
                <Content>
                    { !place.length ? ( Element ) : ( Element ) }
                    { !!place.length && place.map((lugar) => {
                        return(
                            <Places key={lugar.id}>
                                <h1>{lugar.name}</h1> 
                                <h2>{lugar.address ? lugar.address.city : 'Sem cidade'} - {lugar.address ? lugar.address.state : 'Sem estado'}</h2>
                                {
                                    <Images onClick={() => goToResults(lugar.id)}
                                    src={(lugar.images && lugar.images[0] !== undefined && lugar.images.length !== 0) ? lugar.images[0].image : ''}/>
                                }
                            </Places>
                        )
                    }) }
                </Content>
           </Container>  
       </>
    )
}

export default SearchPage;
