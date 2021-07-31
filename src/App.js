import "./App.css";
import { NavBar } from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { Masthead } from "./components/Masthead";
import { Portfolio } from "./components/Portfolio";
import { About } from "./components/About";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <body id="page-top">
        <NavBar />
        <Masthead />
        <Portfolio />
        <About />
        <ContactForm />
        <Footer />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
        <script src="js/scripts.js"></script>
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
      </body>
    </Router>
  );
}

export default App;
