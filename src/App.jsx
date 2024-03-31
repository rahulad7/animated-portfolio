import "./app.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section id="About">
        <About />
      </section>
      <Projects id="Projects" />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
