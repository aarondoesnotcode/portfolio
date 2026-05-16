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
  return <Hero />;
}

/**
 * Scroll behaviour on client navigation:
 *  - If the URL has a hash, scroll to that element (smooth).
 *  - Otherwise, reset to the top of the page on every route change.
 */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <>
      <ScrollManager />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={<About bio="I am a QMUL student" />}
          />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/sidequest" element={<Sidequest />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
