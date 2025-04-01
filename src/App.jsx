import "./App.css";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
