import { useState } from "react";
import { motion } from "motion/react";

function App() {
  const aiLlm = ["AI/LLM Integration", "Local Model Deployment"];
  const frontend = ["React.js", "React Native", "Tailwind CSS", "Bootstrap", "Framer Motion", "HTML", "CSS"];
  const backend = ["Node.js", "Express.js", "REST API Design", "JWT Authentication"];
  const databases = ["MongoDB", "MySQL"];
  const devops = ["Git", "Docker", "AWS (EC2, ECR, EventBridge)"];

  const [burgerOCross, setBurger] = useState(true);
  const [showDrop, setShow] = useState(false);
  return (
    <>
      <div className="scroll-smooth">
        <section className="h-[80vh] w-full pt-10 ps-10 pe-7">
          <div className="flex justify-between items-center">
            <p className="text-4xl ms-10 text-headingC">Sourav Sarkar</p>
            <nav className="text-2xl me-10  gap-5 hidden lg:flex space-x-6">
              <a
                className="hover:text-gray-600 hover:underline hover:underline-offset-10"
                href="#about"
              >
                About
              </a>
              <a
                className="hover:text-gray-600 hover:underline hover:underline-offset-10"
                href="#experience"
              >
                Experience
              </a>
              <a
                className="hover:text-gray-600 hover:underline hover:underline-offset-10"
                href="#projects"
              >
                Projects
              </a>
              <a
                className="hover:text-gray-600 hover:underline hover:underline-offset-10"
                href="#contact"
              >
                Contact
              </a>
            </nav>
            <button
              onClick={() => setBurger(!burgerOCross)}
              className="lg:hidden flex flex-col justify-center items-center"
            >
              {burgerOCross ? (
                <img
                  onClick={() => setShow(true)}
                  className="h-[60px]"
                  src="https://www.svgrepo.com/show/520760/hamburger-4.svg"
                  alt="hamburger_logo"
                />
              ) : (
                <img
                  onClick={() => setShow(false)}
                  src="https://www.svgrepo.com/show/422351/cancel-close-cross.svg"
                  className="h-[40px]"
                />
              )}
            </button>
          </div>
          <div className="relative">
            {showDrop && (
              <div className="lg:hidden absolute mt-4 flex flex-col space-y-3 top-[15px] right-[0%] text-xl">
                <a
                  href="#about"
                  className="hover:underline hover:text-gray-600 hover:underline-offset-10"
                >
                  About
                </a>
                <a
                  href="#experience"
                  className="hover:underline hover:text-gray-600 hover:underline-offset-10"
                >
                  Experience
                </a>
                <a
                  href="#projects"
                  className="hover:underline hover:text-gray-600 hover:underline-offset-10"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="hover:underline hover:text-gray-600 hover:underline-offset-10"
                >
                  Contact
                </a>
              </div>
            )}
          </div>

          <div
            className={`flex justify-center gap-14 mt-56 ${
              showDrop ? "mt-20" : "mt-56"
            }`}
          >
            <div className="text-center">
              <p className="text-gray-500">Hello, I'm </p>
              <p className="text-headingC text-[48px] font-bold">
                Sourav Sarkar
              </p>
              <p className="text-gray-500 font-[600] mt-2 text-[28px]">
                Full Stack Developer
              </p>
              <div className="mt-3">
                <a
                  download={true}
                  href="/Resume.pdf"
                  className="border border-black hover:bg-black hover:text-white rounded-4xl px-4 py-2 me-4"
                >
                  Download CV
                </a>
                <button className="bg-gray-800 cursor-pointer text-white hover:bg-gray-950 hover:text-amber-50 rounded-4xl px-4 py-2">
                  Contact Info
                </button>
              </div>
              <div className="mt-5 flex justify-center gap-5">
                <a
                  href="https://github.com/sourav7274"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <img
                    className="h-[45px]"
                    src="https://www.svgrepo.com/show/512317/github-142.svg"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/sourav-sarkar7274/"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <img
                    className="h-[45px]"
                    src="https://www.svgrepo.com/show/494278/linkedin-round.svg"
                  />
                </a>
              </div>
              <p className="mt-3 text-gray-600">8925743416</p>
            </div>
          </div>
        </section>

        <section id="about" className="h-screen w-full pt-25">
          <p className="text-l text-center">Get to Know More</p>
          <p className="text-5xl font-bold mt-4 text-center">About Me</p>

          <div className="flex  justify-center gap-4 max-w-7xl mt-50 mx-auto px-4">
            <div className="basis-1/3 flex flex-col justify-between border text-center border-black rounded-3xl min-h-[250px] p-4 ">
              <p className="text-3xl mt-5">Education</p>
              <div>
                <p className="mt-7 text-xl">B.Tech Mechanical Engineering</p>
                <p className="mt-5">August 2023</p>
              </div>

              <p className="text-gray-600 mt-15 mb-2">
                National Institute Of Technology, Durgapur
              </p>
            </div>
            <div className="basis-1/3 h-[350px] text-[16.5px]  ms-15 rounded overflow-y-auto overflow-hidden">
              I am a Full Stack Developer with a background in Mechanical Engineering from NIT Durgapur. Currently working at Carmaa Car Care, I specialize in building scalable web applications using React, Node.js, and MongoDB. I have experience integrating AI/LLM solutions and working with AWS cloud services. I am passionate about creating efficient, user-friendly applications and continuously learning new technologies to stay ahead in the field.
            </div>
          </div>
        </section>

        <section id="experience" className="mt-10 text-center px-4 py-10">
          <p className="text-gray-500">Explore My</p>
          <p className="text-headingC text-5xl font-bold mb-10">Experience</p>

          <div className="flex flex-col md:flex-row justify-center gap-10">
            <div className="border border-amber-950 rounded-2xl p-6 w-full md:w-96 shadow-md">
              <div>
                <p className="text-3xl font-semibold mb-4">AI/LLM</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {aiLlm.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-purple-400  hover:bg-purple-700 hover:scale-105 text-white px-4 py-2 rounded-2xl text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <p className="text-3xl font-semibold mb-4">Frontend</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {frontend.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-400  hover:bg-blue-700 hover:scale-105 text-white px-4 py-2 rounded-2xl text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="border border-amber-950 rounded-2xl p-6 w-full md:w-96 shadow-md">
              <div>
                <p className="text-3xl font-semibold mb-4">Backend</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {backend.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-400  hover:bg-blue-700 hover:scale-105 text-white px-4 py-2 rounded-2xl text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <p className="text-2xl font-semibold mb-4">Databases</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {databases.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-green-400  hover:bg-green-700 hover:scale-105 text-white px-4 py-2 rounded-2xl text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <p className="text-2xl font-semibold mb-4">DevOps & Tools</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {devops.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-green-400  hover:bg-green-700 hover:scale-105 text-white px-4 py-2 rounded-2xl text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 max-w-4xl mx-auto text-left">
            <p className="text-3xl font-bold text-center mb-8">Work Experience</p>
            <div className="border border-amber-950 rounded-2xl p-6 shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-2xl font-semibold">Full Stack Developer</p>
                  <p className="text-gray-600">Carmaa Car Care</p>
                </div>
                <p className="text-gray-500">Sep 2025 - Present</p>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Built a multimodal car damage analysis feature using LLM to analyze vehicle images</li>
                <li>Implemented Referral tracking system, driving 30% growth in user acquisition</li>
                <li>Built automated vehicle information extraction using Google Vision API</li>
                <li>Designed and implemented notification and event-driven workflows using AWS EventBridge</li>
                <li>Managed production deployments on AWS using Docker, EC2, ECR, and Docker Swarm</li>
              </ul>
            </div>
            <div className="border border-amber-950 rounded-2xl p-6 shadow-md mt-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-2xl font-semibold">Full Stack Developer Intern</p>
                  <p className="text-gray-600">Carmaa Car Care</p>
                </div>
                <p className="text-gray-500">May 2025 - Aug 2025</p>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Contributed to backend development across multiple microservices</li>
                <li>Designed and restructured MongoDB schemas with backward compatibility</li>
                <li>Worked on end-to-end feature for the admin dashboard (React)</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="text-center mt-10">
          <p>Browse My Recent</p>
          <p className="text-headingC text-5xl font-bold">Projects</p>
          <div className="flex flex-wrap justify-center mt-10 gap-10 px-4">
            <motion.div
              className="h-[450px] w-96 border border-zinc-600 items-center justify-center flex flex-col rounded-2xl align-middle p-4"
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div>
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
                  alt="CRM Dashboard"
                  className="h-48 w-full object-cover rounded"
                />
              </div>
              <p className="my-5 text-xl font-semibold">CRM Dashboard</p>
              <p className="text-sm text-gray-600 mb-4">Tech Stack: React (Vite), Node/Express, Vercel, TailwindCSS, MongoDB</p>
              <p className="text-sm text-gray-700 mb-4">Developed and deployed a full-stack web application using React for frontend with modular components. Applied Redux Toolkit for state management.</p>
              <div className="flex justify-center gap-5 mt-auto">
                <div className="flex gap-1">
                  <img
                    src="https://www.svgrepo.com/show/506497/github.svg"
                    className="h-[30px]"
                    alt="Github"
                  />
                  <a
                    href="https://github.com/sourav7274/Actual_Project2_FE"
                    target="_blank"
                    className="cursor-pointer hover:underline"
                  >
                    Frontend
                  </a>
                </div>
                <div className="flex gap-1">
                  <img
                    src="https://www.svgrepo.com/show/506497/github.svg"
                    className="h-[30px]"
                    alt="Github"
                  />
                  <a
                    href="https://github.com/sourav7274/ActaulPrpject_BE"
                    target="_blank"
                    className="cursor-pointer hover:underline"
                  >
                    Backend
                  </a>
                </div>
                <div className="flex gap-1">
                  <img
                    src="https://www.svgrepo.com/show/309737/live.svg"
                    className="h-[30px]"
                    alt="Live Demo"
                  />
                  <a
                    href="https://actual-project2-fe.vercel.app/"
                    target="_blank"
                    className="cursor-pointer hover:underline"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="h-[450px] w-96 border border-zinc-600 items-center justify-center flex flex-col rounded-2xl align-middle p-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div>
                <img
                  src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop"
                  alt="Git Gandalf"
                  className="h-48 w-full object-cover rounded"
                />
              </div>
              <p className="my-5 text-xl font-semibold">Git Gandalf</p>
              <p className="text-sm text-gray-600 mb-4">Tech Stack: Node.js, Ollama (LLM)</p>
              <p className="text-sm text-gray-700 mb-4">AI-powered pre-commit hook that uses local LLM (Ollama) to analyze staged git changes and approve/block commits based on security rules. Includes secret detection, code quality validation, and branch protection.</p>
              <div className="flex justify-center gap-5 mt-auto">
                <div className="flex gap-1">
                  <img
                    src="https://www.svgrepo.com/show/506497/github.svg"
                    className="h-[30px]"
                    alt="Github"
                  />
                  <a
                    href="https://github.com/sourav7274/git-gandalf"
                    target="_blank"
                    className="cursor-pointer hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="contact" className=" text-center mt-10">
          <p className="mt-15">Get in Touch</p>
          <p className="text-5xl mt-5 font-bold">Contact Me</p>
          <div className="mt-10 w-[450px] border border-black p-4 rounded-4xl flex justify-between gap-5 mx-auto">
            <div className="flex mt-4">
              <img
                className="h-[30px]"
                src="https://www.svgrepo.com/show/488920/email.svg"
                alt="Email LOGO"
              />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=souravsarkar6259@gmail.com"
                target="_blank"
                className="cursor-pointer hover:underline hover:underline-offset-10 ms-2 hover:text-gray-500 hover:bg-gray-100"
              >
                souravsarkar6259@gmail.com
              </a>
            </div>
            <div className="flex">
              <img
                className="h-[50px]"
                src="https://www.svgrepo.com/show/506517/linkedin.svg"
                alt="LinkedI LOGO"
              />

              <a
                href="https://www.linkedin.com/in/sourav-sarkar7274/"
                target="_blank"
                className="cursor-pointer hover:underline hover:underline-offset-10 mt-3 hover:text-gray-500 hover:bg-gray-100"
              >
                linkedin
              </a>
            </div>
          </div>
          <p className="mt-4 text-gray-600">8925743416</p>
          <div className="flex gap-10 justify-center mt-30">
            <a
              className="hover:text-gray-600 hover:underline hover:underline-offset-10"
              href="#about"
            >
              About
            </a>
            <a
              className="hover:text-gray-600 hover:underline hover:underline-offset-10"
              href="#experience"
            >
              Experience
            </a>
            <a
              className="hover:text-gray-600 hover:underline hover:underline-offset-10"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="hover:text-gray-600 hover:underline hover:underline-offset-10"
              href="#contact"
            >
              Contact
            </a>
          </div>
          <p className=" mt-35">
            Copyright © 2025 Sourav Sarkar. All Rights Reserved.
          </p>
        </section>
      </div>
    </>
  );
}

export default App;