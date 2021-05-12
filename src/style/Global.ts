import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    background: url(https://image.freepik.com/free-vector/vintage-ornamental-flowers-background_52683-28040.jpg);
    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
