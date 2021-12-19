import styled from 'styled-components';

const FlexWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SettingsWrapper = styled(FlexWrapper)`
  font: 1.6rem 'Roboto', sans-serif;
  color: #fff;

  background-color: #36344b;

  height: 4rem;
  width: 90vw;

  padding: 0 2rem;
  margin: 1rem 0;

  border-radius: 25px;
`;

const ActionWrapper = styled(FlexWrapper)`
  & > :nth-child(odd) {
    font-size: 2rem;
    color: #fff;

    background-color: #36344b;

    height: 2.4rem;
    width: 2.4rem;

    border: none;

    cursor: pointer;
  }

  & > :nth-child(2) {
    font-weight: bold;
  }
`;

export { SettingsWrapper, ActionWrapper };
