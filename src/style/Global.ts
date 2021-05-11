import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    background: url(https://mouse.farm/images/backgrounds/pattern-v4.png);
    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
