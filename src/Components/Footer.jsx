import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faXTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.brandSection}>
          <span className={styles.logo}>Dev<span>Sol</span></span>
          <p className={styles.description}>
            Simplify your business management with our cutting-edge digital solution.
          </p>
          <div className={styles.socials}>
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="Github">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="X (Twitter)">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="Linkedin">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>

        <div className={styles.linksGroup}>
          <h3>Navigation</h3>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className={styles.linksGroup}>
          <h3>Legal</h3>
          <ul>
            <li><a href="#">Confidentiality</a></li>
            <li><a href="#">Legal Notice</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.copyright}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} DevSol. All rights reserved.</p>
        </div>
      </div>

      <button 
        className={`${styles.scrollTop} ${isVisible ? styles.scrollTopVisible : ''}`} 
        onClick={scrollToTop}
        aria-label="Retour en haut"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </footer>
  );
}