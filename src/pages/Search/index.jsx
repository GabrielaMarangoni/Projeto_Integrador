import React, { useCallback, useState } from 'react';
import CarrosselCorpo from '../../components/Carrossel/index';
import CityValues from '../../contents/city';

import HeaderPage from '../../components/Header/index';
import { CarrosselDistancia } from '../../components/Carrossel/styled';
import { } from '../../components/styles';
import { ContainerBranco } from './styles';

const Home = () => {
    
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


    return (
        <>            
            <HeaderPage home/>            

          
           
          
    {/*        <CarrosselDistancia>
            <CarrosselCorpo></CarrosselCorpo>
            </CarrosselDistancia> */}
       </>
    )
}

export default Home;
