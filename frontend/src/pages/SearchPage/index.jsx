import React, { useCallback, useEffect, useState } from 'react';
import HeaderPage from '../../components/Header/index';
import SearchBar from '../../components/SearchBar/index';
import { useHistory, useLocation } from 'react-router-dom';
import api from '../../services/api';

import { Container, Container2, Content, Images, Places, Row} from './styles';

const SearchPage = () => {
    const history = useHistory();
    const [city, setCity] = useState();
    const [place, setPlace] = useState([])
    const search = useLocation().search;

    const getPlaces = useCallback(async () => {
        const query = new URLSearchParams(search);
        if(!city && query.get('cidade') === undefined) {
            const response = await api.get('/places/all');
            setPlace(response.data)
        } else {
            if(query.get('cidade') && !city) {
                const response = await api.get(`/places/search_city/${query.get('cidade')}`);
                setPlace(response.data)
            } else {
                const response = await api.get(`/places/search_city/${city}`);
                setPlace(response.data)
            }
        }
    }, [city])

    const goToRegister = useCallback(() => {
        history.push('/cadastro')
    }, [])

    useEffect(() => {
        getPlaces()
    }, [])

    return (
        <>            
           <HeaderPage searchPage onClick={goToRegister}/>

           <Container>
                <SearchBar
                    city={city}
                    handleCity={(e) => setCity(e.target.value)}
                    onClick={getPlaces}
                />
              
                <Content>
                    { !!place.length && place.map((lugar) => {
                        console.log(lugar.images[0])
                        return(
                            <Places key={lugar.id}>
                                <h1>{lugar.name}</h1> 
                                <h2>{lugar.address ? lugar.address.city : 'Sem cidade'} - {lugar.address ? lugar.address.state : 'Sem estado'}</h2>
                                <Images src={(lugar.images && lugar.images[0] !== undefined && lugar.images.length !== 0) ? lugar.images[0].image : 'https://wallpapercave.com/wp/wp2754864.jpg'}/>
                            </Places>
                        )
                    }) }
                </Content>
           </Container>  
       </>
    )
}

export default SearchPage;
