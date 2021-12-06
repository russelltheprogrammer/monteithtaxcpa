import './index.scss';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Resources from './Resources';
import Contact from './Contact';
import NotFound from './NotFound';
import Footer from './Footer';

const App = () => {
  
  return (
    <div className="App">
      <Router>
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
                <Route path="/resources">
                  <Resources />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </div>
          <Footer />
      </Router>
    </div>
    
  );
}

export default App;
