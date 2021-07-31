import { FontAwesomeMicrophone } from "./fontawesome/faMicrophone";

export const Masthead = () => {
  return (
    <header className="masthead bg-primary text-white text-center">
      <div className="container d-flex align-items-center flex-column">
        <img className="masthead-avatar mb-5" src="/img/emily.jpg" alt="..." />
        <h1 className="masthead-heading text-uppercase mb-0">Emily Naylor</h1>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <FontAwesomeMicrophone />
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <p className="masthead-subheading font-weight-light mb-0">
          Independent Audio Producer
        </p>
      </div>
    </header>
  );
};
