import { createGlobalStyle } from 'styled-components/macro';


// ==================================================
// Define estilo globar StarGrid
// ==================================================
const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-variant-ligatures: none;
  }

  body {
    margin: 0;
    font-family: 'Roboto', sans-serif !important;
    color: #000 !important;
    background-color: #FFF !important;
    line-height: 1 !important;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

`;

export default GlobalStyles;