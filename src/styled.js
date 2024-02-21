import styled from "styled-components";
import { NavLink } from "react-router-dom";
const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    color: white;
    text-decoration: none;
    padding: 5px;
    margin:20px;
    font-size: 23px;;

    &.${activeClassName} {
        font-weight: bold;
    }
`;

export const Menu = styled.div`
    display: flex;
    justify-content: center;
    background-color:${({ theme }) => theme.color.teal};
    margin-bottom: 80px;
`;