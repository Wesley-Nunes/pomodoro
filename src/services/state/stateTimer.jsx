import React, {
  createContext, useContext, useState, useEffect,
} from 'react';

import PropTypes from 'prop-types';

import Timer from '../timer/Timer';

const TimerContext = createContext({});

const timerValues = {
  sessions: 4,
  workTime: { minutes: 25, seconds: 0 },
  breakTime: { minutes: 5, seconds: 0 },
};
const timer = new Timer(timerValues);

function TimerProvider({ children }) {
  const [values, setValues] = useState(timerValues);

  useEffect(() => {
    window.setInterval(() => {
      setValues({
        sessions: timer.values.sessions,
        workTime: {
          minutes: timer.values.workTime.minutes,
          seconds: timer.values.workTime.seconds,
        },
        breakTime: {
          minutes: timer.values.breakTime.minutes,
          seconds: timer.values.breakTime.seconds,
        },
      });
    }, 1000);
  }, []);

  const getValues = () => values;

  const publicActions = {
    getValues,
  };

  return (
    <TimerContext.Provider value={publicActions}>
      {children}
    </TimerContext.Provider>
  );
}

TimerProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

function useTimer() {
  return useContext(TimerContext);
}

export { TimerProvider, useTimer };
