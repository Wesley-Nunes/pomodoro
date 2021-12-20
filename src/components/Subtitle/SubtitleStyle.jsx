import styled from 'styled-components';

const bgColor = {
  primary: '#6c4eb3',
  secondary: '#664eff',
};

const SubtitleWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  font: 1.6rem 'Roboto', sans-serif;
  color: #fff;

  background-color: ${(props) => (bgColor[props.bgColor])};

  height: 4rem;
  width: 90vw;

  padding: 0 2rem;

  border-radius: 25px;
`;

export default SubtitleWrapper;
