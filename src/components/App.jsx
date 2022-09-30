import React from 'react';
import { Box } from 'commonStyle/Common.styled';
import { HederTitleFeedback } from './Feedback.styled';
import { Buttons } from './Buttons/Buttons';
import { Statistics } from './Statistic/Statistics';
import { Section } from './Feedback.styled';
import { useReducer } from 'react';

function nameReducer(state, actions) {
  switch (actions.type) {
    case 'good':
      return { ...state, good: state.good + actions.payload };

    case 'neutral':
      return { ...state, neutral: state.neutral + actions.payload };

    case 'bad':
      return { ...state, bad: state.bad + actions.payload };

    default:
      return;
  }
}

export const App = () => {
  const [{ good, neutral, bad }, dispatch] = useReducer(nameReducer, {
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = (good, neutral, bad) => {
    return ((good * 100) / (good + neutral + bad)).toFixed(1) + '%';
  };

  const objectState = {
    good,
    neutral,
    bad,
  };
  const KEYS = Object.keys(objectState);
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Section title="Feedback">
        <HederTitleFeedback>Please leave Feedback</HederTitleFeedback>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gridGap="20px"
        >
          <Buttons options={KEYS} onLeaveFeedback={dispatch} />
        </Box>
      </Section>
      <Section title="Statistics">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="flex-start"
          marginRight="auto"
        >
          <Statistics
            message="Statistics"
            Obj={Object.entries(objectState)}
            total={countTotalFeedback(good, neutral, bad)}
            positivePercentage={countPositiveFeedbackPercentage(
              good,
              neutral,
              bad
            )}
            state={(good, neutral, bad)}
          />
        </Box>
      </Section>
    </Box>
  );
};
