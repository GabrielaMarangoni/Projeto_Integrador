import styled from 'styled-components';

export const Carrossel = styled.div`
  height: 55vh;
  color: #fff;
  width: 100%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  background-image: url('https://i.pinimg.com/originals/06/fd/c2/06fdc2a4b423c38a1c38bc2cb1b8b8a5.jpg');
  background-size: cover;
  border-radius: 12px;

  @media(max-width: 1440px){
    height: 80vh;
    width: 90%;
  }
/*   @media(max-width: 1024px){
      height: 80vh;
      width: 90%;
  } */
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  position: absolute;
  height: fit-content;
  padding: 10px 30px;
  background: #fff;
  border-top-left-radius: 12px;

  h1, h2 {
    margin: 0;
  }
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