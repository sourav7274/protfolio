import { motion } from "motion/react";
import SectionWrapper from "./SectionWrapper";
import SectionMarker from "./SectionMarker";
import { projects, openSource } from "../data/content";
import { GithubIcon, ArrowUpRightIcon, BranchIcon } from "./Icons";

const ProjectCard = ({ project }) => (
  <motion.article
    className="panel panel-hover py-8 sm:py-12 lg:py-16"
    initial={{ opacity: 0.45, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
  >
    <div className="flex items-center gap-3 mono text-[10px] text-accent-green">
        <span className="status-dot" />
        {project.status}
    </div>

    <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(15rem,0.75fr)] gap-10 lg:gap-16 mt-8">
    <div>
    <p className="mono text-sm text-accent-blue">{project.tagline}</p>
    <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary tracking-[-0.04em] leading-none mt-4">
      {project.title}
    </h3>
    <p className="text-text-secondary leading-relaxed max-w-2xl mt-7">{project.description}</p>
    </div>
    <div className="lg:border-l lg:border-border-hairline lg:pl-10 flex flex-col items-start justify-between gap-8">
    <div className="flex flex-wrap gap-x-5 gap-y-3">
      {project.tech.map((t) => (
        <span key={t} className="tag">{t}</span>
      ))}
    </div>
    <a
      href={project.github}
      target="_blank"
      rel="noreferrer"
      className="btn-primary"
    >
      <GithubIcon className="h-4 w-4" />
      Explore the source
      <ArrowUpRightIcon className="h-4 w-4" />
    </a>
    </div>
    </div>
  </motion.article>
);

const OpenSourceCard = ({ repo }) => (
  <motion.article
    className="panel panel-hover py-6 sm:py-7"
    whileHover={{ y: -2 }}
    transition={{ duration: 0.2 }}
  >
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
      <span className="mono text-[10px] text-accent-blue whitespace-nowrap">
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
  </motion.article>
);

const Projects = () => (
  <SectionWrapper id="projects" className="py-20 lg:py-28 px-6 lg:px-10 xl:px-16 border-t border-border-hairline">
      <SectionMarker index="03" label="PROJECTS" title="Things I&apos;ve made" />
      <p className="text-text-secondary text-center max-w-[64ch] mx-auto -mt-5 mb-12 lg:mb-16 leading-relaxed">
        My day job is mostly Carmaa's codebase, which isn't mine to show. This
        is what I've built and shipped on my own — real code, real diffs,
        nothing you have to take my word for.
      </p>

      <div className="max-w-4xl mx-auto mb-16">
        {projects.map((p) => (
          <ProjectCard key={p.key} project={p} />
        ))}
      </div>

      <div className="flex items-center gap-5 mb-6">
        <p className="kicker">PUBLIC CONTRIBUTIONS</p>
        <span className="h-px flex-1 bg-border-hairline" />
      </div>
      <div className="grid md:grid-cols-2 md:gap-x-10">
        {openSource.map((repo) => (
          <OpenSourceCard key={repo.name} repo={repo} />
        ))}
      </div>
  </SectionWrapper>
);

export default Projects;
