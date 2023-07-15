import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import TrackShipment from "./pages/TrackShipment";


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
    typography: {
        fontFamily: 'Raleway',
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
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/services" exact>
            <Services />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/track" exact>
            <TrackShipment />
          </Route>
        </Switch>
      </div>
    </Router>
    </ThemeProvider>
    </>
  );
};

export default App;