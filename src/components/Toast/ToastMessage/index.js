import PropTypes from 'prop-types';

import checkCircleIcon from '../../../assets/images/icons/check-circle.svg';
import xCircleIcon from '../../../assets/images/icons/x-circle.svg';

import { Container } from './styles';

export default function ToastMessage({ text, type }) {
  return (
    <Container type={type}>
      {type === 'success' && <img src={checkCircleIcon} alt="Check" /> }
      {type === 'error' && <img src={xCircleIcon} alt="X" /> }
      <strong>{text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'default']),
};

ToastMessage.defaultProps = {
  type: 'default',
};
