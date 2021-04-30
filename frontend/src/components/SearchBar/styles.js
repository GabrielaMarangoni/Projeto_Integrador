import styled from 'styled-components';

export const Container = styled.aside`
    background: #C4C4C4;
    width: 15vw;
    height: 100vh;
    box-sizing: border-box;
    padding: 7vh 2vh 1.8vh 2vh;
    position: fixed;

    .part-one {
        height: 20vh;
    }

    .part-two {
        height: 69vh;

        .button-div {
            height: 20%;
        }
    }

    @media(max-width: 1440px){
        padding-top: 10vh;
        width: 17vw;
  }
  @media(max-width: 1024px){
        padding-top: 9vh;
        width: 20vw;
  }
`;

export const Label = styled.text`
    font-size: 16px;
    margin-bottom: 8px;
    padding-top: 20px;
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


export const ContainerTags  = styled.div` 
    background-color: #D8D8D8;
    width: 100%;
    height: 80%;
    padding: 10px;

    overflow-y: auto; // ele fala que agora quando o containerTags encher ele roda 
    user-select: none; // não deixa o usuário selecionar nada

    div {
        display: flex;
        align-items: center;
        width: 100%;

        input {
            margin-right: 15px;
        }
    }
`;

export const  ButtonFilter = styled.button` 
    background-color: #8d8d8d;
    display: flex;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    height: 50px;
    margin-top: 4vh;
`;

export const Label2 = styled.text`
    font-size: 20px;
    display: flex;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    position: fixed;
`;
