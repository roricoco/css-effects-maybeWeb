import styled from 'styled-components';
import { numberToRem } from '~/utils/rem';

const HomeStyled = styled.div`
  background: ${props => props.theme.color.mainBackground};
  display: flex;
  justify-content: center;
  padding: 0 20px;

  .uploadImagePreview {
    width : 100%;
    height: 100%;
    object-fit : cover;
  }

  .container {
    width: 100%;
    max-width: 1600px;
    display: flex;
    justify-content: space-between;

    .miniTitle {
      margin-bottom: 2rem;
    }

    .left {
      -ms-overflow-style: none;
      &::-webkit-scrollbar {
        display: none;
      }
      border: 1px solid rgba(0, 0, 0, 0.1);

      overflow-y: auto;
      margin-top: ${numberToRem(70, 1)};
      width: ${numberToRem(280, 1)};
      margin-right: ${numberToRem(80, 1)};
      max-height: ${numberToRem(750, 1)};
    }

    .right {
      position: relative;
      padding-top: ${numberToRem(70, 1)};
      width: ${numberToRem(1250, 1)};

      .loading {
        position: absolute;

        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        > div {
          display: flex;
          justify-content: center;
          margin-bottom: 0.5rem;
        }
      }

      > .title {
        display: flex;
        align-items: center;
        font-size: 1.3rem;
        margin-bottom: 1rem;
      }

      .whiteBox {
        z-index: 2;
        position: relative;
        width: 100%;
        background: white;
        display: flex;
        justify-content: center;
        align-items: center;
        height: ${numberToRem(623, 1)};

        > .animationBox {
          width: ${numberToRem(300, 1)};
          height: ${numberToRem(300, 1)};
          background: white;
          animation: 1s swing-top-fwd;
          animation-fill-mode: forwards;
          overflow: hidden;

          & span {
            min-height: 100%;
            & img {
              object-fit: cover;
            }
          }
        }

        > .shadowBox {
          position : absolute;
          top : 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: -1;
          width: ${numberToRem(300, 1)};
          height: ${numberToRem(300, 1)};
          background: rgba(0, 100, 255, 0.2);
          border : 2px dashed rgba(0, 0, 0, 0.2);
          overflow: hidden;;
        }
      }
    }
  }
`;

export default HomeStyled;
