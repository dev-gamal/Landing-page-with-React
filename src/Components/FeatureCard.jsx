import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Features.module.css';

export default function FeatureCard({ icon, title, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
}