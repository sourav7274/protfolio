import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth" }));
  }, [hash]);

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
