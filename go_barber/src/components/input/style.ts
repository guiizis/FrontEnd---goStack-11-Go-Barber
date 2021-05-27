import { Tooltip } from './../tooltip/index';

import styled, { css } from 'styled-components'

interface IInputProps {
  isFocused: boolean
  isFilled: boolean
  hasError: boolean
}

export const Container = styled.div<IInputProps>`
    padding: 16px;
    border-radius:10px;
    background: #232129;
    width: 100%;


    border: 2px solid #232129;
    color:#666360;

    display: flex;
    align-items: center;

    &+div{
      margin-top: 15px;
    }

 input{
   background: transparent;
   color: #f4ede8;
   border: 0;
   flex:1;
   
   width: 100%;
    &::placeholder{
      color: #666263;
    }
   
  }

  svg{
      margin-right: 15px;
    }

    ${props =>
    props.hasError &&
    css`
      border-color:#c53030;
    `}

    ${props =>
    props.isFocused &&
    css`
      color:#ff9000;
      border-color:#ff9000
    `}

    ${props =>
    props.isFilled &&
    css`
      color:#ff9000;
    `}
   
`

export const Error = styled(Tooltip)`
height: 20px;
margin-left: 16px;

svg{
  margin: 0;
}

span{
  background:#c53030 ;
  color: #fff;

  &::before{
    border-color:#c53030 transparent
  }
}
`

