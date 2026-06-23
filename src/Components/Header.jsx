import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <a href="#" className={styles.logo} onClick={closeMenu}>
          Flex<span>Sol</span>
        </a>

        <nav className={styles.desktopNav}>
          <ul className={styles.navLinks}>
            <li><a href="#features">Fonctionnalités</a></li>
            <li><a href="#about">À propos</a></li>
            <li><a href="#testimonials">Avis</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className={styles.desktopCta}>
          <a href="#contact" className={styles.ctaButton}>
            Essayer gratuitement <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '8px' }} />
          </a>
        </div>

        <button className={styles.mobileMenuBtn} onClick={toggleMenu} aria-label="Menu">
          {isMenuOpen ? <FontAwesomeIcon icon={faXmark} size="lg" /> : <FontAwesomeIcon icon={faBars} size="lg" />}
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileNavLinks}>
          <li><a href="#features" onClick={closeMenu}>Fonctionnalités</a></li>
          <li><a href="#about" onClick={closeMenu}>À propos</a></li>
          <li><a href="#testimonials" onClick={closeMenu}>Avis</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          <li className={styles.mobileCtaItem}>
            <a href="#contact" className={styles.ctaButton} onClick={closeMenu}>
              Essayer gratuitement <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '8px' }} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}