import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAmbientBackground } from "./hooks/useAmbientBackground";

function navLinkClass({ isActive }) {
  return "webLinks" + (isActive ? " active" : "");
}

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  useAmbientBackground();

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="bg-ambient" aria-hidden="true">
        <div className="blob-wrap wrap-1"><span className="blob blob-1" /></div>
        <div className="blob-wrap wrap-2"><span className="blob blob-2" /></div>
        <div className="blob-wrap wrap-3"><span className="blob blob-3" /></div>
        <div className="blob-wrap wrap-4"><span className="blob blob-4" /></div>
      </div>

      <header className="site-header">
        <div className="nav-inner">
          <h1 id="webname">Khushi Thaker</h1>
          <nav>
            <ul className={"nav-links" + (menuOpen ? " active" : "")}>
              <li><NavLink className={navLinkClass} to="/" end onClick={closeMenu}>Home</NavLink></li>
              <li><NavLink className={navLinkClass} to="/experience" onClick={closeMenu}>Experience</NavLink></li>
              <li><NavLink className={navLinkClass} to="/projects" onClick={closeMenu}>Projects</NavLink></li>
              <li><NavLink className={navLinkClass} to="/fun" onClick={closeMenu}>Hobbies</NavLink></li>
              <li><NavLink className={navLinkClass} to="/contact" onClick={closeMenu}>Contact Me</NavLink></li>
            </ul>
            <div className="nav-utility">
              <div
                className="hamburger-menu"
                aria-label="Toggle menu"
                role="button"
                tabIndex={0}
                onClick={() => setMenuOpen((open) => !open)}
              >
                <i className="fas fa-bars"></i>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer>
        <div className="footer-container">
          <p id="copyYear">designed ✎ᝰ and created 👩🏻‍💻 by Khushi Thaker &copy; {new Date().getFullYear()}</p>
          <p>
            <a href="https://www.linkedin.com/in/khushi-thaker108/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i> |
            </a>
            <a href="https://github.com/kthaker108" target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i> |
            </a>
            <a href="mailto:kthaker@andrew.cmu.edu" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
