import styled from 'styled-components';

export const Places = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 250px;
    width: 100%;
    min-height: 250px;
    height: 100%;
    border-radius: 10px;
    
    cursor: pointer;
    
    h1, h2 {
        width: fit-content;
        display: flex;
        margin: 0;
        margin-right: auto;
    }
`;
 
export const Images = styled.img`
    margin-top: 15px;
    display: flex;
    align-items: center;
    min-width: 250px;
    width: 100%;
    min-height: 250px;
    max-height: 250px;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
    background: #2F4F4F;
`;

export const Container = styled.div`
    height: fit-content;
    display: flex; 
    box-sizing: border-box;
`

export const Content = styled.div`
    width: 85vw;
    margin-left: 15vw;
    margin-right: auto;
    margin-top: 3vh; 
    padding: 100px 10vh 100px 10vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 100px;
    overflow-y: auto;
    user-select: none;
`