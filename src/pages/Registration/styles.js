import styled from 'styled-components';

export const Gridlayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 15px;
`;

export const ImgPreview = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    object-fit: cover;
`;

export const TextAreaCadastro = styled.textarea`
    background: #D8D8D8;
    border-radius: 10px;
    width: 100%;
    padding: 15px;
`;

export const ImageInput = styled.label`
    display: flex;
    background: #D8D8D8;
    border-radius: 10px;
    min-height: 100px;
    height: fit-content;
    width: 100%;
    padding: 5px;
    cursor: pointer;

    align-items: center;
    justify-content: center;

    transition: all .2s;

    div {
        display: flex;
        border-radius: 10px;
        border: 1px dashed gray;
        min-height: 100px;
        width: 100%;
        padding: 15px;
        transition: all .2s;
    }

    section {
        display: flex;
        width: 30%;
        align-items: center;
        justify-content: center;
    }

    .section-two {
        width: 70%;
    }

    svg {
        font-size: 60px;
        color: gray;
        margin-right: 15px;
    }

    span {
        font-size: 18px;
        color: gray;
    }

    &:hover {
        background: rgba(216, 216, 216, .5);

        div {
            border: 1px dashed #77DD77;
        }
    }
`;

export const Row = styled.div`
    display: flex;
    width: 100%;

    h1 {
        margin-left: auto;
        margin-right: auto;
    }

    button {
        margin-left: auto;
        margin-right: auto;
    }

    justify-content: space-between;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 47%;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;  
    width: 100%; 
    padding: 10px 20px 10px 20px;
`;


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
    padding: 5vh 5vh 1.8vh 5vh;
    margin-top: 10vh;
    
    @media(max-width: 1440px){
        margin-top: 17vh;
  }

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
    font-family: Simonetta;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    align-items: center;
    margin-block-end: 60px;
    transition: background .2s;

    &:hover{
     background: #34cb79
;
}`;

export const InputCadastro = styled.input`
    background: #D8D8D8;
    border-radius: 10px;
    height: 50px;
    width: 100%;
    padding: 15px;
`;

export const SelectUF = styled.select` 
    background-color: #D8D8D8;
    border-radius: 10px;
    height: 50px;
    width: 100%;
    outline: none;
    padding-inline-start: 10px;   
`;

export const SelectPesquisar = styled.select` 
    background-color: #D8D8D8;
    width: 100%;
    height: 50px;
    padding-inline-start: 10px;   
    border-radius: 10px;
    outline: none;
`;