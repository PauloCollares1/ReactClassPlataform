import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: monospace;
  }
  body{
    width: 100%;
    height: 100vmin;
    background-color: ${props => props.theme.pallete.background};
  }
`;
