import styled from 'styled-components';
import { numberToRem } from '~/utils/rem';

export const HeaderStyled = styled.div`
  height: ${numberToRem(56, 1)};
  background : ${props => props.theme.color.headerBlackBackground};
  color: ${props => props.theme.color.blackGrayColor};

  display: flex;
  align-items: center;

  padding: 0 1rem;


  .title {
    
  }

  .white {
    color : white;
  }
  
`
