import React, { useCallback, useEffect, useState } from 'react';
import HeaderPage from '../../components/Header/index';
import { useHistory, useParams } from 'react-router-dom';
import { FiImage } from 'react-icons/fi'
import CarrosselCorpo from '../../components/Carrossel/index';
import api from '../../services/api';

import { Container, Content} from './styles';

const SearchPage = () => {
    const history = useHistory();
    const {placeId: place_id} = useParams();
    const [place, setPlace] = useState([]);
    const [newCommentary, setNewCommentary] = useState('');
    const getPlaces = useCallback(async () => {

        const response = await api.get(`/places/one/${place_id}`);
         setPlace([response.data])         
    }, [place_id])

    useEffect(() => {
        getPlaces()
    }, [place_id])


    const goToRegister = useCallback(() => {
        history.push('/cadastro')
    }, [])

    const saveCommentary = async () => {
       await api.post(`/commentary/${place_id}`, {commentary:newCommentary});
        setNewCommentary('')
        getPlaces()
    }

    useEffect(()=>{
        console.log(newCommentary)
    }, [newCommentary])
    return (
        <>            
           <HeaderPage searchPage onClick={goToRegister}/>

           <Container>
               
              
                <Content>
                    { place.map((lugar) => {
                        return(
                            <div>
                                <h1>{lugar.name}</h1> 
                                <h3>{lugar.address.city} - {lugar.address.state}</h3>
                                <CarrosselCorpo images={lugar.images}/>
                                <div className="add-image">
                                    <button>
                                        <FiImage/>
                                        <span>Adicionar imagem</span>
                                    </button>
                                </div>
                                <h2>TAGS relacionada ao lugar:</h2>
                                <div className="tags-div">
                                    {
                                        lugar.tags.map((tag)=>(
                                            <div className="tag" key={tag.id}>
                                                <span>{tag.tag}</span>
                                            </div>
                                        ))
                                    }
                                </div>
                                <h2>Comentários:</h2>
                                <div className="comment">
                                    <div className="add-comment">
                                        <textarea onChange={(ev) => setNewCommentary(ev.target.value)}value={newCommentary}></textarea>
                                        <div className="submit-comment-div">
                                            <button onClick={saveCommentary}>Enviar</button>
                                        </div>
                                    </div>
                                    { lugar.commentary.map((commentary)=>(
                                        <div key={commentary.id} className="comment-text">
                                            <div className="header">
                                                <span>Adicionado em {commentary.createdAt}</span>
                                            </div>
                                            <p>{commentary.commentary}</p>
                                        </div>   
                                    ))

                                    }
                                </div>
                               
                            </div>
                        )
                    }) } 
                </Content>
           </Container>  
       </>
    )
}

export default SearchPage;
