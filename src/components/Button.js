import styled, { css } from 'styled-components';

export const Button = styled.button`
  padding: 0 16px;
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

  ${({ theme, danger }) => danger && css`
    background: ${theme.colors.danger.main};

    &:hover {
      background: ${theme.colors.danger.light};
    }

    &:active {
      background: ${theme.colors.danger.dark};
    }
  `}

`;
