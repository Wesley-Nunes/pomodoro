import styled from 'styled-components';

const bgColor = {
  primary: '#6c4eb3',
  secondary: '#664eff',
  nullColor: '#1f1e2b',
};

const StyledButton = styled.button`
  height: 4rem;
  width: 40vw;

  font: 1.6rem 'Roboto', sans-serif;
  color: white;

  background-color: ${(props) => (bgColor[props.bgColor])};

  border: none;
  border-radius: 25px;

  cursor: pointer;
`;

export default StyledButton;
