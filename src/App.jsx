import { Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Sidequest from "./components/Sidequest.jsx";
import Navbar from "./components/Navbar.jsx";

function Home() {
  return (
    <>
      <Hero />
      <About bio="I am a QMUL student" />
      <Experience />
      <Projects />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sidequest" element={<Sidequest />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
