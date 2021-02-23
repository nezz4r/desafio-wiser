import { createGlobalStyle } from 'styled-components';
import { Reset } from './reset';

const GlobalStyle = createGlobalStyle`
${Reset}


html,
body {
  font-family: 'Montserrat', sans-serif;
  background: ${({ theme }) => theme.colors.background};
  @media screen and (max-width: 768px) {
    background: ${({ theme }) => theme.colors.backgroundDark};
  }
  
}

`;

export default GlobalStyle;
