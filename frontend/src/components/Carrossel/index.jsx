import { Carousel } from 'antd';
import { Carrossel} from '../../components/Carrossel/styled';

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