import PropTypes from 'prop-types';
import { StatisticItems } from 'components/Statistic/Statistics.styled';

export const Notification = ({ message }) => {
  return <StatisticItems>{message}</StatisticItems>;
};

Notification.propTypes = PropTypes.string.isRequired;
