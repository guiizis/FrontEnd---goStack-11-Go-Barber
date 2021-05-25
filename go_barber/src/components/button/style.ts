import { shade } from 'polished'
import styled from 'styled-components'

export const Container = styled.button`
  
    background:#ff9000;
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding:0px 16px;
    color: #312e38;
    width:100% ;
    font-weight: 500;
    margin: 16px 0px;
    transition: 0.2s;

    &:hover{
      background-color: ${shade(0.3, '#ff9000')};
      transform:translateX(10px);
    }
 
`