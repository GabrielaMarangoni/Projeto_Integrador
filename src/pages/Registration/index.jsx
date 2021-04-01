import React, { useCallback, useState} from 'react';
import CityValues from '../../contents/city';


import { ContainerBranco, Line, LineInput, InputCadastro, Label, LineText, ButtonCadastrar, SelectUF, SelectPesquisar} from './styles';
import {} from './../../components/styles'
import HeaderPage from '../../components/Header/index'

const Registration =() =>{

    const [state, setState] = useState();
    const [city, setCity] = useState();
  

    const handleUF = useCallback((estado) => {
        setState(estado)
    }, [state])

    // Essa função (Na verdade é uma constante que é interpretada como função) deve ser mudada toda vez que a cidade muda. O estado já é configurado
    // No proprio elemento Home. 
    // Dentro do [] precisa estar aquilo que tu está usando na função ou aquilo que a sua função depende
    const handleCity = useCallback((city) => {
        setCity(city)
    }, [city])

 
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
                            <h1  font-weight = 'bold' >Cadastro do ponto de interesse</h1>
                        </Line>
                        
                        <LineText>
                            <LineInput>
                                <Label>Nome do lugar</Label>
                                <InputCadastro/>
                                <Label>Endereço</Label>
                                <InputCadastro/> 
                                <Label>Estado</Label>
                                    <SelectUF onChange = {(e) => handleUF(e.target.value)} value = {state}>
                                        <option key = 'init'>Selecione o Estado</option>
                                        {CityValues.estados.map((uf, index) => (
                                            <option key ={index.toString()} value = {uf.sigla}>{uf.nome}</option>
                                        ))}
                                    </SelectUF>                                
                                <Label>Descrição sobre o lugar</Label>
                                
                                <InputCadastro/> 
                            </LineInput>
                       
                            <LineInput>
                                <Label>Imagem</Label>
                                <InputCadastro/>  
                                <Label>Número/Complemento</Label>
                                <InputCadastro/>     
                                <Label>Cidade</Label>
                                <SelectPesquisar  onChange = {(e) => handleCity(e.target.value)} value = {city}>
                                    <option key = 'init'>Selecione a Cidade</option>
                                    {CityValues.estados.find((city) => city.sigla == state)?.cidades.map((cities, index) => (
                                        <option key ={index.toString()}  value = {cities}>{cities} </option>
                                    ))}
                                    </SelectPesquisar> 
                                <Label>Tags sobre o lugar</Label>
                                <InputCadastro/>     
                            </LineInput>
                        </LineText>
                              
                        <ButtonCadastrar>Cadastrar ponto de interesse </ButtonCadastrar>   
                      
                    </ContainerBranco>
                </Line>
           
        </React.Fragment>

    )
}
export default Registration