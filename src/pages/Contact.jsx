function Contact(){
    return(
        <>
        
                    <div className="col-lg-8">
                      <form id="contact-form" action="" method="post">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="section-heading">
                              <h2>
                                <em>Contact Us</em> 
                              </h2>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <fieldset>
                              <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Your Name..."
                                autoComplete="on"
                                required
                              />
                            </fieldset>
                          </div>
                          <div className="col-lg-6">
                            <fieldset>
                              <input
                                type="text"
                                name="surname"
                                id="surname"
                                placeholder="Your Surname..."
                                autoComplete="on"
                                required
                              />
                            </fieldset>
                          </div>
                          <div className="col-lg-6">
                            <fieldset>
                              <input
                                type="email"
                                name="email"
                                id="email"
                                pattern="[^ @]*@[^ @]*"
                                placeholder="Your E-mail..."
                                required
                              />
                            </fieldset>
                          </div>
                          <div className="col-lg-6">
                            <fieldset>
                              <input
                                type="text"
                                name="subject"
                                id="subject"
                                placeholder="Subject..."
                                autoComplete="on"
                              />
                            </fieldset>
                          </div>
                          <div className="col-lg-12">
                            <fieldset>
                              <textarea
                                name="message"
                                id="message"
                                placeholder="Your Message"
                              ></textarea>
                            </fieldset>
                          </div>
                          <div className="col-lg-12">
                            <fieldset>
                              <button
                                type="submit"
                                id="form-submit"
                                className="orange-button"
                              >
                                Send Message Now
                              </button>
                            </fieldset>
                          </div>
                        </div>
                      </form>
                      <div className="more-info">
                        <div className="row">
                          <div className="col-lg-4">
                            <div className="info-item">
                              <i className="fa fa-phone"></i>
                              <h4><a href="#">010-020-0340</a></h4>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="info-item">
                              <i className="fa fa-envelope"></i>
                              <h4><a href="#">jalani@gmail.com</a></h4>
                              <h4><a href="#">hello@company.com</a></h4>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="info-item">
                              <i className="fa fa-map-marker"></i>
                              <h4>
                                <a href="#">
                                  Sunny Isles Beach, FL 33160, United States
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  
        </>
    )
}
export default Contact