import { Carousel } from 'antd';
import { useCallback, useEffect, useState } from 'react';

import { Carrossel, Name } from '../../components/Carrossel/styled';
import api from '../../services/api';

const CarrosselCorpo = ({images}) => {
    

    return (
        <Carousel autoplay>
            { images.map(image => (
                <Carrossel key={image.id} src={image.image}>
                    
                </Carrossel> 
            )) }   
        </Carousel>
      
    )
}

export default CarrosselCorpo;