import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { profile, heroMetrics } from "../data/content";
import { DownloadIcon, ArrowUpRightIcon } from "./Icons";

const ROLE_TEXT = "Full Stack Developer";

const useTypewriter = (text, speed = 55, startDelay = 400) => {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setDisplay(text.slice(0, i));
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return display;
};

const Hero = () => {
  const typed = useTypewriter(ROLE_TEXT);

  return (
    <section className="px-6 lg:px-20 pt-16 pb-20 lg:pt-24 lg:pb-28">
      <motion.p
        className="kicker mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        // whoami
      </motion.p>

      <motion.h1
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary tracking-tight max-w-3xl"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {profile.name}
      </motion.h1>

      <motion.p
        className="mono text-lg sm:text-xl text-accent-green mt-4 h-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        {typed}
        <span className="cursor-blink">_</span>
        <span className="text-text-tertiary"> · {profile.specialization}</span>
      </motion.p>

      <motion.p
        className="text-text-secondary text-base sm:text-lg mt-6 max-w-2xl leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        I build production AI agents and the infrastructure they run on — from
        multi-provider LLM orchestration down to the Docker Swarm cluster and
        nginx routing underneath. Currently shipping both at{" "}
        <span className="text-text-primary font-medium">Carmaa Car Care</span>.
      </motion.p>

      <motion.div
        className="flex flex-wrap gap-4 mt-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        <a href="/Sourav_Sarkar_resume.pdf" download className="btn-primary">
          <DownloadIcon className="h-4 w-4" />
          Download CV
        </a>
        <button
          className="btn-secondary"
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Contact
          <ArrowUpRightIcon className="h-4 w-4" />
        </button>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-14 max-w-4xl"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.75 }}
      >
        {heroMetrics.map((metric) => (
          <div key={metric.label} className="panel panel-hover p-4">
            <p className="mono text-lg sm:text-xl font-bold text-accent-green">
              {metric.value}
            </p>
            <p className="mono text-[11px] text-text-tertiary mt-2 tracking-wide">
              {metric.label}
            </p>
            <p className="text-xs text-text-secondary mt-1">{metric.detail}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
