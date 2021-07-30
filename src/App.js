import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { BrowserRouter as Router } from "react-router-dom";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophoneAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faLinkedinIn, faMicrophoneAlt);

function App() {
  return (
    <Router>
      <body id="page-top">
        <nav
          className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand" href="#page-top">
              Emily Naylor
            </a>
            <button
              className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item mx-0 mx-lg-1">
                  <a
                    className="nav-link py-3 px-0 px-lg-3 rounded"
                    href="#portfolio"
                  >
                    Portfolio
                  </a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a
                    className="nav-link py-3 px-0 px-lg-3 rounded"
                    href="#about"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a
                    className="nav-link py-3 px-0 px-lg-3 rounded"
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header className="masthead bg-primary text-white text-center">
          <div className="container d-flex align-items-center flex-column">
            <img
              className="masthead-avatar mb-5"
              src="/img/emily.jpg"
              alt="..."
            />
            <h1 className="masthead-heading text-uppercase mb-0">
              Emily Naylor
            </h1>
            <div className="divider-custom divider-light">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon">
                <FontAwesomeIcon icon={faMicrophoneAlt} />
              </div>
              <div className="divider-custom-line"></div>
            </div>
            <p className="masthead-subheading font-weight-light mb-0">
              Independent Audio Producer{" "}
            </p>
          </div>
        </header>
        <section className="page-section portfolio" id="portfolio">
          <div className="container">
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
              Portfolio
            </h2>
            <div className="divider-custom">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon">
                <FontAwesomeIcon icon={faMicrophoneAlt} />
              </div>
              <div className="divider-custom-line"></div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4 mb-5">
                <a href="https://novanew.org.uk/">
                  <div
                    className="portfolio-item mx-auto"
                    data-bs-toggle="modal"
                    data-bs-target="#portfolioModal1"
                  >
                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                      <div className="portfolio-item-caption-content text-center text-white">
                        <i className="fas fa-plus fa-3x"></i>
                      </div>
                    </div>
                    <img
                      className="img-fluid"
                      src="/img/nova-logo.png"
                      alt="..."
                    />
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-4 mb-5">
                <a href="https://www.bbc.co.uk/podcasts">
                  <div
                    className="portfolio-item mx-auto"
                    data-bs-toggle="modal"
                    data-bs-target="#portfolioModal2"
                  >
                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                      <div className="portfolio-item-caption-content text-center text-white">
                        <i className="fas fa-plus fa-3x"></i>
                      </div>
                    </div>
                    <img
                      className="img-fluid"
                      src="/img/BBC-logo.png"
                      alt="..."
                    />
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-4 mb-5">
                <a href="https://www.fill.org.uk/">
                  <div
                    className="portfolio-item mx-auto"
                    data-bs-toggle="modal"
                    data-bs-target="#portfolioModal3"
                  >
                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                      <div className="portfolio-item-caption-content text-center text-white">
                        <i className="fas fa-plus fa-3x"></i>
                      </div>
                    </div>
                    <img
                      className="img-fluid"
                      src="/img/fill-logo.png"
                      alt="..."
                    />
                  </div>
                </a>
              </div>
              {/* <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                <div
                  className="portfolio-item mx-auto"
                  data-bs-toggle="modal"
                  data-bs-target="#portfolioModal4"
                >
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="assets/img/portfolio/game.png"
                    alt="..."
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                <div
                  className="portfolio-item mx-auto"
                  data-bs-toggle="modal"
                  data-bs-target="#portfolioModal5"
                >
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="assets/img/portfolio/safe.png"
                    alt="..."
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div
                  className="portfolio-item mx-auto"
                  data-bs-toggle="modal"
                  data-bs-target="#portfolioModal6"
                >
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="assets/img/portfolio/submarine.png"
                    alt="..."
                  />
                </div>
              </div> */}
            </div>
          </div>
        </section>
        <section className="page-section bg-primary text-white mb-0" id="about">
          <div className="container">
            <h2 className="page-section-heading text-center text-uppercase text-white">
              About
            </h2>
            <div className="divider-custom divider-light">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon">
                <FontAwesomeIcon icon={faMicrophoneAlt} />
              </div>
              <div className="divider-custom-line"></div>
            </div>
            <div className="row">
              <div className="col-lg-4 ms-auto">
                <p className="lead">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."{" "}
                </p>
              </div>
              <div className="col-lg-4 me-auto">
                <p className="lead">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="page-section" id="contact">
          <div className="container">
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
              Contact Me
            </h2>
            <div className="divider-custom">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon">
                <FontAwesomeIcon icon={faMicrophoneAlt} />
              </div>
              <div className="divider-custom-line"></div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8 col-xl-7">
                <form id="contactForm">
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="name"
                      type="text"
                      placeholder="Enter your name..."
                      data-sb-validations="required"
                    />
                    <label for="name">Full name</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="name:required"
                    >
                      A name is required.
                    </div>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      data-sb-validations="required,email"
                    />
                    <label for="email">Email address</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="email:required"
                    >
                      An email is required.
                    </div>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="email:email"
                    >
                      Email is not valid.
                    </div>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="phone"
                      type="tel"
                      placeholder="(123) 456-7890"
                      data-sb-validations="required"
                    />
                    <label for="phone">Phone number</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="phone:required"
                    >
                      A phone number is required.
                    </div>
                  </div>
                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control"
                      id="message"
                      type="text"
                      placeholder="Enter your message here..."
                      data-sb-validations="required"
                    ></textarea>
                    <label for="message">Message</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="message:required"
                    >
                      A message is required.
                    </div>
                  </div>
                  <div className="d-none" id="submitSuccessMessage">
                    <div className="text-center mb-3">
                      <div className="fw-bolder">
                        Form submission successful!
                      </div>
                    </div>
                  </div>
                  <div className="d-none" id="submitErrorMessage">
                    <div className="text-center text-danger mb-3">
                      Error sending message!
                    </div>
                  </div>
                  <button
                    className="btn btn-primary btn-xl disabled"
                    id="submitButton"
                    type="submit"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">Location</h4>
                <p className="lead mb-0">
                  London
                  <br />
                  United Kingdom
                </p>
              </div>
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">Connect</h4>
                <a
                  className="btn btn-outline-light btn-social mx-1"
                  href="https://www.linkedin.com/in/emily-naylor-b19611bb/"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </div>
          </div>
        </footer>
        <div className="copyright py-4 text-center text-white">
          <div className="container">
            <small>Copyright &copy; Emily Naylor 2021</small>
          </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
        <script src="js/scripts.js"></script>
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
      </body>
    </Router>
  );
}

export default App;
