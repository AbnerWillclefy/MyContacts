import PropTypes from 'prop-types';

import { SwitchContainer, SwitchItem, SwitchSlider } from './styles';

export default function Switch({ isOn, toggle }) {
  return (
    <SwitchContainer onClick={toggle}>
      <SwitchSlider isOn={isOn} />
      <SwitchItem isOn={isOn} />
    </SwitchContainer>
  );
}

Switch.propTypes = {
  isOn: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};
