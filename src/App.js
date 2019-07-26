import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './App.css';

class App extends React.Component {
  state = {
    scrolled: false
  };

  componentDidMount = () => window.addEventListener('scroll', this.handleScroll)

  componentWillUnmount = () => window.removeEventListener('scroll', this.handleScroll)

  handleScroll = () => {
    if (window.scrollY > 100 && !this.state.scrolled) {
      this.setState({ scrolled: true });
    } else if (window.scrollY <= 100 && this.state.scrolled) {
      this.setState({ scrolled: false});
    }
  }

  handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  render() {
    return (
      <HashRouter basename='/'>
        <div className="App">
          <Navigation />
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
          <div 
            className={this.state.scrolled ? "arrow-up fadeIn" : "arrow-up-hide fadeOut"}
            onClick={this.handleScrollToTop}
          >
            <FontAwesomeIcon icon={faChevronUp} size="3x" className="arrow-up-icon" />
          </div>
          <Footer />
        </div>
      </HashRouter>
    );
  } 
}

export default App;
