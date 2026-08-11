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
  <SectionWrapper id="contact" className="py-20 px-6 lg:px-20 border-t border-border-hairline">
    <div className="max-w-3xl mx-auto">
      <SectionMarker index="04" label="CONTACT" title="Let's talk" />

      <p className="text-text-secondary mb-10 max-w-xl">
        Open to full-stack and AI/LLM systems roles. If you're hiring or just
        want to talk shop about production LLM systems, reach out — I usually
        reply within a day.
      </p>

      <div className="panel divide-y divide-border-hairline">
        {CONTACT_ITEMS.map((item) => (
          <motion.a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between gap-4 p-5 sm:p-6 group hover:bg-bg-surface-raised transition-colors"
            whileHover={{ x: 4 }}
          >
            <div className="flex items-center gap-5">
              <div className="w-11 h-11 rounded-lg border border-border-hairline-strong flex items-center justify-center text-accent-green flex-shrink-0">
                <item.Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="mono text-xs text-text-tertiary">{item.label}</p>
                <p className="text-text-primary font-medium mt-0.5">{item.value}</p>
              </div>
            </div>
            <ArrowUpRightIcon className="h-4 w-4 text-text-tertiary group-hover:text-accent-green transition-colors flex-shrink-0" />
          </motion.a>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default Contact;
