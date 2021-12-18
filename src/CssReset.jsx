import { createGlobalStyle } from 'styled-components';

const CssReset = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
`;

export default CssReset;
