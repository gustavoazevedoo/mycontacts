import styled from 'styled-components';

export const Container = styled.header`
  margin-bottom: 24px;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;

    img {
      transform: rotate(-90deg);
      margin-right: 8px;
    }

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
    }
  }

  h1 {
    font-size: 24px;
    margin-top: 8px;
  }
`;
