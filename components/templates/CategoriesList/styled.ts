import styled from 'styled-components';
import { numberToRem } from '~/utils/rem';

export const CategoriesListStyled = styled.div`
  @keyframes h100 {
    0% {
      height: 0%;
    }
    100% {
      height: 0%;
    }
  }

  > .list {
    background: white;
    height: 100%;
    &:not(:last-child) {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    > .title {
      /* font-size: 1.05rem; */
      cursor: pointer;
      display: flex;
      /* align-items: center; */
      svg {
        margin-top: -0.1rem;
        margin-right: 0.5rem;
      }

      padding: 1rem;
      &.active {
        background: white;
      }
    }

    > .item {
      transition: 0.3s all;
      padding: 0.5rem 0;

      animation: h100 0.3s forwards;
      background: #ededed;
      max-height: 0%;

      overflow-y: auto;
      /* max-height: ${numberToRem(400, 1)}; */

      > div {
        color: ${props => props.theme.color.grayColor};
        cursor: pointer;
        padding: 0.5rem 0;
        padding-left: 1rem;
        transition: all 0.1s ease;

        &:hover {
          color: black;
          padding-left: 1.5rem;
        }
      }
    }
  }
`;
