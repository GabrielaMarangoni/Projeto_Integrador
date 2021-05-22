import React, { useCallback, useState } from 'react';
import HeaderPage from '../../components/Header/index';
import SearchBar from '../../components/SearchBar/index';
import { useHistory } from 'react-router-dom';
import { FiImage } from 'react-icons/fi'

import { Container, Content} from './styles';

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
                            <div>
                                <h1>{lugar.lugar}</h1> 
                                <h3>{lugar.cidade} - {lugar.uf}</h3>
                                <img src={lugar.imagem}/>
                                <div className="add-image">
                                    <button>
                                        <FiImage/>
                                        <span>Adicionar imagem</span>
                                    </button>
                                </div>
                                <h2>TAGS relacionada ao lugar:</h2>
                                <div className="tags-div">
                                    <div className="tag">
                                        <span>{lugar.tags}</span>
                                    </div>
                                    <div className="tag">
                                        <span>{lugar.tags}</span>
                                    </div>
                                    <div className="tag">
                                        <span>{lugar.tags}</span>
                                    </div>
                                    <div className="tag">
                                        <span>{lugar.tags}</span>
                                    </div>
                                </div>
                                <h2>Comentários:</h2>
                                <div className="comment">
                                    <div className="add-comment">
                                        <textarea></textarea>
                                        <div className="submit-comment-div">
                                            <button>Enviar</button>
                                        </div>
                                    </div>
                                    <div className="comment-text">
                                        <div className="header">
                                            <span>Adicionado em 21 de maio</span>
                                        </div>
                                        <p>teste</p>
                                    </div>
                                    <div className="comment-text">
                                        <div className="header">
                                            <span>Adicionado em 21 de maio</span>
                                        </div>
                                        <p> teste </p>
                                    </div>
                                    <div className="comment-text">
                                        <div className="header">
                                            <span>Adicionado em 21 de maio</span>
                                        </div>
                                        <p> teste </p>
                                    </div>
                                    <div className="comment-text">
                                        <div className="header">
                                            <span>Adicionado em 21 de maio</span>
                                        </div>
                                        <p>teste</p>
                                    </div>
                                    <div className="comment-text">
                                        <div className="header">
                                            <span>Adicionado em 21 de maio</span>
                                        </div>
                                        <p>teste </p>
                                    </div>
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
