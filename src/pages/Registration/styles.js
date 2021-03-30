import styled from 'styled-components';

// Só mexer como quiser.
// Veja que aqui eu peguei como ideia o height do logo. O valor não é o mesmo, só peguei como ideia
export const Container = styled.div`
  background: #40A798;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding-top: 23vh;

  @media(max-width: 1024px) {
      padding-top: 12vh;
  }

  @media(max-width: 1440px) {
      padding-top: 14vh;
  }

  @media(max-width: 375px) {
      padding-top: 22vh;
  }
`;

// Aqui o fit-content significa que o height é igual ao máximo dos elementos filhos, 
// no caso: Button e Logo
export const Header = styled.header`
  background: #2F4F4F;
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  position: fixed;
  padding: 10px 10px 10px 10px;
`;

export const Logo = styled.img`
  height: 6vh;
  @media(max-width: 1024px){
      height: 10vh;
  }
  @media(max-width: 1440px){
      height: 12vh;
  }
  @media(max-width: 375px){
      height: 20vh;
  }
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
    padding: 10px 10px 10px 10px;
    display: flex;
    flex-direction: column;

`;

export const ContainerBranco = styled.div`
    background: #FFF6F6;
    width: 50vw;
    height: 70vh;
    box-sizing: border-box;
    border-radius: 20px;
    padding-top: 10vh;

`;

export const Label = styled.text`
    font-size: 14px;
    margin-bottom: 8px;

`;


export const ButtonCadastrar = styled.button`
    background: #D3D3D3;
    height: 50px;
    width: 160px;
    border-radius: 10px;
    outline: none;
    font-family: Simonetta;
    &:hover{
     background: #e6ffe6;
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