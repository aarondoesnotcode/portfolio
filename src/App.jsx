import "./App.css";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";

function App() {
  return (
    <main>
      <Hero />
      <About bio="I am a QMUL student" />
      <Skills />
    </main>
  );
}

export default App;
