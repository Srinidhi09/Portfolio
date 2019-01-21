import React, { Component } from 'react';

class Footer extends Component {
  render() {
    let portfolioData = this.props.portfolioData;
    return (
      <React.Fragment>
      <footer className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-lg-left">
              <p className="social" data-animate="fadeInUp">
                <a href={portfolioData.githuburl} className="external github" target="_blank "><i className="fa fa-github"></i></a>
                <a href={portfolioData.linkedinurl} className="external linkedin wow fadeInUp" target="_blank "><i className="fa fa-linkedin-square"></i></a>
                <a href={portfolioData.instagramurl} className="external instagram wow fadeInUp" target="_blank "><i className="fa fa-instagram"></i></a>
                <a href={portfolioData.facebookurl} className="external facebook wow fadeInUp" target="_blank "><i className="fa fa-facebook"></i></a>
              </p>
            </div>
            {/* /.6*/}
            <div className="col-md-6 text-center text-lg-right mt-4 mt-lg-0">
              <p>Designed by Srinidhi Karnati</p>
            </div>
          </div>
        </div>
      </footer>
      </React.Fragment>
    );
  }
}

export default Footer;