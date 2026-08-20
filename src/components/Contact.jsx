import { motion } from "motion/react";
import SectionWrapper from "./SectionWrapper";
import SectionMarker from "./SectionMarker";
import { profile } from "../data/content";
import { EmailIcon, PhoneIcon, LinkedinIcon, ArrowUpRightIcon } from "./Icons";

const CONTACT_ITEMS = [
  {
    label: "Email",
    value: profile.email,
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`,
    Icon: EmailIcon,
  },
  {
    label: "LinkedIn",
    value: "sourav-sarkar7274",
    href: profile.linkedin,
    Icon: LinkedinIcon,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
    Icon: PhoneIcon,
  },
];

const Contact = () => (
  <SectionWrapper id="contact" className="py-20 lg:py-28 px-6 lg:px-10 xl:px-16 border-t border-border-hairline bg-bg-surface/30">
      <SectionMarker index="04" label="CONTACT" title="Let&apos;s make something good" />

      <div className="max-w-3xl mx-auto text-center">
          <p className="text-text-secondary max-w-[58ch] mx-auto leading-relaxed">
            I&apos;m open to full-stack and AI/LLM systems roles. If you&apos;re hiring,
            have an interesting problem, or just want to talk shop, I&apos;d love to hear from you.
          </p>

          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-end gap-3 justify-center mt-8 max-w-full text-xl sm:text-4xl lg:text-5xl font-bold text-text-primary hover:text-accent-green transition-colors tracking-[-0.035em] leading-tight"
          >
            {profile.email}
            <ArrowUpRightIcon className="hidden sm:block h-6 w-6 mb-1.5 text-text-tertiary group-hover:text-accent-green transition-colors flex-shrink-0" />
          </a>

          <div className="grid md:grid-cols-3 mt-12 border-y border-border-hairline divide-y md:divide-y-0 md:divide-x divide-border-hairline text-left">
            {CONTACT_ITEMS.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.label === "Phone" ? undefined : "_blank"}
                rel={item.label === "Phone" ? undefined : "noreferrer"}
                className="flex items-center justify-between gap-4 py-5 md:px-5 md:first:pl-0 group"
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <item.Icon className="h-4 w-4 text-accent-green flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="mono text-[10px] text-text-tertiary">{item.label.toUpperCase()}</p>
                    <p className="text-text-primary text-sm font-medium mt-0.5 truncate">{item.value}</p>
                  </div>
                </div>
                <ArrowUpRightIcon className="h-3.5 w-3.5 text-text-tertiary group-hover:text-accent-green transition-colors flex-shrink-0" />
              </motion.a>
            ))}
          </div>
      </div>
  </SectionWrapper>
);

export default Contact;
