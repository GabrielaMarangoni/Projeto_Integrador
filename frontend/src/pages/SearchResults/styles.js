import styled from 'styled-components';

export const Container = styled.div`
    height: fit-content;
    display: flex; 
    box-sizing: border-box;
`

export const Content = styled.div`
    width: 85vw;
    margin-left: 15vw;
    margin-right: auto;
    margin-top: 7vh; 
    padding: 100px 10vh 100px 30vh;
    display: flex;
    flex-direction: column;
`

export const Places = styled.div`
    display: flex;
    flex-direction: column;
   // align-items: center;
    min-width:center;
    width: 100%;
    min-height: center;
    height: 100%;
    border-radius: 10px;    
    
    h1, h2, h3 {
        width: fit-content;
        display: flex;
        margin: 0;
        margin-right: auto;
        
    }
    h1 {
        font-size: 50px;
    }
    h2 {
        font-size: 25px;
    }
    h3 {
        padding-top: 15px;
        font-size: 25px;
    }
`;
 
export const Images = styled.img`
    margin-top: 15px;
    display: flex;
    //align-items: center;
    background: #000;
    min-width: 250px;
    width: 70%;
    min-height: 50px;
    height: 350%;
    border-radius: 10px;
`;

export const ContainerTags = styled.div`
    background: #E5E5E5;
    height: fit-content;
    width:fit-content;  
    border-radius: 25px; 
`;

export const ContainerTagaComentarios = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    .break {
    flex-basis: 100%;
    height: 0;
  }
    
    h3 {
        width: fit-content;
        flex-wrap: wrap;
        display: flex;
        margin: 0;
        margin-right: auto;
        
    }
    h3 {
        font-size: 25px;
    }
`;
