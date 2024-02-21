import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

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

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
      color: ${({ theme }) => theme.color.scarlet};
    `}
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
      color: ${({ theme }) => theme.color.black};
      list-style: none;
    `}
`;

export const Button = styled.button`
  border: none;
  color: ${({ theme }) => theme.color.white};
  width: 35px;
  height: 35px;
  padding: 0px;
  font-size: 25px;
  transition: background 0.3s;

  ${({ done }) =>
    done &&
    css`
      background: ${({ theme }) => theme.color.olivine};

      &:hover {
        background: #9edb86;
        font-weight: bold;
        cursor: pointer;
      }
    `}

  ${({ remove }) =>
    remove &&
    css`
      background: ${({ theme }) => theme.color.sunglo};

      &:hover {
        font-weight: bold;
        background: #ff7e7e;
        cursor: pointer;
      }
    `}
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};

  &:hover {
    color: ${({ theme }) => theme.color.teal};
    text-decoration: underline;
  }
  `;