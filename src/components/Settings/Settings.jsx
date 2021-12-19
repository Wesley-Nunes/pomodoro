import React from 'react';

import PropTypes from 'prop-types';

import { SettingsWrapper, ActionWrapper } from './SettingsStyle';

function Settings({ name, value }) {
  return (
    <SettingsWrapper aria-label="Settings">
      <h2>{name}</h2>
      <ActionWrapper>
        <button type="button" aria-label="decrease value">-</button>
        <span aria-label="value">{value}</span>
        <button type="button" aria-label="increase value">+</button>
      </ActionWrapper>
    </SettingsWrapper>
  );
}

Settings.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Settings;
