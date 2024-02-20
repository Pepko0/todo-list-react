import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.transparent};
  border: none;
  color: ${({ theme }) => theme.color.teal};
  font-size: 20px;
  transition: 0.3s;

&:hover {
    cursor: pointer;
    color: rgb(1, 175, 175);
  }


    &:disabled {
      color: ${({ theme }) => theme.color.silver};
      cursor: default;
    }


`;

