import { createGlobalStyle } from 'styled-components';

const CssVariables = createGlobalStyle`
:root {
    /* COLORS*/
    --background-main: #0A0A0A;
    --background-2: #161616;

    --accent-cyan: #57FFDC;
    --accent-blue: #2589BD;

    --text-main: #ffffff;
    --text-2: #B1B1B1;

    --text-negative-main: #101D42;

    /* CONTAINER */

    --container-width: 1544px; // 1480 + 32 * 2 = 1544
    --container-padding: 0 32px;
    --rounded: 20px;
    --rounded-sm: 5px;

    /* FONTS */

    /* --font-title: 'Sora', sans-serif;
    --font-body: 'Inter', sans-serif; */

    /* @media(min-width: 700px) {
      --container-padding: 0 16px;
    } */
  }
`;

export default CssVariables;
