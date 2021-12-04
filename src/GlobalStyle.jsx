import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden;
    background-color: #0a3d62;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    font-family: 'Lato', sans-serif;
  }
`;
