import { memo } from 'react';

import styled from 'styled-components';

export default memo(styled.select`
  width: 100%;
  height: 52px;
  background: ${({ theme }) => theme.colors.input};
  border: 2px solid ${({ theme }) => theme.colors.input};
  color: ${({ theme }) => theme.colors.title};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  padding: 0 16px;
  font-size: 16px;
  outline: none;
  appearance: none;

  transition: border-color 0.2s ease-in;

  &:focus {
    border-color: ${({ theme }) => theme.colors.main};
  }

  &[disabled] {
    background-color: ${({ theme }) => theme.colors.surface};
    border: 2px solid ${({ theme }) => theme.colors.gray[400]};
    opacity: 0.5;
  }
`);
