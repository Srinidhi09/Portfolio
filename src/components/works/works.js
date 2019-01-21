import React, { Component } from 'react';

class Works extends Component {
  render() {
    let portfolioData = this.props.portfolioData;
    return (
      <React.Fragment>
      <section id="works" className="bg-gradient services-section">
        <div className="container" data-animate="fadeInUp">
          <header className="text-center">
            <h2 data-animate="fadeInDown" className="title">My Work</h2>
          </header>
          <div className="row services text-center">
            <div className="col-lg-4">
              <h3 className="heading mb-3 text-400">{portfolioData.ProjectTitle1}</h3>
              <p className="text-left description text-center">{portfolioData.ProjectDesc1}</p>
              <p>{portfolioData.TechDesc1}</p>
            </div>
            <div className="col-lg-4">
              <h3 className="heading mb-3 text-400">{portfolioData.ProjectTitle2}</h3>
              <p className="text-left description text-center">{portfolioData.ProjectDesc2}</p>
              <p>{portfolioData.TechDesc2}</p>
              </div>
            <div className="col-lg-4">
              <h3 className="heading mb-3 text-400">{portfolioData.ProjectTitle3}</h3>
              <p className="text-left description text-center">{portfolioData.ProjectDesc3}</p>
              <p>{portfolioData.TechDesc3}</p>
            </div>
          </div>
          <h3 className="heading mb-3 text-center">Other projects</h3><br></br>
          <div className="row">
          <div data-category="webdesign" className="reference-item col-lg-4 col-md-4">
            <div className="reference">
              <a href={portfolioData.phpformurl} target="_blank ">
                <img src="img/php-form.JPG" alt="Php Form" className="img-fluid" />
                <div className="overlay">
                  <div className="inner">
                    <h3 className="h4 reference-title">{portfolioData.phpform}</h3>
                    <p>{portfolioData.phpformdesc}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div data-category="webdesign" className="reference-item col-lg-4 col-md-4">
            <div className="reference">
              <a href={portfolioData.smilesurl} target="_blank ">
                <img src="img/smiles.JPG" alt="Smiles App" className="img-fluid" />
                <div className="overlay">
                  <div className="inner">
                    <h3 className="h4 reference-title">{portfolioData.smiles}</h3>
                    <p>{portfolioData.smilesdesc}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div data-category="webdesign" className="reference-item col-lg-4 col-md-4">
            <div className="reference">
              <a href={portfolioData.todourl} target="_blank ">
                <img src="img/todo.JPG" alt="Todo App" className="img-fluid" />
                <div className="overlay">
                  <div className="inner">
                    <h3 className="h4 reference-title">{portfolioData.todo}</h3>
                    <p>{portfolioData.tododesc}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          </div>
          <p className="text-center" style={{cursor:'pointer'}}><a href ={portfolioData.githuburl} target="_blank ">View more on Github <i className="fa fa-github"></i></a></p>
        </div>
      </section>
    </React.Fragment>
    );
  }
}

export default Works;