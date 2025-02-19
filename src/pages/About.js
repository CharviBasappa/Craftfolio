import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="about" className="about-section">
      <h1>About Me</h1>
      <motion.div
        data-scroll="true"
        data-scroll-sticky="true"
        data-scroll-target="#fixed-target"
        className="about-content"
        style={{
          transform: `translateY(${scrollPosition * 0.1}px)`,
        }}
      >
        <p>
          I'm a full-stack software developer specializing in{" "}
          <strong>Python, ReactJS, Redux, Node.js, and FastAPI</strong>.
          Passionate about building AI-centric applications, I love solving
          complex problems and crafting seamless user experiences.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
