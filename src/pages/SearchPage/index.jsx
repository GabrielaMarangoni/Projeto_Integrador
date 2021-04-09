import React, { useCallback, useState } from 'react';
import HeaderPage from '../../components/Header/index';
import SearchBar from '../../components/SearchBar/index';
import { useHistory } from 'react-router-dom';

import { Container, Container2, Content, Images, Places, Row} from './styles';

const SearchPage = () => {
    const history = useHistory();
    const [place, setPlace] = useState([
        {
            id: 1,
            lugar: 'Biblioteca Municipal',
            cidade: 'Campo Mourão',
            uf: 'PR',
            tags: [{ id: 0, tag: 'biblioteca' }],
            imagem: 'https://cidadeportal.com.br/arquivos/10694cd7af735fcfbd215ab6a238ec74/noticias/cidadeportal-campomourao,15082018161654f01.jpg' 
        },
        {
            id: 1,
            lugar: 'Praia Gravatá',
            cidade: 'Navegantes',
            uf: 'SC',
            tags: [{ id: 1, tag: 'praia' }],
            imagem: 'https://i.pinimg.com/originals/06/fd/c2/06fdc2a4b423c38a1c38bc2cb1b8b8a5.jpg' 
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
                            </Places>
                        )
                    }) }
                </Content>
           </Container>  
       </>
    )
}

export default SearchPage;
