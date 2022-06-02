import styled, { createGlobalStyle } from "styled-components";

const MainStyled = createGlobalStyle`
  body {
    height: 100%;
    background: #f2f3f7;

    -ms-overflow-style: none;
      &::-webkit-scrollbar{
      display:none;
    }

  }

`;

export default MainStyled;