import "./app.scss"
import Hero from "./components/main/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>
    {/* <section id="Services"><Parallax type='services'/></section> */}
    <section id="Skills"><Skills /></section>
    {/* <section>Parallax</section> */}
    <section id="Projects"><Projects /></section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">Contact</section>
  </div>;
};

export default App;
