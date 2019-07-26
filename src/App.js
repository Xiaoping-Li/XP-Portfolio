import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <div className="App">
        <Navigation />
        <Route path='/xp-portfolio/' exact component={Home} />
        <Route path='/xp-portfolio/about' component={About} />
        <Route path='/xp-portfolio/projects' component={Projects} />
        <Footer />
      </div>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
