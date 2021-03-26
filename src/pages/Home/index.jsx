import React, { useCallback, useState } from 'react';
import { FaSearchLocation } from "react-icons/fa";
import CarrosselCorpo from '../../components/Carrossel/index';
import CityValues from '../../contents/city';

import { SelectUF, Container, LineInputs, LineH1, Button, SelectPesquisar, SelectTags} from '../../components/styles';
import HeaderPage from '../../components/Header/index';
import { CarrosselDistancia } from '../../components/Carrossel/styled';

const Home = () => {
    
    const [state, setState] = useState();
    const [city, setCity] = useState();
  

    const handleUF = useCallback((estado) => {
        setState(estado)
    }, [state])

    const handleCity = useCallback((estado) => {
        setCity(estado)
    }, [state])


    return (
        <Container>
            
            <HeaderPage/>            

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
                
                <SelectTags/>
                <Button> <FaSearchLocation  size = {35} name = 'FaSearchLocation' color = '#000'/> </Button> 
            </LineInputs>

            <LineH1>
                <h1>PRINCIPAIS PONTOS JÁ ADICIONADOS</h1>
            </LineH1>
          
           <CarrosselDistancia>
            <CarrosselCorpo></CarrosselCorpo>
            </CarrosselDistancia>
        </Container>
    )
}

export default Home;