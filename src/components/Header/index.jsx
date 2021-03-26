import React from 'react';
import logo from '../../images/logo.png';

import { Logo, Header, ButtonHeader } from './styles';

// O props significa propriedades que são passadas ao seu componente
const HeaderPage =(props) =>{

    // É interessante tu usar esse mesmo componente e mudar seus elementos de acordo com qual tela ele será exibido.
    // O objetivo é tirar o botão quando for a tela de registro e colocar quando não for, tudo através desse componente
    return (
        <Header>
            <Logo src={logo} alt='logomarca' />
            { /* Aqui foi dito: Se for passado um parametro home e ele for true então terá um botão */ }
            { props.home && (
                <ButtonHeader>
                    CADASTRE UM PONTO DE INTERESSE
                </ButtonHeader>
            ) }
        </Header>
    )
}
export default HeaderPage