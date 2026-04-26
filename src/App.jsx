import { useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";

const SectionWrapper = ({ children, id, className = "" }) => {
  const ref = useInView({ once: true, margin: "-100px" });
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={ref ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  );
};

function App() {
  const [burgerOCross, setBurger] = useState(true);
  const [showDrop, setShow] = useState(false);
  const typedText = "Software Developer";

  const aiLlm = ["AI/LLM Integration", "Ollama", "LM Studio"];
  const frontend = ["React", "React Native", "Tailwind CSS", "Framer Motion"];
  const backend = ["Node.js", "Express", "FastAPI", "REST APIs", "JWT Auth"];
  const databases = ["MongoDB", "MySQL", "PostgreSQL", "Redis"];
  const devops = ["Git", "Docker", "AWS (EC2, ECR, EventBridge)"];

  const projects = [
    {
      title: "CRM Dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
      tech: "React, Node.js, MongoDB, Vercel",
      description: "A full-stack CRM I built from scratch. Includes Redux for state management and a clean UI for managing customer data.",
      frontend: "https://github.com/sourav7274/Actual_Project2_FE",
      backend: "https://github.com/sourav7274/ActaulPrpject_BE",
      live: "https://actual-project2-fe.vercel.app/"
    },
    {
      title: "Git Gandalf",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop",
      tech: "Node.js, Ollama (Local LLM)",
      description: "A pre-commit hook that uses a local AI to review your code before you commit. Think of it as a smart code reviewer that runs locally on your machine.",
      github: "https://github.com/sourav7274/git-gandalf"
    },
    {
      title: "E-Commerce Store",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVyjitFktOP0aaP87C9puO_a-JwiKFf2rkZw&s",
      tech: "Next.js, PostgreSQL, Stripe, TypeScript",
      description: "A full shopping experience with payments, inventory management, and an admin panel to manage it all.",
    }
  ];

  return (
    <div className="scroll-smooth gradient-bg min-h-screen text-zinc-900">
      <div className="relative overflow-hidden">
        <div className="floating-shape w-96 h-96 bg-purple-300/30 -top-20 -left-20" style={{ animationDelay: "0s" }} />
        <div className="floating-shape w-72 h-72 bg-cyan-300/30 top-40 -right-20" style={{ animationDelay: "-5s" }} />
        <div className="floating-shape w-64 h-64 bg-purple-300/20 bottom-20 left-1/4" style={{ animationDelay: "-10s" }} />

        <SectionWrapper className="min-h-[85vh] px-6 lg:px-20 pt-8 hero-gradient relative">
          <header className="flex justify-between items-center mb-16">
            <motion.p 
              className="text-3xl lg:text-4xl font-bold text-indigo-900"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Sourav Sarkar
            </motion.p>
            
            <nav className="hidden lg:flex gap-8 text-lg font-medium">
              {["About", "Experience", "Projects", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative link-hover text-zinc-700 hover:text-indigo-900 transition-colors"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>

            <button
              onClick={() => setBurger(!burgerOCross)}
              className="lg:hidden p-2"
            >
              {burgerOCross ? (
                <motion.img
                  onClick={() => setShow(true)}
                  className="h-8"
                  src="https://www.svgrepo.com/show/520760/hamburger-4.svg"
                  alt="menu"
                  whileTap={{ scale: 0.9 }}
                />
              ) : (
                <motion.img
                  onClick={() => setShow(false)}
                  src="https://www.svgrepo.com/show/422351/cancel-close-cross.svg"
                  className="h-8"
                  whileTap={{ scale: 0.9 }}
                />
              )}
            </button>
          </header>

          <AnimatePresence>
            {showDrop && (
              <motion.div
                className="lg:hidden absolute right-8 mt-4 glass-card rounded-2xl p-6 z-50"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {["About", "Experience", "Projects", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block py-2 text-lg font-medium text-zinc-700 hover:text-indigo-900"
                    onClick={() => setShow(false)}
                  >
                    {item}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-col items-center justify-center mt-12 lg:mt-20">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-zinc-500 text-lg mb-2">Hey, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold text-indigo-900 mb-4">
                Sourav Sarkar
              </h1>
              <p className="text-2xl lg:text-3xl font-semibold text-zinc-600 h-10">
                <span className="gradient-text">{typedText}</span>
              </p>

              <motion.div 
                className="mt-8 flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <motion.a
                  download={true}
                  href="/Resume.pdf"
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-white">Download CV</span>
                </motion.a>
                <motion.button
                  className="btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('contact').scrollIntoView()}
                >
                  Contact Info
                </motion.button>
              </motion.div>

              <motion.div 
                className="mt-8 flex justify-center gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {[
                  { href: "https://github.com/sourav7274", img: "https://www.svgrepo.com/show/512317/github-142.svg" },
                  { href: "https://www.linkedin.com/in/sourav-sarkar7274/", img: "https://www.svgrepo.com/show/494278/linkedin-round.svg" }
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    className="p-3 rounded-full bg-zinc-100 hover:bg-purple-100 transition-colors"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img className="h-8 w-8" src={social.img} alt="social" />
                  </motion.a>
                ))}
              </motion.div>

              <p className="mt-6 text-zinc-500 font-medium">+91 8925743416</p>
            </motion.div>
          </div>
        </SectionWrapper>
      </div>

      <SectionWrapper id="about" className="py-8 px-6 lg:px-20">
        <div className="text-center mb-16">
          <p className="text-zinc-500 font-medium mb-2">Get to Know More</p>
          <h2 className="section-heading text-4xl lg:text-5xl font-bold text-indigo-900">About Me</h2>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6">
          <motion.div 
            className="glass-card rounded-3xl p-6 flex flex-col"
            whileHover={{ y: -5 }}
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Background</h3>
            <p className="text-lg font-semibold text-zinc-800">B.Tech Mechanical Engineering</p>
            <p className="text-zinc-500 mt-1">Graduated 2023</p>
            <p className="text-zinc-600 mt-2 font-medium">NIT Durgapur</p>
          </motion.div>

          <motion.div 
            className="glass-card rounded-3xl p-6 lg:col-span-2 flex flex-col"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-xl font-bold mb-3 text-indigo-900">Hey there!</h3>
            <p className="text-zinc-600 leading-relaxed text-base">
              I'm Sourav, a <span className="font-semibold text-indigo-900">Software Developer</span> who came into tech from an unexpected path - Mechanical Engineering at NIT Durgapur. Somewhere between Heat Transfer and Thermodynamics, I realized I'd rather write code than do calculations on steam tables. Best decision I ever made.
            </p>
            <p className="text-zinc-600 leading-relaxed text-base mt-2">
              At <span className="font-semibold text-purple-700">Carmaa Car Care</span>, I work on a bit of everything - React and Node.js for the web, occasional React Native for mobile, AI/ML stuff with LLMs, and AWS for keeping it all running. I enjoy building features end-to-end, from brainstorming ideas to deploying them to production.
            </p>
            <p className="text-zinc-600 leading-relaxed text-base mt-2">
              When I'm not coding, I'm probably reading about new tech, experimenting with local LLMs, or figuring out how to automate something that shouldn't need automating. Always happy to chat about new projects or tech ideas.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="experience" className="py-20 px-6 lg:px-20 bg-white/50">
        <div className="text-center mb-16">
          <p className="text-zinc-500 font-medium mb-2">What I've Been Up To</p>
          <h2 className="section-heading text-4xl lg:text-5xl font-bold text-indigo-900">Experience</h2>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div 
            className="glass-card rounded-3xl p-8"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-indigo-900">AI & LLM</h3>
            <div className="flex flex-wrap gap-3">
              {aiLlm.map((skill, idx) => (
                <motion.span
                  key={idx}
                  className="skill-tag skill-ai"
                  whileHover={{ scale: 1.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-6 text-indigo-900">Frontend</h3>
            <div className="flex flex-wrap gap-3">
              {frontend.map((skill, idx) => (
                <motion.span
                  key={idx}
                  className="skill-tag skill-frontend"
                  whileHover={{ scale: 1.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="glass-card rounded-3xl p-8"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-indigo-900">Backend</h3>
            <div className="flex flex-wrap gap-3">
              {backend.map((skill, idx) => (
                <motion.span
                  key={idx}
                  className="skill-tag skill-backend"
                  whileHover={{ scale: 1.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            <h3 className="text-xl font-bold mt-8 mb-6 text-indigo-900">Databases</h3>
            <div className="flex flex-wrap gap-3">
              {databases.map((skill, idx) => (
                <motion.span
                  key={idx}
                  className="skill-tag skill-devops"
                  whileHover={{ scale: 1.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            <h3 className="text-xl font-bold mt-8 mb-6 text-indigo-900">DevOps & Tools</h3>
            <div className="flex flex-wrap gap-3">
              {devops.map((skill, idx) => (
                <motion.span
                  key={idx}
                  className="skill-tag skill-devops"
                  whileHover={{ scale: 1.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8 text-indigo-900">Where I've Worked</h3>
          
          <div className="space-y-6">
            <motion.div 
              className="glass-card rounded-2xl p-8"
              whileHover={{ y: -3 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-zinc-800">Full Stack Developer</h4>
                  <p className="text-zinc-500 font-medium">Carmaa Car Care</p>
                </div>
                <span className="mt-2 md:mt-0 px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full text-sm font-medium">
                  Sep 2025 - Present
                </span>
              </div>
              <ul className="space-y-3">
                {[
                  "Built and maintained full-stack apps using MERN stack (MongoDB, Express, React, Node.js)",
                  "Worked with React Native to build mobile features for the Carmaa app",
                  "Implemented AI-powered features using LLMs and local models (Ollama, LM Studio) for car damage analysis",
                  "Designed REST APIs and handled backend logic with Node.js and Express",
                  "Managed AWS infrastructure - EC2, ECR, EventBridge, and Docker Swarm for deployments",
                  "Created referral and loyalty programs that drove 30% user growth",
                  "Integrated Google Vision API for automated vehicle information extraction",
                  "Set up real-time notifications and event-driven workflows"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-zinc-600">
                    <span className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              className="glass-card rounded-2xl p-8"
              whileHover={{ y: -3 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-zinc-800">Full Stack Developer Intern</h4>
                  <p className="text-zinc-500 font-medium">Carmaa Car Care</p>
                </div>
                <span className="mt-2 md:mt-0 px-4 py-2 bg-zinc-200 text-zinc-700 rounded-full text-sm font-medium">
                  May 2025 - Aug 2025
                </span>
              </div>
              <ul className="space-y-3">
                {[
                  "Built full-stack features using React and Node.js",
                  "Worked on MongoDB schema design and optimization",
                  "Contributed to microservices architecture and API development",
                  "Assisted in deploying apps to AWS using Docker",
                  "Built and maintained admin dashboard features in React"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-zinc-600">
                    <span className="mt-2 w-2 h-2 rounded-full bg-zinc-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="projects" className="py-20 px-6 lg:px-20">
        <div className="text-center mb-16">
          <p className="text-zinc-500 font-medium mb-2">Things I've Built</p>
          <h2 className="section-heading text-4xl lg:text-5xl font-bold text-indigo-900">Projects</h2>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-zinc-800 mb-2">{project.title}</h3>
                <p className="text-sm text-zinc-500 mb-3 font-medium">{project.tech}</p>
                <p className="text-zinc-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-2 text-sm font-medium text-indigo-900 hover:text-purple-600 transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      <img src="https://www.svgrepo.com/show/506497/github.svg" className="h-4 w-4" alt="github" />
                      Code
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      className="flex items-center gap-2 text-sm font-medium text-indigo-900 hover:text-purple-600 transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      <img src="https://www.svgrepo.com/show/309737/live.svg" className="h-4 w-4" alt="live" />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="contact" className="py-20 px-6 lg:px-20 bg-white/50">
        <div className="text-center mb-16">
          <p className="text-zinc-500 font-medium mb-2">Get in Touch</p>
          <h2 className="section-heading text-4xl lg:text-5xl font-bold text-indigo-900">Contact Me</h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <motion.div 
            className="glass-card rounded-3xl p-10"
            whileHover={{ y: -5 }}
          >
            <div className="space-y-8">
              <motion.a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=souravsarkar6259@gmail.com"
                target="_blank"
                className="flex items-center gap-6 p-4 rounded-2xl hover:bg-purple-50 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                  <img className="h-6 w-6" src="https://www.svgrepo.com/show/488920/email.svg" alt="email" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-zinc-800 group-hover:text-indigo-900">Email</p>
                  <p className="text-zinc-500">souravsarkar6259@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/sourav-sarkar7274/"
                target="_blank"
                className="flex items-center gap-6 p-4 rounded-2xl hover:bg-purple-50 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                  <img className="h-6 w-6" src="https://www.svgrepo.com/show/506517/linkedin.svg" alt="linkedin" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-zinc-800 group-hover:text-indigo-900">LinkedIn</p>
                  <p className="text-zinc-500">sourav-sarkar7274</p>
                </div>
              </motion.a>

              <motion.div
                className="flex items-center gap-6 p-4 rounded-2xl hover:bg-purple-50 transition-colors"
                whileHover={{ x: 5 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-semibold text-zinc-800">Phone</p>
                  <p className="text-zinc-500">+91 8925743416</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <footer className="mt-20 border-t border-zinc-200 pt-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-8">
              {["About", "Experience", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-zinc-500 hover:text-indigo-900 transition-colors font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
            <p className="text-zinc-500">
              © 2025 Sourav Sarkar. All Rights Reserved.
            </p>
          </div>
        </footer>
      </SectionWrapper>
    </div>
  );
}

export default App;