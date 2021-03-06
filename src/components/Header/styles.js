import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 74px;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  img {
    margin-bottom: 24px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
      margin-bottom: 16px;
    }
  }
`;
