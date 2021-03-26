import React from 'react';
import logo from '../../images/logo.png';

import { Logo, Header, ButtonHeader } from './styles';
const HeaderPage =() =>{

    return (
        <Header>
            <Logo src={logo} alt='logomarca' />
            <ButtonHeader>
                CADASTRE UM PONTO DE INTERESSE
            </ButtonHeader>
        </Header>
    )
}
export default HeaderPage