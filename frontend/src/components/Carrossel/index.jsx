import { Carousel } from 'antd';
import { useCallback, useEffect, useState } from 'react';

import { Carrossel, Name } from '../../components/Carrossel/styled';
import api from '../../services/api';

const CarrosselCorpo = () => {
    const [places, setPlaces] = useState([]);

    const getImages = useCallback(async () => {
        const response = await api.get('/places/all');
        setPlaces(response.data);
    }, [])

    useEffect(() => {
        getImages();
    }, [])

    return (
        <Carousel autoplay>
            { places.map(el => (
                <Carrossel key={el.id} src={el.images[0].image}>
                    <Name>
                        <h1>{el.name}</h1>
                        <h2>{el.address.city} - {el.address.state}</h2>
                    </Name>
                </Carrossel> 
            )) }   
        </Carousel>
      
    )
}

export default CarrosselCorpo;