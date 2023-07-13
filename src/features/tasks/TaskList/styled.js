import styled, {css} from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 5px;
    border-bottom: solid 1px #eee;

    ${({hidden}) => hidden && css`
        display: none;
        color: red;
    `}
`;

export const Content = styled.span`
    ${({done}) => done && css`
    text-decoration: line-through;
    color: #cecece;
    list-style: none;
    `}
`;

export const Button = styled.button`
    border: none; 
    color: white;
    width: 35px;
    height: 35px;
    padding: 0px;
    transition: background 0.3s;

    ${({done}) => done && css`
        background: #8dc477;

        &:hover {
            background: #9edb86;
            font-weight: bold;
            cursor: pointer;
        }
    `}

    ${({remove}) => remove && css`
        background: rgb(230, 113, 113);
        
        &:hover {
            font-weight: bold;
            background: #ff7e7e;
            cursor: pointer;
        }
    `}
`;