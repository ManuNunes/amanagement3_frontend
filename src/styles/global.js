import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;1,700&display=swap');

  *{
    font-family: "PT Sans"
  }
  .loginComponent{
    position: absolute;
    top: 70px;
    right: 15px;
    left: 837px;
    bottom: 50px;
    justify-self: right;

    background: #E0E0E0;
    border-radius: 15px;

  }
  body{
    background:light-grey;
    font-family: 'PT Sans', sans-serif;
    text-rendering: optimizeLegibility ! important;
    -webkit-font-smoothing: antialiased ! important;
  }
`;
