import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './Testimonials.module.css';

export default function TestimonialCard({ name, role, company, feedback, initials }) {
  const stars = Array(5).fill(0);

  return (
    <div className={styles.card}>
      <div className={styles.starsContainer}>
        {stars.map((_, index) => (
          <FontAwesomeIcon key={index} icon={faStar} className={styles.starIcon} />
        ))}
      </div>
      
      <p className={styles.feedback}>"{feedback}"</p>
      
      <div className={styles.clientInfo}>
        <div className={styles.avatar}>{initials}</div>
        <div>
          <h4 className={styles.clientName}>{name}</h4>
          <span className={styles.clientRole}>{role} - {company}</span>
        </div>
      </div>
    </div>
  );
}