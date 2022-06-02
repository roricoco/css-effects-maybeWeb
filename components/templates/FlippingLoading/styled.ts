import styled from 'styled-components';
import { numberToRem } from '~/utils/rem';

export const FlippingLoadingStyled = styled.div<{
  color?: string;
}>`

width: 2.5rem;
  height: 3rem;
  border: 3px solid transparent;
  border-top-color: ${props => props?.color ? props.color : "#fc2f70"};
  border-bottom-color: ${props => props?.color ? props.color : "#fc2f70"};
  border-radius: 50%;
  animation: spin-stretch 2s ease infinite;

@keyframes spin-stretch {
  50% {
    transform: rotate(360deg) scale(0.4, 0.33);
    border-width: 8px;
  }
  100% {
    transform: rotate(720deg) scale(1, 1);
    border-width: 3px;
  }
}
/* 

  perspective: 700px;

  .plane {
    width: ${numberToRem(16, 1)};
    height: ${numberToRem(16, 1)};
    background-color: ${props => props?.color ? props.color : "#fc2f70"};
    transform: rotate(0);
    animation: flip 1s infinite;
  }

  @keyframes flip {
    50% {
      transform: rotateY(180deg);
    }
    100% {
      transform: rotateY(180deg) rotateX(180deg);
    }
  } */
`
