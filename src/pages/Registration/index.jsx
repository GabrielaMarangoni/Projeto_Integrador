import React from 'react';


import { Container, ContainerBranco, Line, LineInput, InputCadastro, Label } from './styles';
import HeaderPage from '../../components/Header/index'

const Registration =() =>{

    // Aqui tu usou o React.Fragment que é algo que tu n acha no teu html real. ELE NÃO É UMA TAG. Tu não acha ele no inspect, por exemplo.
    // Por padrão, o React exige que haja um elemento pai e dentro todos os outros elementos. Por isso, antes, tudo estava dentro do Container.
    // Dessa vez, o Container não tem influência nenhuma no Header por não ter o elemento Header como filho dele

    // Observe que o header sem a props home não tem o botão exibido
    return (
        <React.Fragment>
            <HeaderPage/>

          
                <Line>
                    <ContainerBranco>
                        <Line>
                            <h1>Cadrasto do ponto de interesse</h1>
                        </Line>
                        
                        <LineInput>
                            <Label>Nome do lugar</Label>
                            <InputCadastro/>
                       
                        </LineInput>

                        <LineInput>
                            <Label>Endereço</Label>
                            <InputCadastro/>          
                        </LineInput>

                        <LineInput>
                            <Label>Estado</Label>
                            <InputCadastro/>                      
                        </LineInput>
                      
                    </ContainerBranco>
                </Line>
           
        </React.Fragment>

    )
}
export default Registration