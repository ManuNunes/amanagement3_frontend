import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=PT+Sans&display=swap');

  *{
    paddin:0;
    margin:0;
    outine:0;
    box-sizing: border-box;
  }

  h1{
    font-family:'PT Sans',sans-serif;
    text-rendering: optimizeLegibility ! important;
    -webkit-font-smoothing: antialiased ! important;
    }
`;
