import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faArrowRight,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <a href="#" className={styles.logo} onClick={closeMenu}>
          Dev<span>Sol</span>
        </a>

        <nav className={styles.desktopNav}>
          <ul className={styles.navLinks}>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div className={styles.desktopCta}>
          <button
            onClick={toggleTheme}
            className={styles.themeToggleBtn}
            aria-label="Change theme"
          >
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} size="lg" />
          </button>

          <a href="#contact" className={styles.ctaButton}>
            Try it for free{" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ marginLeft: "8px" }}
            />
          </a>
        </div>

        <button
          className={styles.mobileMenuBtn}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isMenuOpen ? (
            <FontAwesomeIcon icon={faXmark} size="lg" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="lg" />
          )}
        </button>
      </div>

      <div
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}
      >
        <ul className={styles.mobileNavLinks}>
          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>Theme</span>
            <button onClick={toggleTheme} className={styles.themeToggleBtn}>
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} size="lg" />
            </button>
          </li>
          <li>
            <a href="#features" onClick={closeMenu}>
              Features
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={closeMenu}>
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
          <li className={styles.mobileCtaItem}>
            <a href="#contact" className={styles.ctaButton} onClick={closeMenu}>
              Try{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ marginLeft: "8px" }}
              />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
