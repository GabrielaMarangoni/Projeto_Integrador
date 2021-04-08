import React, { useCallback, useState } from 'react';
import HeaderPage from '../../components/Header/index';
import SearchBar from '../../components/SearchBar/index';
import { useHistory } from 'react-router-dom';

import { Container, Images, Row} from './styles';

const SearchPage = () => {
    const history = useHistory();

    const goToRegister = useCallback(() => {
        history.push('/cadastro')
    }, [])

    return (
        <>            
           <HeaderPage searchPage onClick={goToRegister}/>

           <SearchBar/>

           <Container>
                <Row>
                    <Images></Images>
                    <Images></Images>
                    <Images></Images>
                    <Images></Images>
                    <Images></Images>
                    <Images></Images>
                    <Images></Images>
                    <Images></Images>
                    <Images></Images>
                    <Images></Images>
                    <Images></Images>
                    <Images></Images>
                </Row>
           </Container>
          
           


          
           
       </>
    )
}

export default SearchPage;
