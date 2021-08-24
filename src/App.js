import './index.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Tools from './Tools';
import Links from './Links';
import Contact from './Contact';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/tools">
            <Tools />
          </Route>
          <Route path="/links">
            <Links />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;

//add a captcha to contact page
