import PropTypes from 'prop-types';
import { StatisticItems } from '../Statistics.styled';
import { HederTitleFeedback } from 'components/Feedback.styled';
import { Box } from 'commonStyle/Common.styled';

export const IfoStatistics = ({
  Obj,
  total,
  positivePercentage,
  state,
  message,
}) => {
  return (
    <Box>
      <HederTitleFeedback>{message}</HederTitleFeedback>
      {Obj.map((item, idsx) => {
        return (
          <StatisticItems key={idsx}>
            {item[0]}: {item[1]}
          </StatisticItems>
        );
      })}
      <StatisticItems>Total: {total}</StatisticItems>
      <StatisticItems>
        Positive feedback:
        {!Number.isNaN(state) && positivePercentage}
      </StatisticItems>
    </Box>
  );
};
IfoStatistics.propTypes = {
  message: PropTypes.string.isRequired,
  Obj: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
  state: PropTypes.number.isRequired,
};
