import styled from "styled-components";

export const Body = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 10px;

    @media (max-width: 767px){
        grid-template-columns: 1fr;
    }
`;

export const NewTask = styled.input`
    border-radius: 0;
    border: solid 2px #a1a1a1;
    height: 40px;
    padding: 10px;  
`;

export const Button = styled.button`
    background: teal;
    color: white;
    border: none;
    font-size: 20px;
    height: 40px;
    border-radius: 0;
    transition: 0.5s;
    text-align: center;

    &:hover {
        background: hsl(180, 100%, 30%);
        cursor: pointer;
        transform: scale(1.1);
    

    @media (max-width: 767px) {
        transform: scale(1);
    }
}
`;