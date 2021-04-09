import React, { useCallback, useState } from 'react';
import { FaSearchLocation } from "react-icons/fa";
import CarrosselCorpo from '../../components/Carrossel/index';
import CityValues from '../../contents/city';
import { useHistory } from 'react-router-dom';

import { SelectUF, LineInputs, LineH1, Button, SelectPesquisar} from '../../components/styles';
import HeaderPage from '../../components/Header/index';
import { CarrosselDistancia } from '../../components/Carrossel/styled';

const Home = () => {
    
    const [state, setState] = useState();
    const [city, setCity] = useState();
    const history = useHistory();

    const handleUF = useCallback((estado) => {
        setState(estado)
    }, [state])

    // Essa função (Na verdade é uma constante que é interpretada como função) deve ser mudada toda vez que a cidade muda. O estado já é configurado
    // No proprio elemento Home. 
    // Dentro do [] precisa estar aquilo que tu está usando na função ou aquilo que a sua função depende
    const handleCity = useCallback((city) => {
        setCity(city)
    }, [city])

    const goToRegister = useCallback(() => {
        history.push('/cadastro')
    }, [])

    const goToSearchPage = useCallback(() => {
        history.push('/pesquisa')
    }, [])
   


    return (
        <>           
            <HeaderPage home onClick={goToRegister}/>
          
            
            <LineInputs>
                <SelectUF onChange = {(e) => handleUF(e.target.value)} value = {state}>
                    <option key = 'init'>Selecione o Estado</option>
                    {CityValues.estados.map((uf, index) => (
                        <option key ={index.toString()} value = {uf.sigla}>{uf.nome}</option>
                    ))}
                </SelectUF>

                <SelectPesquisar  onChange = {(e) => handleCity(e.target.value)} value = {city}>
                <option key = 'init'>Selecione a Cidade</option>
                {CityValues.estados.find((city) => city.sigla == state)?.cidades.map((cities, index) => (
                    <option key ={index.toString()}  value = {cities}>{cities} </option>
                ))}
                </SelectPesquisar>

                <Button onClick={goToSearchPage}> <FaSearchLocation  size = {35} name = 'FaSearchLocation' color = '#000'/> </Button> 
            </LineInputs>

            <LineH1>
                <h1>PRINCIPAIS PONTOS JÁ ADICIONADOS</h1>
            </LineH1>
          
           <CarrosselDistancia>
            <CarrosselCorpo></CarrosselCorpo>
            </CarrosselDistancia>
       </>
    )
}

export default Home;
