import { useState } from "react";
import { motion } from "motion/react";

function App() {
  const frontend = ["HTML", "CSS", "TailwindCSS", "Bootstrap", "ReactJs"];
  const animation = ["GSAP", "Framer Motion"];
  const Others = ["Mongoose Database", "SQL", "Git", "Python"];
  const backend = ["NodeJs", "ExpressJs", "Flask"];
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

          {/* Add margin-top when dropdown is visible */}
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
            </div>
          </div>
        </section>

        <section id="about" className="h-screen w-full pt-25">
          <p className="text-l text-center">Get to Know More</p>
          <p className="text-5xl font-bold mt-4 text-center">About Me</p>

          <div className="flex  justify-center gap-4 max-w-7xl mt-50 mx-auto px-4">
            {/* <div className="basis-1/3 bg-gray-100 p-4 rounded">Experience</div> */}
            <div className="basis-1/3 flex flex-col justify-between border text-center border-black rounded-3xl min-h-[250px] p-4 ">
              <p className="text-3xl mt-5">Education</p>
              <div>
                <p className="mt-7 text-xl">B.Tech Mechanical Engineering</p>
                <p className="mt-5">Passing Out Year - 2023</p>
              </div>

              <p className="text-gray-600 mt-15 mb-2">
                National Institute Of Technology, Durgapur
              </p>
            </div>
            <div className="basis-1/3 h-[350px] text-[16.5px]  ms-15 rounded overflow-y-auto overflow-hidden">
              Hi, I'm a passionate and driven Full Stack Web Developer actively
              seeking exciting opportunities to contribute to impactful projects
              and grow in a professional development role. Originally trained as
              a Mechanical Engineer, I’ve transitioned into tech by diving deep
              into full stack development. I specialize in the MERN stack and
              have built multiple end-to-end applications including e-commerce
              platforms, social media interfaces, and CRM dashboards. I love
              turning ideas into interactive, functional web
              experiences—particularly with strong interest in web animations
              I’m currently looking for opportunities where I can apply my
              skills, contribute meaningfully, and continue learning alongside
              experienced professionals.
            </div>
          </div>
        </section>

        <section id="experience" className="mt-10 text-center px-4 py-10">
          <p className="text-gray-500">Explore My</p>
          <p className="text-headingC text-5xl font-bold mb-10">Experience</p>

          <div className="flex flex-col md:flex-row justify-center gap-10">
            {/* Left Card */}
            <div className="border border-amber-950 rounded-2xl p-6 w-full md:w-96 shadow-md">
              <div>
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

              <div className="mt-10">
                <p className="text-3xl font-semibold mb-4">Web Animations</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {animation.map((skill, idx) => (
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

            {/* Right Card */}
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
                <p className="text-2xl font-semibold mb-4">
                  Database,Tools & Languages
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {Others.map((skill, idx) => (
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
        </section>

        <section id="projects" className="text-center mt-10">
          <p>Browse My Recent</p>
          <p className="text-headingC text-5xl font-bold">Projects</p>
          <div className="flex flex-wrap justify-center mt-10 gap-10 px-4">
            <motion.div
              className="h-96 w-96 border border-zinc-600 items-center justify-center flex flex-col rounded-2xl align-middle"
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div>
                <img
                  src="https://images.unsplash.com/photo-1657812159075-7f0abd98f7b8?q=80&w=1277&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="E commerce Website"
                />
              </div>
              <p className="my-5">E commerce Website </p>
              <div className="flex justify-evenly gap-5">
                <div className="flex gap-1">
                  <img
                    src="https://www.svgrepo.com/show/506497/github.svg"
                    className="h-[30px]"
                    alt="Github"
                  />
                  <a
                    href="https://github.com/sourav7274/P1_Frontend"
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
                    href="https://github.com/sourav7274/P1_Backend"
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
                    href="https://p1-frontend-beige.vercel.app/"
                    target="_blank"
                    className="cursor-pointer hover:underline"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Repeat the same for other project cards */}
            <motion.div
              className="h-96 w-96 border border-zinc-600 items-center justify-center flex flex-col rounded-2xl align-middle"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div>
                <img
                  src="https://plus.unsplash.com/premium_photo-1733328013343-e5ee77acaf05?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="CRM Dashboard"
                />
              </div>
              <p className="my-5">CRM Dashboard </p>
              <div>
                <div className="flex justify-evenly gap-5">
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
              </div>
            </motion.div>

            <motion.div
              className="h-96 w-96 border border-zinc-600 items-center justify-center flex flex-col rounded-2xl align-middle"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <img
                  src="https://images.unsplash.com/photo-1683721003111-070bcc053d8b?q=80&w=1100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Social Media App"
                />
              </div>
              <p className="my-5">Social Media App</p>
              <div>
                <div className="flex justify-evenly gap-5">
                  <div className="flex gap-1">
                    <img
                      src="https://www.svgrepo.com/show/506497/github.svg"
                      className="h-[30px]"
                      alt="Github"
                    />
                    <a
                      href="https://github.com/sourav7274/redditClone_FE"
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
                      href="https://github.com/sourav7274/redditClone_BE"
                      target="_blank"
                      className="cursor-pointer hover:underline"
                    >
                      Backend
                    </a>
                  </div>
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
            Copyright © 2025 Dummy Name. All Rights Reserved.
          </p>
        </section>
      </div>
    </>
  );
}

export default App;
