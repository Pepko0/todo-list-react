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
        margin: 0 auto;
        font-family: 'Lato', sans-serif;
      }
`;
