import React from 'react';
import {ThemeProvider} from "styled-components";
import GlobalStyles from "./Styles/GlobalStyles";
import Theme from "./Styles/Theme";
import { BingoProvider } from "./Context";
import Router from "./Router";



export default() => {
  return (
    <>
    <ThemeProvider theme={Theme}>
      <BingoProvider>
        <GlobalStyles />
        <Router />
      </BingoProvider>
    </ThemeProvider>
    </>
  );
};
