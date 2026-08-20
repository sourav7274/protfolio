import { Link, useLocation, useNavigate } from "react-router-dom";
import { profile } from "../data/content";
import { GithubIcon, LinkedinIcon, XIcon } from "./Icons";

const NAV_ITEMS = ["About", "Experience", "Projects", "Contact"];

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goToSection = (item) => {
    const targetId = item.toLowerCase();
    if (location.pathname !== "/") {
      navigate(`/#${targetId}`);
      return;
    }
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border-hairline px-6 lg:px-10 xl:px-16 py-10">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="status-dot" />
          <Link to="/" className="mono text-sm text-text-secondary hover:text-accent-green transition-colors">
            sourav.sarkar / portfolio
          </Link>
        </div>

        <div className="flex gap-6">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => goToSection(item)}
              className="mono text-xs text-text-tertiary hover:text-accent-green transition-colors"
            >
              {item.toLowerCase()}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-text-tertiary hover:text-accent-green transition-colors">
            <GithubIcon className="h-4 w-4" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-text-tertiary hover:text-accent-green transition-colors">
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a href={profile.x} target="_blank" rel="noreferrer" aria-label="X" className="text-text-tertiary hover:text-accent-green transition-colors">
            <XIcon className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-center gap-x-6 gap-y-2 pt-6 mt-8 border-t border-border-hairline mono text-[10px] text-text-tertiary text-center">
        <p>© 2026 SOURAV SARKAR</p>
        <p>REACT / TAILWIND / MOTION</p>
      </div>
    </footer>
  );
};

export default Footer;
