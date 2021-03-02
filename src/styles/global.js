import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;1,700&display=swap');

  *{
    font-family: "PT Sans";
  }
  body{
    background: #FFE07D;

  }
  .container{
    justify-items: center;
    display: flex;
    flex-direction: row;
    width: 80%;


    background:#FFFFFF;
    mix-blend-mode: normal;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;

  }
  .box_login{
    float: right;
    right: 12px;
    padding: 30px;
    margin: 20px;
    justify-content:right;
    background-color: #E7F2F8;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

`;
