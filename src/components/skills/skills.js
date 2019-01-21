import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="skills" className="about-section">
        <div className="container">
        <header className="text-center">
            <h2 data-animate="fadeInDown" className="title">My Expertise</h2>
          </header>
        <div className="skills-wrap">
            <div data-animate="fadeInLeft" className="col-lg-6 col-md-6 col-sm-12">
              <div className="skill-item">
                <div className="progress-title">HTML5</div>
                <div className="progress">
                  <div role="progressbar" style={{width: '95%'}} aria-valuenow={0} aria-valuemin={60} aria-valuemax={100} className="progress-bar progress-bar-skill1" />
                </div>
              </div>
              <div className="skill-item">
                <div className="progress-title">CSS3</div>
                <div className="progress">
                  <div role="progressbar" style={{width: '90%'}} aria-valuenow={70} aria-valuemin={60} aria-valuemax={100} className="progress-bar progress-bar-skill2" />
                </div>
              </div>
              <div className="skill-item">
                <div className="progress-title">SASS</div>
                <div className="progress">
                  <div role="progressbar" style={{width: '80%'}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} className="progress-bar progress-bar-skill5" />
                </div>
              </div>
              <div className="skill-item">
                <div className="progress-title">Javascript</div>
                <div className="progress">
                  <div role="progressbar" style={{width: '85%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} className="progress-bar progress-bar-skill3" />
                </div>
              </div>
              <div className="skill-item">
                <div className="progress-title">jQuery</div>
                <div className="progress">
                  <div role="progressbar" style={{width: '80%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} className="progress-bar progress-bar-skill4" />
                </div>
              </div>
            </div>
            <div data-animate="fadeInRight" className="col-lg-6 col-md-6 col-sm-12">
                <div className="skill-item">
                    <div className="progress-title">VueJS</div>
                    <div className="progress">
                    <div role="progressbar" style={{width: '70%'}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} className="progress-bar progress-bar-skill5" />
                    </div>
                </div>
                <div className="skill-item">
                    <div className="progress-title">ReactJS</div>
                    <div className="progress">
                    <div role="progressbar" style={{width: '75%'}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} className="progress-bar progress-bar-skill5" />
                    </div>
                </div>
                <div className="skill-item">
                    <div className="progress-title">AngularJS</div>
                    <div className="progress">
                    <div role="progressbar" style={{width: '65%'}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} className="progress-bar progress-bar-skill5" />
                    </div>
                </div>
                <div className="skill-item">
                    <div className="progress-title">PHP</div>
                    <div className="progress">
                    <div role="progressbar" style={{width: '80%'}} aria-valuenow={70} aria-valuemin={60} aria-valuemax={100} className="progress-bar progress-bar-skill2" />
                    </div>
                </div>
                <div className="skill-item">
                    <div className="progress-title">Bootstrap</div>
                    <div className="progress">
                    <div role="progressbar" style={{width: '85%'}} aria-valuenow={70} aria-valuemin={60} aria-valuemax={100} className="progress-bar progress-bar-skill2" />
                    </div>
                </div>
            </div>
          </div>
          </div>
      </section>
      </React.Fragment>
    );
  }
}

export default Skills;