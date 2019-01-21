import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Works from './components/works/works';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import portfolioData from './portfolioData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header portfolioData={portfolioData}/>
        <About portfolioData={portfolioData}/>
        <Skills />
        <Works portfolioData={portfolioData}/>
        <Contact portfolioData={portfolioData}/>
        <Footer portfolioData={portfolioData}/>
      </div>
    );
  }
}

export default App;