import { motion } from "framer-motion";

const projects = [
  { title: "MunchMate", description: "Food ordering app with Redux & Vitest" },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
          >
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
