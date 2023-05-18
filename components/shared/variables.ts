import { createGlobalStyle } from "styled-components";

const CssVariables = createGlobalStyle`
:root {
    /* COLORS*/
    --background-main: #050505;
    --background-2: #080808;

    --accent-blue: #4967FD;
    --accent-purple: #8D5AC5;

    --text-main: #ffffff;
    --text-2: #EDE8EC;

    --text-negative-main: #00020A;
    --text-negative-2: #050505;
    --text-negative-3: #343434;
    --text-negative-4: #434343;

    /* CONTAINER */

    --container-width: 1544px;
    --container-padding: 0 32px;
    --rounded: 20px;
    --rounded-sm: 2px;

    /* FONTS */


    /* @media(min-width: 700px) {
      --container-padding: 0 16px;
    } */
  }
`;

export default CssVariables;
