import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  > form {
    h1 {
      margin-bottom: 20px;
    }
  }

  img {
    margin-top: 20px;
    height: 200px;
  }

  > p > a {
    color: #1d8bf0;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#1D8BF0')};
    }
  }
`;
