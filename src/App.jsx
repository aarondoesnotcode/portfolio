import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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

/** Ensures /#about-style links scroll after client-side navigation. */
function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = decodeURIComponent(hash.slice(1));
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToHash />
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
