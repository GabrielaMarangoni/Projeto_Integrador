import { Carousel } from 'antd';

import { Carrossel, Name } from '../../components/Carrossel/styled';

const CarrosselCorpo = () => {

    return (
        <Carousel autoplay>
            <Carrossel>
                <Name>
                    <h1>Praia Gravatá</h1>
                    <h2>Navegantes - SC</h2>
                </Name>
            </Carrossel> 

            <Carrossel>
                <Name>
                    <h1>Praia Gravatá</h1>
                    <h2>Navegantes - SC</h2>
                </Name>
            </Carrossel> 

            <Carrossel>
                <Name>
                    <h1>Praia Gravatá</h1>
                    <h2>Navegantes - SC</h2>
                </Name>
            </Carrossel> 

            <Carrossel>
                <Name>
                    <h1>Praia Gravatá</h1>
                    <h2>Navegantes - SC</h2>
                </Name>
            </Carrossel>        
        </Carousel>
      
    )
}

export default CarrosselCorpo;



