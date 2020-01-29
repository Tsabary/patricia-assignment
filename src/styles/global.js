import { createGlobalStyle } from "styled-components";
import "./styles.scss";

export const Global = createGlobalStyle`
   :root {
    --font-main: GilroyLight;
    --font-main-bold: GilroyBold;

    --color-main: #EC1776;
    --color-main-dark: #EC1754;
    --color-main-darkest: #d30e46;
    --color-main-transparent: rgba(171, 33, 134, 0.1);

    --color-grey-light: #d1d1d1;
    --color-grey-medium: #ababab;
    --color-grey-dark: #1E1C00;

    --color-gradient: linear-gradient(var(--color-main), var(--color-main-dark));
  }
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  } 

  html {
      font-size : 62.5%;
      @media only screen and (max-width: 1100px) {
        font-size : 50%;
      }
  }
`;

export default Global;
