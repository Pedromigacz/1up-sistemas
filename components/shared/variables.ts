import { createGlobalStyle } from "styled-components";

const CssVariables = createGlobalStyle`
:root {
    /* COLORS*/
    --background-main: #050505;
    --background-2: #080808;
    --background-3: #57ffdc;
    --background-4: #161616;

    --accent-blue: #4967FD;
    --accent-blue: #2589bd;
    --accent-purple: #8D5AC5;

    --text-main: #ffffff;
    --text-2: #EDE8EC;
    --text-3: #101d42;

    --text-grey: #b1b1b1;

    --text-negative-main: #00020A;
    --text-negative-2: #050505;
    --text-negative-3: #343434;
    --text-negative-4: #434343;

    /* CONTAINER */

    --container-width: 1544px;
    --container-padding: 0 32px;
    --rounded: 20px;
    --rounded-sm: 5px;

    /* FONTS */

    --font-main: "Argentum Sans", sans-serif;
    --font-2:  "JUST Sans", sans-serif;


    /* @media(min-width: 700px) {
      --container-padding: 0 16px;
    } */
  }
`;

export default CssVariables;
