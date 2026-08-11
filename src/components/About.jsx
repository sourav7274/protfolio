import { motion } from "motion/react";
import SectionWrapper from "./SectionWrapper";
import SectionMarker from "./SectionMarker";
import { education } from "../data/content";

const About = () => (
  <SectionWrapper id="about" className="py-20 px-6 lg:px-20">
    <div className="max-w-6xl mx-auto">
      <SectionMarker index="01" label="ABOUT" title="Background" />

      <div className="grid lg:grid-cols-3 gap-6">
        <motion.div className="panel panel-hover p-6" whileHover={{ y: -3 }}>
          <p className="kicker mb-3">education</p>
          <p className="text-lg font-semibold text-text-primary">
            {education.degree}
          </p>
          <p className="text-text-secondary mt-2 text-sm">{education.school}</p>
          <p className="mono text-text-tertiary mt-3 text-xs">{education.period}</p>
        </motion.div>

        <motion.div className="panel panel-hover p-6 lg:col-span-2" whileHover={{ y: -3 }}>
          <p className="kicker mb-3">notes</p>
          <p className="text-text-secondary leading-relaxed">
            I came into software from an unexpected path — Mechanical
            Engineering at NIT Durgapur. Somewhere between heat transfer and
            thermodynamics I realized I'd rather write code than read steam
            tables, and started building.
          </p>
          <p className="text-text-secondary leading-relaxed mt-4">
            At <span className="text-text-primary font-medium">Carmaa Car Care</span>,
            I own AI agents, a multi-tenant SaaS platform, and the production
            infrastructure underneath both — React and Node.js on the surface,
            LangChain-orchestrated LLM agents in the middle, Docker Swarm and
            AWS at the base. I like taking a feature from idea to something
            running in production, end to end.
          </p>
          <p className="text-text-secondary leading-relaxed mt-4">
            Outside of that, I contribute to open source (PeerTube, Velonus),
            build small tools that scratch my own itch, and read more about
            distributed systems than is strictly necessary.
          </p>
        </motion.div>
      </div>
    </div>
  </SectionWrapper>
);

export default About;
