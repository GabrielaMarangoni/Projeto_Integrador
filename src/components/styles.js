import styled from 'styled-components';

export const Container = styled.div`
  background: #40A798;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;

`;

export const SelectUF = styled.select` 
    background-color: #D3D3D3;
    position: center;
    width: 170px;
    height: 47px;
    margin-right: 30px;
    padding-inline-start: 10px;   
    border-radius: 10px;
    outline: none;
`;

export const SelectPesquisar = styled.select` 
    background-color: #D3D3D3;
    position: center;
    width: 338px;
    height: 47px;
    margin-right: 30px;
    padding-inline-start: 10px;   
    border-radius: 10px;
    outline: none;

    @media(max-width: 1440px){
      width: 15vw;
  }
    @media(max-width: 768px){
        width: 20vw;
    }
`;

export const SelectTags = styled.select` 
    background-color: #D3D3D3;
    position: center;
    width: 100px;
    height: 47px;
    margin-right: 30px;
    padding-inline-start: 10px;
    border-radius: 10px;
    outline: none;
    @media(max-width: 1440px){
      width: 8vw;
  }

`;

export const LineInputs = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100vw;
    padding-top: 130px;
    @media(max-width: 1440px){
      padding-top: 70px;
  }
    @media(max-width: 1024px){
      padding-top: 90px;
    }
  @media(max-width: 768px){
    padding-top: 120px;
  }
`;

export const LineH1 = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    padding-top: 50px;
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


export const Button = styled.button`
    background: transparent;
    height: 35px;
    width: 35px;
    @media(max-width: 1440px){
      height: 15vw;
  }
`;