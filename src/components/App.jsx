import React, { useState } from 'react';
import { Box } from 'commonStyle/Common.styled';
import { HederTitleFeedback } from './Feedback.styled';
import { Buttons } from './Buttons/Buttons';
import { Statistics } from './Statistic/Statistics';
import { Section } from './Feedback.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementValue = name => {
    if (name === 'good') {
      return setGood(prevState => prevState + 1);
    }
    if (name === 'bad') {
      return setBad(prevState => prevState + 1);
    }
    if (name === 'neutral') {
      return setNeutral(prevState => prevState + 1);
    }
  };

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
          <Buttons options={KEYS} onLeaveFeedback={incrementValue} />
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
