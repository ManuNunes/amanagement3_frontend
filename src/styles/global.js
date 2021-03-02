import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;1,700&display=swap');

  *{
    paddin:0;
    margin:0;
    outine:0;
    box-sizing: border-box;
  }

  body{
    background:light-grey;
    font-family: 'PT Sans', sans-serif;
    text-rendering: optimizeLegibility ! important;
    -webkit-font-smoothing: antialiased ! important;
  }
`;
