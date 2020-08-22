import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "src/pages/About";
import NotFound from "src/pages/NotFound";
import Header from "src/components/Header";
import { PAGES, LINKS, ABOUT } from "src/constants";
import AppTheme from "src/theme";
import { Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import "src/css/App.css";

function App() {
  return (
    <main>
      <div className="App">
        <ThemeProvider theme={AppTheme}>
          <Container>
            <Switch>
              <Route path="/" exact>
                <About />
              </Route>
              <Route component={NotFound} />
            </Switch>
          </Container>
        </ThemeProvider>
      </div>
    </main>
  );
}

export default App; // Exports the 'App' function as a React DOM component
