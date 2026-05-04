import "./App.css";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";

function App() {
  return (
    <main>
      <Hero />
      <About bio="I am a QMUL student" />
    </main>
  );
}

export default App;
