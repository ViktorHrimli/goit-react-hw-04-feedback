import PropTypes from 'prop-types';
import { Box } from 'commonStyle/Common.styled';
import { Notification } from '../Notificaton/Notification';
import { IfoStatistics } from './Info/Info';

export const Statistics = ({
  message,
  Obj,
  total,
  positivePercentage,
  state,
}) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start">
      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <IfoStatistics
          Obj={Obj}
          total={total}
          positivePercentage={positivePercentage}
          state={state}
          message={message}
        />
      )}
    </Box>
  );
};

Statistics.propTypes = PropTypes.object.isRequired;
