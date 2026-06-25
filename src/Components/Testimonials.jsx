import TestimonialCard from './TestimonialCard';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const reviews = [
    {
      name: "Sophie Martin",
      role: "Fondatrice",
      company: "DesignCo",
      initials: "SM",
      feedback: "L'interface est d'une fluidité incroyable. Depuis que nous utilisons cette solution, notre équipe a gagné près de 15 heures par semaine sur des tâches administratives."
    },
    {
      name: "Marc Dupont",
      role: "Directeur des Opérations",
      company: "LogiTech Solutions",
      initials: "MD",
      feedback: "La mise en place a été instantanée. J'avais des doutes sur l'intégration avec nos systèmes actuels, mais tout s'est fait naturellement, sans besoin de coder."
    },
    {
      name: "Léa Dubois",
      role: "Freelance",
      company: "Consulting L.",
      initials: "LD",
      feedback: "Je cherchais un outil simple pour centraliser mon activité sans payer pour des fonctionnalités que je n'utilise pas. FlexSol répond exactement à ce besoin."
    }
  ];

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Ils nous font confiance</h2>
          <p className={styles.sectionSubtitle}>
            Découvrez comment nos utilisateurs ont transformé leur manière de travailler grâce à notre solution.
          </p>
        </div>

        <div className={styles.grid}>
          {reviews.map((review, index) => (
            <TestimonialCard 
              key={index}
              name={review.name}
              role={review.role}
              company={review.company}
              initials={review.initials}
              feedback={review.feedback}
            />
          ))}
        </div>
      </div>
    </section>
  );
}