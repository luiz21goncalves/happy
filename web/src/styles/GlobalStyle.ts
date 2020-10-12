import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: #fff;
    background: #edf2f5;
  }

  body, input, button, text-area {
    font: 600 18px Nunito, sans-serif;
  }
`;
