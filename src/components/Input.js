import { memo } from 'react';

import styled, { css } from 'styled-components';

export default memo(styled.input`
  width: 100%;
  height: 52px;
  background: ${({ theme }) => theme.colors.input};
  border: 2px solid ${({ theme }) => theme.colors.input};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  padding: 0 16px;
  font-size: 16px;
  outline: none;

  transition: border-color 0.2s ease-in;

  &:focus {
    border-color: ${({ theme }) => theme.colors.main};
  }

  ${({ theme, error }) => error
    && css`
      color: ${theme.colors.danger};
      border-color: ${theme.colors.danger} !important;
    `}

    &[disabled] {
    background-color: ${({ theme }) => theme.colors.surface};
    border: 2px solid ${({ theme }) => theme.colors.gray[400]};
    opacity: 0.5;
  }
`);
