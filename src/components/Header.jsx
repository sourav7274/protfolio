import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { MenuIcon, CloseIcon } from "./Icons";

const NAV_ITEMS = ["About", "Experience", "Projects", "Contact"];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const goToSection = (item) => {
    const wasOpen = open;
    setOpen(false);
    const targetId = item.toLowerCase();
    if (location.pathname !== "/") {
      navigate(`/#${targetId}`);
      return;
    }

    window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    }, wasOpen ? 220 : 0);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border-hairline bg-bg-base/95">
      <div className="max-w-[1440px] mx-auto grid grid-cols-[1fr_auto_1fr] items-center px-6 lg:px-10 xl:px-16 py-4">
        <Link to="/" className="flex items-center gap-2.5 group justify-self-start">
          <span className="status-dot" />
          <span className="mono text-[13px] text-text-primary group-hover:text-accent-green transition-colors">
            sourav.sarkar
          </span>
          <span className="hidden sm:inline mono text-[10px] text-text-tertiary border-l border-border-hairline pl-2.5">
            PORTFOLIO / 2026
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 justify-self-center" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => goToSection(item)}
              className="mono text-[13px] text-text-secondary hover:text-accent-green transition-colors link-underline"
            >
              {`/${item.toLowerCase()}`}
            </button>
          ))}
        </nav>

        <a
          href="/Sourav_Sarkar_resume.pdf"
          download
          className="btn-secondary !hidden lg:!inline-flex !py-2 !px-4 !text-xs justify-self-end"
        >
          resume.pdf
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 -mr-2 text-text-primary hover:text-accent-green transition-colors justify-self-end"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-navigation"
            className="lg:hidden border-t border-border-hairline bg-bg-surface px-6 py-4 flex flex-col gap-1"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => goToSection(item)}
                className="mono text-left text-sm text-text-secondary hover:text-accent-green transition-colors py-2.5"
              >
                {`> ${item.toLowerCase()}`}
              </button>
            ))}
            <a
              href="/Sourav_Sarkar_resume.pdf"
              download
              className="btn-primary justify-center mt-3"
            >
              Download resume
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
