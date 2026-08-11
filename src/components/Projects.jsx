import { motion } from "motion/react";
import SectionWrapper from "./SectionWrapper";
import SectionMarker from "./SectionMarker";
import { projects, openSource } from "../data/content";
import { GithubIcon, ArrowUpRightIcon, BranchIcon } from "./Icons";

const ProjectCard = ({ project }) => (
  <motion.div className="panel panel-hover p-6 sm:p-8" whileHover={{ y: -3 }}>
    <div className="flex items-start justify-between gap-4 mb-3">
      <h3 className="text-xl sm:text-2xl font-bold text-text-primary">{project.title}</h3>
      <span className="mono text-[10px] px-2 py-1 border border-border-hairline-strong rounded text-accent-green whitespace-nowrap">
        {project.status}
      </span>
    </div>
    <p className="mono text-sm text-accent-blue mb-4">{project.tagline}</p>
    <p className="text-text-secondary leading-relaxed mb-4">{project.description}</p>

    {project.howItWorks && (
      <div className="panel bg-bg-base p-4 mb-5">
        <p className="kicker mb-2">how it works</p>
        <p className="text-text-secondary text-sm leading-relaxed">{project.howItWorks}</p>
      </div>
    )}

    <div className="flex flex-wrap gap-2 mb-5">
      {project.tech.map((t) => (
        <span key={t} className="tag">{t}</span>
      ))}
    </div>
    <a
      href={project.github}
      target="_blank"
      rel="noreferrer"
      className="mono text-sm text-text-secondary hover:text-accent-green transition-colors inline-flex items-center gap-2"
    >
      <GithubIcon className="h-4 w-4" />
      View source
    </a>
  </motion.div>
);

const OpenSourceCard = ({ repo }) => (
  <motion.div className="panel panel-hover p-6" whileHover={{ y: -3 }}>
    <div className="flex items-start justify-between mb-1">
      <a
        href={repo.href}
        target="_blank"
        rel="noreferrer"
        className="text-lg font-bold text-text-primary hover:text-accent-green transition-colors inline-flex items-center gap-2"
      >
        {repo.name}
        <ArrowUpRightIcon className="h-3.5 w-3.5" />
      </a>
      <span className="mono text-[10px] px-2 py-1 border border-border-hairline-strong rounded text-accent-blue whitespace-nowrap">
        {repo.stat}
      </span>
    </div>
    <p className="text-text-tertiary text-sm mb-4">{repo.role}</p>

    <div className="space-y-4">
      {repo.contributions.map((c) => (
        <a
          key={c.pr}
          href={`${repo.href}/pull/${c.pr.replace(/\D/g, "")}`}
          target="_blank"
          rel="noreferrer"
          className="block group"
        >
          <div className="flex items-center gap-2 mb-1">
            <BranchIcon className="h-3.5 w-3.5 text-text-tertiary flex-shrink-0" />
            <p className="text-sm font-medium text-text-primary group-hover:text-accent-green transition-colors">
              {c.title}
            </p>
          </div>
          <p className="text-text-secondary text-xs leading-relaxed">{c.detail}</p>
          <p className="mono text-[10px] text-text-tertiary mt-1.5 group-hover:text-accent-green transition-colors">
            {c.pr} on GitHub →
          </p>
        </a>
      ))}
    </div>
  </motion.div>
);

const Projects = () => (
  <SectionWrapper id="projects" className="py-20 px-6 lg:px-20 border-t border-border-hairline">
    <div className="max-w-6xl mx-auto">
      <SectionMarker index="03" label="PROJECTS" title="Things I've built" />
      <p className="text-text-secondary max-w-2xl -mt-6 mb-10">
        My day job is mostly Carmaa's codebase, which isn't mine to show. This
        is what I've built and shipped on my own — real code, real diffs,
        nothing you have to take my word for.
      </p>

      <div className="space-y-6 mb-16">
        {projects.map((p) => (
          <ProjectCard key={p.key} project={p} />
        ))}
      </div>

      <p className="kicker mb-6">open source</p>
      <div className="grid md:grid-cols-2 gap-6">
        {openSource.map((repo) => (
          <OpenSourceCard key={repo.name} repo={repo} />
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default Projects;
