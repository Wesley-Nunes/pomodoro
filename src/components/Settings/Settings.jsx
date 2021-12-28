import React from 'react';

import PropTypes from 'prop-types';

import { SettingsWrapper, ActionWrapper } from './SettingsStyle';

function timeAction(number, signal) {
  let [minutes, seconds] = number.split(':');
  if (signal === '+') {
    if (seconds === '59') {
      minutes = +minutes + 1;
      seconds = 0;
    } else {
      seconds = +seconds + 1;
    }
  }
  if (signal === '-') {
    if (seconds === '0') {
      minutes = +minutes - 1;
      seconds = 59;
    } else {
      seconds = +seconds - 1;
    }
  }
  return [minutes, seconds];
}

const action = {
  'Work Time': function (number, signal) {
    const [minutes, seconds] = timeAction(number, signal);
    return { workTime: { minutes, seconds } };
  },
  'Break Time': function (number, signal) {
    const [minutes, seconds] = timeAction(number, signal);
    return { breakTime: { minutes, seconds } };
  },
  Sessions(number, signal) {
    return { sessions: signal === '+' ? +number + 1 : +number - 1 };
  },
};

function Settings({ name, value, setFn }) {
  return (
    <SettingsWrapper aria-label="Settings">
      <h2>{name}</h2>
      <ActionWrapper>
        <button
          type="button"
          aria-label="decrease value"
          onClick={() => setFn(action[name](value, '-'))}
        >
          -
        </button>
        <span aria-label="value">{value}</span>
        <button
          type="button"
          aria-label="increase value"
          onClick={() => setFn(action[name](value, '+'))}
        >
          +
        </button>
      </ActionWrapper>
    </SettingsWrapper>
  );
}

Settings.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setFn: PropTypes.func.isRequired,
};

export default Settings;
