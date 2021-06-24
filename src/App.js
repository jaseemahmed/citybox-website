import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { HashLink } from 'react-router-hash-link';

const App = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#A81D34'
      },
      secondary: {
        main: "#0F112E"
      },
    },
  });

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
      <Router>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <HashLink to="/about" exact>
            <About />
          </HashLink>
          <Route to="/services" exact>
            <Services />
          </Route>
          <HashLink to="/contact" exact>
            <Contact />
          </HashLink>
        </Switch>
      </div>
    </Router>
    </ThemeProvider>
    </>
  );
};

export default App;