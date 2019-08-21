import React, { ReactNode, Fragment } from "react";
import { ThemeProvider } from "styled-components";

export const theme = {
  colors: {
    black: "#252323",
    grey: "#e1e1e1",
    orange: "#FE6A6A",
    green: "#41c7c7"
  },
  font: {
    ibm: "IBM Plex Mono"
  },
  breakpoints: ["320px", "768px", "1024px", "1200px"]
};

export type ThemeType = typeof theme;

interface IProps {
  children: ReactNode;
}

const ThemeProviderComponent: React.FC<IProps> = props => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>{props.children}</Fragment>
    </ThemeProvider>
  );
};

export default ThemeProviderComponent;
