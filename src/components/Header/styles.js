import styled from 'styled-components';

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

export const ButtonHeader = styled.button`
    background: #D3D3D3;
    height: 50px;
    width: 160px;
    border-radius: 10px;
    outline: none;
    font-family: Simonetta;
    &:hover{
     background: #e6ffe6;
}`;