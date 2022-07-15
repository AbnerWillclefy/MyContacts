import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  height: 52px;
  border: none;
  padding: 0 16px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.main};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  font-size: 16px;
  font-weight: bold;
  color: #FFF;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: filter 0.2s ease-in;

  &:hover {
    filter: brightness(1.2);
  }

  &:active {
    filter: brightness(0.8);
  }

  &[disabled] {
    background: ${({ theme }) => theme.colors.gray[200]} !important;
    color: ${({ theme }) => theme.colors.disabled.color} !important;
    cursor: default !important;

    &:hover {
      filter: none;
    }

    &:active {
      filter: none;
    }
  }

  ${({ theme, danger }) => danger
    && css`
      background: ${theme.colors.danger};
    `}
`;
