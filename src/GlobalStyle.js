import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html { 
        box-sizing: border-box;
      }   
      
      *, ::after, ::before {
        box-sizing: inherit;
      }
      
      body {
        background: ${({ theme }) => theme.color.gallery};
        max-width: 800px;
        padding: 10px;
        margin: 0 auto;
        font-family: 'Lato', sans-serif;
      }
      
      
`;
