import styled from "styled-components";

export const StyledContainer = styled.main`
    max-width: 1100px;
    margin: auto;       
        
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
          padding: 1px;
        
    }

`;