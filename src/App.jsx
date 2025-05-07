function App() {
  const frontend = ["HTML", "CSS", "TailwindCSS", "Bootstrap", "ReactJs"];
  const animation = ["GSAP", "Framer Motion"];
  const Others = ["Mongoose Database", "SQL", "Git", "Python"];
  const backend = ["NodeJs", "ExpressJs", "Flask"];
  return (
    <>
      <div>
        <section className="h-[80vh] w-full pt-10 ps-10 pe-7">
          <div className="flex justify-between">
            <p className="text-4xl ms-10 text-headingC">Sourav Sarkar</p>
            <nav className="text-2xl me-10 flex gap-5">
              <p>About</p>
              <p>Experience</p>
              <p>Projects</p>
              <p>Contact</p>
            </nav>
          </div>
          <div className="flex justify-center gap-7 mt-56">
            <div>
              <img
                className="h-[300px]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl5NECw1VkX_oT_2yDyBObA1ePmGvsma0fhQ&s"
              />
            </div>
            <div>
              <p className="text-gray-500">Hello, I'm </p>
              <p className="text-headingC text-[48px] font-bold">
                Sourav Sarkar
              </p>
              <p className="text-gray-500 font-[600] mt-2 text-[28px]">
                Full Stack Developer
              </p>
              <div className="mt-3">
                <button className="bg-gray-500 hover:bg-gray-900 hover:text-amber-50 rounded-2xl px-4 py-2 me-4">
                  Download CV
                </button>
                <button className="bg-gray-500  hover:bg-gray-900 hover:text-amber-50 rounded-2xl px-4 py-2">
                  Contact Info
                </button>
              </div>
              <div className="mt-5">
                <button className="bg-gray-500  hover:bg-gray-900 hover:text-amber-50 rounded-2xl px-4 py-2 me-4">
                  {" "}
                  Linkedin Icons
                </button>
                <button className="bg-gray-500  hover:bg-gray-900 hover:text-amber-50 rounded-2xl px-4 py-2">
                  {" "}
                  Github Icons
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="h-screen  text-center w-full pt-25">
          <p className="text-l">Get to Know More</p>
          <p className="text-5xl font-bold mt-4">About Me</p>

          <div className="flex justify-center gap-4 max-w-7xl mt-50 mx-auto px-4">
            {/* <div className="basis-1/3 bg-gray-100 p-4 rounded">Experience</div> */}
            <div className="basis-1/3 border border-black rounded-3xl h-[250px] p-4 rounded">
              <p className="text-3xl">Education</p>
              <p className="mt-5 text-xl">B.Tech Mechanical Engineering</p>
              <p className="mt-5">Passing Out Year - 2023</p>
              <p className="text-gray-600 mt-15">
                National Institute Of Technology, Durgapur
              </p>
            </div>
            <div className="basis-1/3 h-[350px]  ms-15 rounded overflow-y-auto overflow-hidden">
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

        <section className="h-[70vh] text-center px-4 py-10">
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
                      className="bg-blue-400 text-white px-4 py-2 rounded-2xl text-sm"
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
                      className="bg-green-400 text-white px-4 py-2 rounded-2xl text-sm"
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
                      className="bg-blue-400 text-white px-4 py-2 rounded-2xl text-sm"
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
                      className="bg-green-400 text-white px-4 py-2 rounded-2xl text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="min-h-[60vh] text-center">
          <p>Browse My Recent</p>
          <p className="text-headingC text-5xl font-bold">Projects</p>
          <div className="flex  flex-wrap justify-center mt-10 gap-10 px-4">
            <div className="h-96 w-96 border border-zinc-600 items-center justify-center flex flex-col rounded-2xl align-middle">
              <div>
                <img src="https://images.unsplash.com/photo-1657812159075-7f0abd98f7b8?q=80&w=1277&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
              <p className="my-5">E commerce Website </p>
              <div>
                <button className="me-10 cursor-pointer bg-black  text-amber-100 hover:bg-white  hover:text-black px-4 py-2 rounded-2xl">
                  Github
                </button>
                <button className=" bg-black cursor-pointer text-amber-100  hover:bg-white  hover:text-black px-4 py-2 rounded-2xl">
                  Live Demo
                </button>
              </div>
            </div>
            <div className="h-96 w-96 border border-zinc-600 items-center justify-center flex flex-col rounded-2xl  align-middle">
              <div>
                <img src="https://plus.unsplash.com/premium_photo-1733328013343-e5ee77acaf05?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
              <p className="my-5">CRM Dashboard </p>
              <div>
                <button className="me-10 cursor-pointer  bg-black  hover:bg-white  hover:text-black text-amber-100 px-4 py-2 rounded-2xl">
                  Github
                </button>
                <button className=" bg-black cursor-pointer  hover:bg-white  hover:text-black text-amber-100 px-4 py-2 rounded-2xl">
                  Live Demo
                </button>
              </div>
            </div>
            <div className="h-96 w-96 border border-zinc-600 items-center justify-center flex flex-col rounded-2xl align-middle">
              <div>
                <img src="https://images.unsplash.com/photo-1683721003111-070bcc053d8b?q=80&w=1100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
              <p className="my-5">Social Media App</p>
              <div>
                <button className="me-10 bg-black cursor-pointer  hover:bg-white  hover:text-black text-amber-100 px-4 py-2 rounded-2xl">
                  Github
                </button>
                <button
                  className="10 bg-black  cursor-pointer hover:bg-white  hover:text-black text-amber-100 px-4 py-2 rounded-2xl"
                  disabled
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="min-h-[60vh] text-center mt-5">
          <p className="mt-15">Get in Touch</p>
          <p className="text-5xl mt-5">Contact Me</p>
          <div className="mt-10 w-96 border border-black p-4 rounded-lg flex justify-between gap-20 mx-auto">
            <div>
              <img src="" alt="Email LOGO" />
              <p className="cursor-pointer hover:underline">
                souravsarkar6259@gmail.com
              </p>
            </div>
            <div>
              <img src="" alt="LinkedI LOGO" />
              <p className="cursor-pointer hover:underline">LinkedIn</p>
            </div>
          </div>
          <div className="flex gap-10 justify-center mt-30">
            <p>About</p>
            <p>Experience</p>
            <p>Project</p>
            <p>Contact</p>
          </div>
          <p className=" mt-35">
            Copyright © 2025 DUmmy Name. All Rights Reserved.
          </p>
        </section>
      </div>
    </>
  );
}

export default App;
