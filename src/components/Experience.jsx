import { motion } from "motion/react";
import SectionWrapper from "./SectionWrapper";
import SectionMarker from "./SectionMarker";
import { experience } from "../data/content";

const Experience = () => (
  <SectionWrapper id="experience" className="py-20 lg:py-28 px-6 lg:px-10 xl:px-16 border-t border-border-hairline bg-bg-surface/30">
    <SectionMarker index="02" label="CURRENTLY" title="What I&apos;m building" />

    <div className="max-w-3xl mx-auto text-center">
      {experience.filter((job) => job.current).map((job) => (
        <motion.div
          key={job.period}
          initial={{ opacity: 0.45, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-text-secondary leading-relaxed">
            Right now, I&apos;m a {job.role} at <span className="text-text-primary font-semibold">{job.company}</span>,
            where I get to work across product, AI, and infrastructure.
          </p>
          <div className="mt-12 border-t border-border-hairline">
            {job.scope.map((item) => (
              <article key={item.theme} className="py-8 border-b border-border-hairline">
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary tracking-[-0.025em] capitalize">
                  {item.theme}
                </h3>
                <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mt-3">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default Experience;
