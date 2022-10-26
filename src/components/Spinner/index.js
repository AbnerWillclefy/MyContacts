import PropTypes from 'prop-types';

import { StyledSpinner } from './styles';

export default function Spinner({ size, ...rest }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <StyledSpinner size={size} {...rest} />;
}

Spinner.propTypes = {
  size: PropTypes.number,
};

Spinner.defaultProps = {
  size: 32,
};
