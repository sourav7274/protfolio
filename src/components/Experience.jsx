import { motion } from "motion/react";
import SectionWrapper from "./SectionWrapper";
import SectionMarker from "./SectionMarker";
import { skillGroups, experience } from "../data/content";

const Experience = () => (
  <SectionWrapper id="experience" className="py-20 px-6 lg:px-20 border-t border-border-hairline">
    <div className="max-w-6xl mx-auto">
      <SectionMarker index="02" label="EXPERIENCE" title="Where I've worked" />

      <div className="panel mb-16 divide-y divide-border-hairline">
        {skillGroups.map((group) => (
          <div
            key={group.key}
            className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 px-5 py-4"
          >
            <p className="kicker w-full sm:w-40 flex-shrink-0">{group.title}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        {experience.map((job) => (
          <motion.div key={job.period} className="panel p-6 sm:p-8" whileHover={{ y: -2 }}>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-2">
              <div>
                <div className="flex items-center gap-2.5">
                  {job.current && <span className="status-dot" />}
                  <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
                    {job.role}
                  </h3>
                </div>
                <p className="text-text-secondary mt-1">{job.company}</p>
              </div>
              <span className="mono text-xs px-3 py-1.5 border border-border-hairline-strong rounded text-text-secondary whitespace-nowrap">
                {job.period}
              </span>
            </div>

            {job.note && (
              <p className="text-text-tertiary text-sm italic mb-6">{job.note}</p>
            )}

            <div className="space-y-5 mt-4">
              {job.scope.map((item) => (
                <div key={item.theme}>
                  <p className="kicker mb-1.5">{item.theme}</p>
                  <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            {job.metrics && (
              <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-border-hairline">
                {job.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="mono text-lg font-bold text-accent-green">{m.value}</p>
                    <p className="text-text-tertiary text-xs mt-1">{m.label}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default Experience;
