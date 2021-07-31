import { FontAwesomeLinkedIn } from "./fontawesome/faLinkedIn";

export const Footer = () => {
  return (
    <>
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
                <FontAwesomeLinkedIn />
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
    </>
  );
};
