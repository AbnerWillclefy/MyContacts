import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;

  padding: 0px 16px;

  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);

  position: fixed;
  left: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  background: #fff;
  border-radius: 4px;
  padding: 24px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  & > h1 {
    font-size: 22px;
    color: ${({ theme, danger }) => (danger ? theme.colors.danger : theme.colors.title)};
  }

  .modal-body {
    margin-top: 32px;
  }
`;

export const Footer = styled.footer`
  margin-top: 32px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancel-button {
    background: transparent;
    border: none;
    font-size: 16px;
    margin-right: 24px;
    color: ${({ theme }) => theme.colors.gray[300]};

    &[disabled] {
      cursor: default;
    }
  }
`;
