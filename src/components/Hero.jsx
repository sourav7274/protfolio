import { motion } from "motion/react";
import { profile } from "../data/content";
import { DownloadIcon, ArrowUpRightIcon } from "./Icons";

const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b border-border-hairline px-6 lg:px-10 xl:px-16 py-24 sm:py-32 lg:py-40 text-center">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0.4, y: 20, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="mono text-sm text-accent-green mb-6">Hello, I&apos;m</p>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-text-primary tracking-[-0.04em] leading-[0.92] text-balance">
          {profile.name}
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-accent-blue mt-7 tracking-[-0.025em]">
          Full Stack Developer · AI/LLM Systems
        </p>
        <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-[64ch] mx-auto mt-8">
          I enjoy turning ambitious ideas into thoughtful, reliable software —
          especially AI agents and the systems that make them useful in the real world.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-9">
          <a href="/Sourav_Sarkar_resume.pdf" download className="btn-primary">
            <DownloadIcon className="h-4 w-4" />
            Download resume
          </a>
          <button
            className="btn-secondary"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Say hello
            <ArrowUpRightIcon className="h-4 w-4" />
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-12 mono text-[11px] text-text-tertiary">
          <span>BASED IN INDIA</span>
          <span className="hidden sm:block text-border-hairline-strong">/</span>
          <span>BUILDING AT CARMAA CAR CARE</span>
          <span className="hidden sm:block text-border-hairline-strong">/</span>
          <span className="text-accent-green">OPEN TO NEW ROLES</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
