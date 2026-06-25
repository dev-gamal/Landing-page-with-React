import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './About.module.css';

export default function About() {
  const benefits = [
    "Pensé pour les TPE, PME et freelances",
    "Résout la perte de temps liée aux tâches manuelles",
    "Centralise toutes vos données au même endroit",
    "Facile à prendre en main, sans formation technique"
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.aboutContainer}`}>
        
        <div className={styles.imageWrapper}>
          <div className={styles.abstractImage}>
            <div className={styles.glassCard}>
              <div className={styles.statLine}></div>
              <div className={styles.statLine} style={{ width: '60%' }}></div>
              <div className={styles.statLine} style={{ width: '80%' }}></div>
            </div>
            <div className={styles.circleDecoration}></div>
          </div>
        </div>

        <div className={styles.contentWrapper}>
          <h2 className={styles.title}>Notre mission : Simplifier votre quotidien</h2>
          
          <p className={styles.description}>
            Trop d'entreprises perdent un temps précieux à jongler entre des dizaines d'outils complexes. 
            <strong> FlexSol</strong> est né d'un constat simple : la technologie doit s'adapter à vous, et non l'inverse.
          </p>
          <p className={styles.description}>
            Nous avons créé une solution tout-en-un qui élimine les frictions numériques, vous permettant de vous concentrer sur ce qui compte vraiment : <strong>développer votre activité et satisfaire vos clients.</strong>
          </p>

          <ul className={styles.benefitsList}>
            {benefits.map((benefit, index) => (
              <li key={index}>
                <FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}