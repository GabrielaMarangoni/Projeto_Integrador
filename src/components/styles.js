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
    width: 150px;
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
    padding-top: 170px;

`;



export const Button = styled.button`
    background: transparent;
    height: 35px;
    width: 35px;
    @media(max-width: 1440px){
      height: 15vw;
  }
`;