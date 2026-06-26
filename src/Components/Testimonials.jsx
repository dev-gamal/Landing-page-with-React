import TestimonialCard from "./TestimonialCard";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const reviews = [
    {
      name: "Sophie Martin",
      role: "Founder",
      company: "DesignCo",
      initials: "SM",
      feedback:
        "The interface is incredibly smooth. Since we started using this solution, our team has saved nearly 15 hours a week on administrative tasks.",
    },
    {
      name: "Marc Clayton",
      role: "Operations Director",
      company: "LogiTech Solutions",
      initials: "MD",
      feedback:
        "Setup was instantaneous. I had doubts about integrating it with our current systems, but everything synced naturally, with no coding required.",
    },
    {
      name: "Lucy Thomas",
      role: "Freelance",
      company: "Consulting L.",
      initials: "LD",
      feedback:
        "I was looking for a simple tool to centralize my business without paying for features I don't use. DevSol is exactly what I needed.",
    },
  ];

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Trusted by</h2>
          <p className={styles.sectionSubtitle}>
            Discover how our users have transformed the way they work thanks to
            our solution.
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
