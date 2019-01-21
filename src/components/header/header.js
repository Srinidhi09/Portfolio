import React, { Component } from 'react';

class Header extends Component {
  render() {
    let portfolioData = this.props.portfolioData;
    return (
      <React.Fragment>
      <header className="header">
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container"><a href="#intro" className="navbar-brand scrollTo">{portfolioData.name}</a>
            <button type="button" data-toggle="collapse" data-target="#navbarcollapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right"><span className="fa fa-bars" /></button>
            <div id="navbarcollapse" className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item"><a href="#intro" className="nav-link link-scroll">{portfolioData.home}</a></li>
                <li className="nav-item"><a href="#about" className="nav-link link-scroll">{portfolioData.about}</a></li>
                <li className="nav-item"><a href="#skills" className="nav-link link-scroll">{portfolioData.skills}</a></li>
                <li className="nav-item"><a href="#works" className="nav-link link-scroll">{portfolioData.work}</a></li>
                <li className="nav-item"><a href="#contact" className="nav-link link-scroll">{portfolioData.contact}</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <section id="intro" style={{background: 'url(img/home.jpg) center center no-repeat', backgroundSize: 'cover'}} className="intro-section pb-2">
        <div className="container text-center" data-animate="fadeIn">
          <h3 className="text-shadow mb-5">{portfolioData.welcome}</h3>
          <h1 className="text-shadow mb-5 font-weight-light">I'm {portfolioData.name}</h1>
          <h3 className="text-shadow mb-5">{portfolioData.role}</h3>
        </div>
      </section>
      </React.Fragment>
    );
  }
}

export default Header;