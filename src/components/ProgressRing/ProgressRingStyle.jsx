import styled from 'styled-components';

const circleColor = {
  primary: '#6c4eb3',
  secondary: '#664eff',
};

const ProgressRingWrapper = styled.section`
  display: block;

  position: relative;

  height: 20rem;
  width: 20rem;

  border-radius: 100%;

  &:after {
    position: absolute;

    height: 16rem;
    width: 16rem;

    left: 25%;
    top: 37%;

    content: attr(data-min)':'attr(data-sec);
    
    line-height: 1.6rem;
    font: 4rem 'Roboto', sans-serif;
    color: #fff;
  }
`;

const StyledCircle = styled.circle`
  stroke-dashoffset: 0;
  transition: stroke-dashoffset 1s linear;
  stroke: ${(props) => (circleColor[props.circleColor])};;
  stroke-width: 1em;
`;

export { ProgressRingWrapper, StyledCircle };
