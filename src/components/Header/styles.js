import styled from 'styled-components';


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
  padding: 10px 50px 10px 50px;
  z-index: 999999;
`;

export const Logo = styled.img`
  height: 6vh;
  cursor: pointer;
  @media(max-width: 1440px){
      height: 9vh;
  }
  @media(max-width: 1024px){
      height: 8vh;
  }
`;

export const ButtonHeader = styled.button`
    background: #D3D3D3;
    height: 50px;
    width: 160px;
    border-radius: 10px;
    outline: none;
    font-family: Simonetta;
    font-size: 12px;
    font-weight: bold;
    @media(max-width: 1440px){
      height: 8vh;
  }
    &:hover{
     background: #e6ffe6;
}`;
// aling só funciona usando flex junto
// svg para estilizar o icone/imagem
export const ButtonReturn = styled.button`
  background: transparent;
  font-family: Simonetta;
  font-weight: bold;
  height: fit-content;
  width: fit-content;
  color: white;
  font-size: 17px;
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: row;
  svg{margin-right: 18px};
`;