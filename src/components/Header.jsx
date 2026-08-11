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
    setOpen(false);
    const targetId = item.toLowerCase();
    if (location.pathname !== "/") {
      navigate(`/#${targetId}`);
      return;
    }
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border-hairline bg-bg-base/90 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 lg:px-20 py-4">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="status-dot" />
          <span className="mono text-sm text-text-primary group-hover:text-accent-green transition-colors">
            ~/sourav-sarkar
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => goToSection(item)}
              className="mono text-sm text-text-secondary hover:text-accent-green transition-colors link-underline"
            >
              {item.toLowerCase()}
            </button>
          ))}
          <a
            href="/Sourav_Sarkar_resume.pdf"
            download
            className="btn-secondary !py-2 !px-4 !text-xs"
          >
            resume.pdf
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-text-primary"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
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
              className="btn-primary justify-center mt-2"
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
