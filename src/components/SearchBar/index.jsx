import React, { useCallback, useState } from 'react';
import HeaderPage from '../../components/Header/index';
import { useHistory } from 'react-router-dom';
import CityValues from '../../contents/city';
import { Container , Line, Label, SelectCidade, SelectUF} from './styles';

const SearchBar =(props) =>{
    const history = useHistory();
    const [state, setState] = useState();
    const [city, setCity] = useState();

    const goToRegister = useCallback(() => {
        history.push('/cadastro')
    }, [])

    const handleUF = useCallback((estado) => {
        setState(estado)
    }, [state])

    const handleCity = useCallback((city) => {
        setCity(city)
    }, [city])
     return (
        <>
       
        <Line>   
            <Container>
                <Label>Estado</Label>
                    <SelectUF onChange = {(e) => handleUF(e.target.value)} value = {state}>
                        <option key = 'init'>Selecione o Estado</option>
                        {CityValues.estados.map((uf, index) => (
                            <option key ={index.toString()} value = {uf.sigla}>{uf.nome}</option>
                        ))}
                    </SelectUF> 

                <Label>Cidade</Label>
                    <SelectCidade  onChange = {(e) => handleCity(e.target.value)} value = {city}>
                        <option key = 'init'>Selecione a Cidade</option>
                        {CityValues.estados.find((city) => city.sigla == state)?.cidades.map((cities, index) => (
                            <option key ={index.toString()}  value = {cities}>{cities} </option>
                        ))}
                    </SelectCidade> 

                        <h1>"aqui ainda terão as opções de tags"</h1>
                    
            </Container>

        </Line>
     
        </>
    )
}
export default SearchBar
