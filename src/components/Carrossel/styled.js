import styled from 'styled-components';

export const Carrossel = styled.h3`
    height: fit-content;
    color: #fff;
    line-height: 500px;
    width: 100%;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    background: #364d79;

    @media(max-width: 1440px){
      height: 80vh;
      width: 90%;
  }
/*   @media(max-width: 1024px){
      height: 80vh;
      width: 90%;
  } */
`;
export const CarrosselDistancia = styled.div`
    padding: 5px 300px 0 300px;
    @media(max-width: 1440px){
      padding: 5px 200px 0 200px;
  }
    @media(max-width: 1024px){
      padding: 5px 100px 0 100px;
  }
  @media(max-width: 768px){
      padding: 5px 30px 0 30px;
  }
`;