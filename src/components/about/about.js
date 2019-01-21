import React, { Component } from 'react';
import portfolioData from '../../portfolioData';

class About extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="about" className="about-section">
        <div className="container">
          <header className="text-center">
            <h2 data-animate="fadeInDown" className="title">About me</h2>
          </header>
          <div className="row">
            <div data-animate="fadeInUp" className="col-lg-6 col-md-6">
              <p>{portfolioData.aboutme}</p>
              <h6>{portfolioData.profSummary}</h6>
              <ul>
                <li>{portfolioData.summary1}</li>
                <li>{portfolioData.summary2}</li>
                <li>{portfolioData.summary3}</li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-6 my-img"><img src="img/nidhi.jpg" alt="Srinidhi Karnati | Front End Developer" className="image rounded-circle img-fluid" /></div>
          </div>
        </div>
      </section>
      </React.Fragment>
    );
  }
}

export default About;