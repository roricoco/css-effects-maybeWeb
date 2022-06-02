import styled from "styled-components";
import { numberToRem } from "~/utils/rem";

const HomeStyled = styled.div`


  .title {
    text-align : center;
    font-size: 5rem;
    margin : 4rem 0;
  }

  .buttons {
    max-width: 1440px;
    margin: 0 auto;
    width : 100%;
    display : flex;
    grid-gap: 1rem;
    overflow-x : auto;

    > button {
      cursor: pointer;
      display : flex;
      justify-content : center;
      align-items: center;
      height: ${numberToRem(40, 1)};
      background : transparent;
      border : 1px solid rgba(0, 0, 0, 0.4);
      padding: 0 2rem;
    }
  }
  

  .uploadInput {
    max-width: ${numberToRem(500, 1)};
    width: 100%;
    margin: 0 auto;
    height : ${numberToRem(500, 1)};
    display : flex;
    position : relative;
    border : 1px dashed rgba(0, 0, 0, 0.4);
    justify-content: center;
    align-items : center;

    font-size : 4rem;

    input {
      position: absolute;
      top: 0;
      left : 0;
      width: 100%;
      height :100%;
      opacity: 0;
      cursor: pointer;
    }
  }


  .image {
    display: flex;
    justify-content : center;
  }

  

`;

export default HomeStyled;