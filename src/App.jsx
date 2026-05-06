import "./App.css";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";

function App() {
  return (
    <main>
      <Hero />
      <About bio="I am a QMUL student" />
      <Skills />
      <Projects />
      <Experience />
    </main>
  );
}

export default App;
