import styled from "styled-components";

export const Unit = styled.section`
    margin: 5px 0;
    background: rgb(255, 255, 255);
`;

export const Header = styled.header`
    padding: 10px;
    margin : 0px;
    border-bottom: solid 2px #eee;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
        text-align: center;
    }

`;

export const Title = styled.h2`
    padding: 10px;
    margin : 0px;
`;

export const Body = styled.div`
    padding: 15px;
`;