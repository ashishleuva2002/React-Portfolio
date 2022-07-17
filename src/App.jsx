import About from "./components/about";
import Foot from "./components/footer";
import Home from "./components/home";
import Skill from "./components/skills";
import Services from "./components/services";
import Contact from "./components/contact";
import Project from "./components/projects";
import Nav from "./components/nav"

function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Services />
      <Skill />
      <Project />
      <Contact />
      <Foot />
    </>
  );
}

export default App;