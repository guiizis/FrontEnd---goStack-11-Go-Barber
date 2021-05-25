import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  outline: 0;
  box-sizing: border-box;
}

body{
  background: #312e38;
  font-family:'Roboto Slab',serif;
  color: #fff;
  font-size: 16px;
  -webkit-font-smoothing:antialiased;
}

h1,h2,h3,h4,h5,h6,strong{
  font-weight: 500;
}

button{
  cursor: pointer;
}
`