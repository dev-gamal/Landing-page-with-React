import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Take your business to the next level with our digital solution
          </h1>
          <p className={styles.description}>
            Boost efficiency, automate your business workflows, and manage your activity with ease thanks to an intuitive, high-performance interface.
          </p>
          <div className={styles.heroCta}>
            <a href="#contact" className={styles.primaryBtn}>
              Start now <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '6px' }} />
            </a>
            <a href="#about" className={styles.secondaryBtn}>
              Learn More
            </a>
          </div>
        </div>

        <div className={styles.heroImageContainer}>
          <div className={styles.illustrationMockup}>
            <div className={styles.mockupHeader}>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
            </div>
            <div className={styles.mockupBody}>
              <div className={styles.skeletonLine} style={{ width: '40%' }}></div>
              <div className={styles.skeletonLine} style={{ width: '75%' }}></div>
              <div className={styles.skeletonBox}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}