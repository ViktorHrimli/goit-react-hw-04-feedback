import PropTypes from 'prop-types';
import { Btn } from './Buttons.styled';

export const Buttons = ({ options, onLeaveFeedback }) => {
  return options.map((key, idx) => (
    <Btn
      key={idx}
      type="button"
      onClick={_ => onLeaveFeedback({ type: key, payload: 1 })}
    >
      {key}
    </Btn>
  ));
};

Buttons.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
