import React from 'react';
import logo from '../../images/logo.png';

import {Container} from '../../components/styles';
import { Logo, Header, ContainerBranco, Line } from './styles';

const Registration =() =>{

    return (
        <Container>
            <Header>
                <Logo src={logo} alt='logomarca' />
            </Header>

            <Line>
                <ContainerBranco>

                </ContainerBranco>
            </Line>
            
        </Container>
    )
}
export default Registration