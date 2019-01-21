import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="contact" className="contact-section contact">
        <div className="container">
          <header className="text-center">
            <h2 className="title">Contact me</h2>
            <p className="lead">Would you like to know more or just discuss something?</p><br></br>
          </header>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <form id="contact-form" method="post" action="true">
                <div className="messages" />
                <div className="controls">
                  <div className="row">
                    <div className="col-md-6">
                      <input type="text" name="name" placeholder="Firstname" required="required" className="form-control" />
                    </div>
                    <div className="col-md-6">
                      <input type="text" name="surname" placeholder="Lastname" required="required" className="form-control" />
                    </div>
                    <div className="col-md-6">
                      <input type="text" name="email" placeholder="Email" required="required" className="form-control" />
                    </div>
                    <div className="col-md-6">
                      <input type="text" name="phone" placeholder="Phone" className="form-control" />
                    </div>
                    <div className="col-md-12">
                      <textarea name="message" placeholder="Your Message" rows={7} required="required" className="form-control" defaultValue={""} />
                    </div>
                    <div className="col-md-12 text-center" data-animate="zoomIn">
                      <button type="submit" className="btn btn-outline-primary">Send message</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      </React.Fragment>
    );
  }
}

export default Contact;