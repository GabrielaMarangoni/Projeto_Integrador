import styled from 'styled-components';

export const Line = styled.div`
    display: flex; 
    padding: 10px 10px 10px 0px;
`;
export const Container = styled.aside`
    background: #C4C4C4;
    width: 15vw;
    height: 100vh;
    box-sizing: border-box;
    margin-top: 7vh;
    padding: 0vh 2vh 1.8vh 2vh;
    position: fixed;

    @media(max-width: 1440px){
        margin-top: 10vh;
        width: 17vw;
  }
  @media(max-width: 1024px){
        margin-top: 9vh;
        width: 20vw;
  }
`;

export const Label = styled.text`
    font-size: 14px;
    margin-bottom: 8px;
    padding-top: 15px;
    display: flex;
    margin-right: auto;
    width: fit-content;
    padding-left: 10px;
`;

export const SelectUF = styled.select` 
    background-color: #D8D8D8;
    border-radius: 10px;
    height: 50px;
    width: 100%;
    outline: none;
    padding-inline-start: 10px;  
`;

export const SelectCidade = styled.select` 
    background-color: #D8D8D8;
    width: 100%;
    height: 50px;
    padding-inline-start: 10px;   
    border-radius: 10px;
    outline: none;
`;
