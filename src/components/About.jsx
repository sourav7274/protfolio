import { motion } from "motion/react";
import SectionWrapper from "./SectionWrapper";
import SectionMarker from "./SectionMarker";
import { education } from "../data/content";

const About = () => (
  <SectionWrapper id="about" className="py-20 lg:py-28 px-6 lg:px-10 xl:px-16">
    <SectionMarker index="01" label="ABOUT" title="A little about me" />

    <motion.div
      className="max-w-5xl mx-auto grid lg:grid-cols-[minmax(0,1.1fr)_minmax(16rem,0.75fr)] lg:gap-20 items-start"
      initial={{ opacity: 0.45, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary tracking-[-0.03em] leading-tight">
        I moved from mechanical systems to software systems — and kept the
        same curiosity about how every part works together.
      </p>
      <div className="space-y-5 text-text-secondary leading-relaxed lg:pt-1">
        <p>
          I came into software from an unexpected path: Mechanical Engineering
          at NIT Durgapur. Somewhere between heat transfer and thermodynamics,
          I realized I&apos;d rather build with code than read steam tables.
        </p>
        <p>
          Today, I work on AI agents, multi-tenant products, and the production
          infrastructure underneath them. I like taking an idea all the way from
          a rough thought to something people can actually use.
        </p>
        <p>
          Outside work, I contribute to open source, build small tools for my own
          workflow, and probably read more about distributed systems than necessary.
        </p>
      </div>
      <p className="mono text-xs text-text-tertiary mt-10 pt-6 border-t border-border-hairline lg:col-start-2">
        {education.degree} · {education.school} · {education.period}
      </p>
    </motion.div>
  </SectionWrapper>
);

export default About;
