import React from "react";
import ThemeProvider from "components/theme-provider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Styled from "styled-components";

// Pages
import Home from "./home-page";
import Countries from "./countries";
import Country from "./country";

const DocumentWrapper = Styled.div`
  color: ${props => (props.theme ? props.theme.colors.grey : "#e1e1e1")};
  background-color: ${props =>
    props.theme ? props.theme.colors.black : "#252323"};
  min-height: 100vh;
`;
const Document = () => {
  return (
    <ThemeProvider>
      <DocumentWrapper>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/countries" component={Countries} />
            <Route path="/country/:code" component={Country} />
          </Switch>
        </Router>
      </DocumentWrapper>
    </ThemeProvider>
  );
};

export default Document;
