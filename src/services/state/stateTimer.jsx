import React, {
  createContext, useContext, useState, useEffect,
} from 'react';

import PropTypes from 'prop-types';

import Timer from '../timer/Timer';

const TimerContext = createContext({});

let timer = {
  values: {
    sessions: 4,
    workTime: { minutes: 25, seconds: 0 },
    breakTime: { minutes: 5, seconds: 0 },
  },
};
function TimerProvider({ children }) {
  const [values, setValues] = useState(timer.values);

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

  const createTimer = () => {
    timer = new Timer(timer.values);
  };

  const setTimerValues = ({
    sessions = values.sessions, workTime = values.workTime, breakTime = values.breakTime,
  }) => {
    timer.values = { sessions, workTime, breakTime };
  };

  const getValues = () => values;

  const start = () => timer.start();

  const stop = () => timer.stop();

  const reset = () => timer.reset();

  const publicActions = {
    createTimer,
    setTimerValues,
    getValues,
    start,
    stop,
    reset,
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
