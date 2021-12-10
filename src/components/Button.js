import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 52px;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background: ${({ theme }) => theme.colors.primary.main};
  transition: background .2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background: #ccc;
    cursor: default;
  }

`;
