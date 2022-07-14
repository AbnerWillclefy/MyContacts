import styled from 'styled-components';

export const SwitchContainer = styled.button`
  background: none;
  border: none;

  display: flex;
  align-items: center;

  position: relative;
`;

export const SwitchSlider = styled.div`
  height: 16px;
  width: 40px;
  border-radius: 12px;

  background-color: ${({ isOn }) => (isOn ? '#7b7b7b' : '#949494')};
`;

export const SwitchItem = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;

  background-color: ${({ isOn }) => (isOn ? '#222222' : '#FFFFFF')};

  position: absolute;

  right: ${({ isOn }) => (isOn ? 0 : 'calc(100% - 24px)')};

  transition: right 0.1s ease-in-out;
`;
