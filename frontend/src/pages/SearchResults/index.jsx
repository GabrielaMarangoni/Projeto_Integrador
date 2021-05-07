import React, { useCallback, useState } from 'react';
import HeaderPage from '../../components/Header/index';
import SearchBar from '../../components/SearchBar/index';
import { useHistory } from 'react-router-dom';

import { Container, Content, Images, Places, ContainerTags, ContainerTagaComentarios} from './styles';

const SearchPage = () => {
    const history = useHistory();
    const [place, setPlace] = useState([
        {
            id: 1,
            lugar: 'Biblioteca Municipal',
            cidade: 'Campo Mourão',
            uf: 'PR',
            tags: 'biblioteca' ,
            imagem: 'https://cidadeportal.com.br/arquivos/10694cd7af735fcfbd215ab6a238ec74/noticias/cidadeportal-campomourao,15082018161654f01.jpg',
            comentario: 'aqui é muito bonito'
        }
    ])

    const goToRegister = useCallback(() => {
        history.push('/cadastro')
    }, [])

    return (
        <>            
           <HeaderPage searchPage onClick={goToRegister}/>

           <Container>
                <SearchBar/>
              
                <Content>
                    { place.map((lugar) => {
                        return(
                            <Places key={lugar.id}>
                                <h1>{lugar.lugar}</h1> 
                                <h2>{lugar.cidade} - {lugar.uf}</h2>
                                <Images src={lugar.imagem}/>
                                <ContainerTagaComentarios>
                                    <h3>TAGS relacionada ao lugar:</h3>
                                </ContainerTagaComentarios>    
                                <ContainerTags>
                                    <h3> {lugar.tags}</h3>
                                </ContainerTags>
                                    <h3>Comentários:</h3>
                                <ContainerTagaComentarios>
                                    <h3> {lugar.comentario}</h3>
                                </ContainerTagaComentarios>  
                            </Places>
                        )
                    }) } 
                </Content>
           </Container>  
       </>
    )
}

export default SearchPage;
