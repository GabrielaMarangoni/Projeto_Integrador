import React from 'react';
import logo from '../../images/logo.png';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useHistory } from 'react-router-dom';

import { Logo, Header, ButtonHeader, ButtonReturn, Button } from './styles';

// O props significa propriedades que são passadas ao seu componente
const HeaderPage =(props) =>{
    const history = useHistory();
    // É interessante usar esse mesmo componente e mudar seus elementos de acordo com qual tela ele será exibido.
    // O objetivo é tirar o botão quando for a tela de registro e colocar quando não for, tudo através desse componente
    return (
        <Header>
            <Logo onClick={() => history.push('/')} src={logo} alt='logomarca' />
            { /* Aqui foi dito: Se for passado um parametro home e ele for true então terá um botão */ }
            { props.home && (
                <ButtonHeader onClick={props.onClick}>
                    CADASTRE UM PONTO DE INTERESSE
                </ButtonHeader>
            ) }

            { props.register && (
                <ButtonReturn onClick={props.onClick}>
                   <AiOutlineArrowLeft size = {20} name = 'AiOutlineArrowLeft' color = '#fff'/>
                    Voltar para home
                </ButtonReturn>
               
            ) }

            { props.searchPage && (
                <ButtonHeader onClick={props.onClick}>
                    CADASTRE UM PONTO DE INTERESSE
                </ButtonHeader>
            ) }

            { props.searchResults && (
                <ButtonHeader onClick={props.onClick}>
                    CADASTRE UM PONTO DE INTERESSE
                </ButtonHeader>
            ) }
        </Header>
    )
}
export default HeaderPage
