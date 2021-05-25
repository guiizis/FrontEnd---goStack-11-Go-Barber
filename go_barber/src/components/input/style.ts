import styled from 'styled-components'

export const Container = styled.div`
  padding: 16px;
    border-radius: 5px;
    background: #232129;
    border: 2px solid #232129;
    width: 100%;
    display: flex;
    align-items: center;

    svg{
      margin-right: 15px;
      color: #666263;
    }

    &+div{
      margin-top: 15px;
    }
 
 input{
   background: transparent;
   color: #f4ede8;
   border: transparent;
    flex:1;
   
    &::placeholder{
      color: #666263;
    }


  }
`