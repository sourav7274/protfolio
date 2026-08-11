import { motion } from "motion/react";

const SectionWrapper = ({ children, id, className = "" }) => (
  <motion.section
    id={id}
    className={className}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.section>
);

export default SectionWrapper;
