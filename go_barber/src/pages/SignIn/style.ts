
import styled from 'styled-components'
import loginPic from '../../assets/sign-in-background.png'
import { darken, shade } from 'polished'

export const Container = styled.div`
height: 100vh;
display: flex;
align-items: stretch;

a{
    text-decoration: none;
    color: #f4ede8;
    font-family: 'Roboto Slab';
    font-weight: 400;
    display: flex;
    transition: color 0.5s;

    &:hover{
      color:${shade(0.4, '#f4ede8')}
    }

    svg{
      margin-right:16px;
    }
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 700px; 

form{
  margin: 80px 0px;
  width: 340px;
  text-align: center;
  display: flex;
  flex-direction:column;
  align-items: center;

 h1{
   margin-bottom: 24px;
 }
}

`

export const Background = styled.div`
  flex: 1;
  background: url(${loginPic}) no-repeat center;
  background-size: cover;

`