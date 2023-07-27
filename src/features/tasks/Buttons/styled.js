import styled, { css } from "styled-components";

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Button = styled.button`
  background-color: ${({theme}) => theme.color.transparent};
  border: none;
  color: ${({theme}) => theme.color.teal};
  font-size: 20px;
  transition: 0.5s;

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({theme}) => theme.color.silver};
      cursor: default;
      transform: 1s;
    `}

  &:hover {
    cursor: pointer;
    color: rgb(1, 175, 175);
  }
`;
