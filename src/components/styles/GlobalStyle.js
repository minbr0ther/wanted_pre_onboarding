import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Apple SD Gothic Neo','Nanum Gothic','Malgun Gothic' sans-serif;
    font-size: 14px;
    line-height: 1.42;
    color: #333;
  }

  h2, p {
    margin: 0;
  }
  
  ul {
      list-style: none;
      padding: 0;
      margin: 0;
  }
`;

export default GlobalStyle;
