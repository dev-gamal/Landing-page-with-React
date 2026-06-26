import { faRocket, faShieldHalved, faChartLine, faClock } from '@fortawesome/free-solid-svg-icons';
import FeatureCard from './FeatureCard';
import styles from './Features.module.css';

export default function Features() {
  const featuresData = [
    {
      icon: faRocket,
      title: "High Performance",
      description: "Optimal execution speed for a smooth, lag-free experience."
    },
    {
      icon: faShieldHalved,
      title: "Maximum Security",
      description: "Your infrastructure and core business data are secured by industry-leading encryption protocols."
    },
    {
      icon: faChartLine,
      title: "Real-Time Tracking",
      description: "Track your key performance indicators using dynamic, centralized charts."
    },
    {
      icon: faClock,
      title: "Time Gain",
      description: "Automate your repetitive tasks so you can focus on growing your business."
    }
  ];

  return (
    <section id="features" className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Why choosing our solution ?</h2>
          <p className={styles.sectionSubtitle}>
            Discover all the built-in tools designed specifically to take your workflow to the next level.
          </p>
        </div>
        
        <div className={styles.grid}>
          {featuresData.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}