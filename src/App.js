import './index.scss';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Resources from './Resources';
import Contact from './Contact';
import NotFound from './NotFound';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';


const App = () => {
  
  return (
    <Router>
        <ScrollToTop />
          <Navbar />
              <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/about" element={<About/>}/>
                <Route exact path="/services" element={<Services/>}/>
                <Route exact path="/resources" element={<Resources/>}/>
                <Route exact path="/contact" element={<Contact/>}/>
                <Route path="*" element={<NotFound/>}/>
              </Routes>
          <Footer />
    </Router>
  );
}

export default App;
