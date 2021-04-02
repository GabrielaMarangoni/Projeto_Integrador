import styled from 'styled-components';

export const Line = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;   
    padding: 10px 10px 10px 10px;
`;

export const LineInput = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;   
    padding: 10px 10px 10px 10px;
    display: flex;
    flex-direction: column;
    float: left;
    width: 250px;
    margin-left: auto;
    margin-right: auto;
`;

export const LineText = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

// fit-content é pra ficar tudo dentro do fundo branco idependente do tamanho da tela 
export const ContainerBranco = styled.div`
    background: #FFF6F6;
    width: 40vw;
    height: fit-content;
    box-sizing: border-box;
    border-radius: 20px;
    padding-top: 5vh;
    margin-top: 15vh;
    @media(max-width: 1024px){
      width: 60vw;
  }
    @media(max-width: 768px){
        width: 75vw;
    }
`;

export const Label = styled.text`
    font-size: 14px;
    margin-bottom: 8px;
    padding-top: 15px;
    display: flex;
    margin-right: auto;
    width: fit-content;
`;

export const ButtonCadastrar = styled.button`
    width: 260px;
    height: 56px;
    background-color: #A6C89A;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    font-size: 16px;
    margin-top: 40px;
    -webkit-transition: background-color 400ms;
    transition: background-color 400ms;
    font-family: Simonetta;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    align-items: center;
    margin-block-end: 60px;
    &:hover{
     background: #34cb79
;
}`;

export const InputCadastro = styled.input`
    background: #D8D8D8;
    border-radius: 10px;
    height: 50px;
    width: 250px;
    margin-right: 100px;
    margin-left: 100px;
    padding: 15px;
`;

export const SelectUF = styled.select` 
    background-color: #D8D8D8;
    border-radius: 10px;
    height: 50px;
    width: 250px;
    margin-right: 100px;
    margin-left: 100px;
    outline: none;
    padding-inline-start: 10px;   
`;

export const SelectPesquisar = styled.select` 
    background-color: #D8D8D8;
    width: 250px;
    height: 50px;
    margin-right: 100px;
    margin-left: 100px;
    padding-inline-start: 10px;   
    border-radius: 10px;
    outline: none;
`;