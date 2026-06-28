import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./About.module.css";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const benefits = [
    "Designed for freelancers, small businesses, and SMEs",
    "Eliminates time wasted on manual tasks",
    "Centralizes all your data in one place",
    "Easy to use, no technical training required",
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.aboutContainer}`}>
        <div className={styles.imageWrapper}>
          <div className={styles.abstractImage}>
            <div className={styles.glassCard}>
              <div className={styles.statLine}></div>
              <div className={styles.statLine} style={{ width: "60%" }}></div>
              <div className={styles.statLine} style={{ width: "80%" }}></div>
            </div>
            <div className={styles.circleDecoration}></div>
          </div>
        </div>

        <div className={styles.contentWrapper}>
          <h2 className={styles.title}>Our mission : Simplify your daily</h2>

          <p className={styles.description}>
            Too many businesses waste precious time juggling dozens of complex
            tools.
            <strong> FlexSol</strong> was born from a simple realization:
            technology should adapt to you, not the other way around.
          </p>
          <p className={styles.description}>
            We created an all-in-one solution that eliminates digital friction,
            allowing you to focus on what truly matters :{" "}
            <strong>
              growing your business and keeping your customers happy.
            </strong>
          </p>

          <ul className={styles.benefitsList}>
            {benefits.map((benefit, index) => (
              <li key={index}>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className={styles.checkIcon}
                />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={styles.toggleBtn}
          >
            {isExpanded ? "Less details" : "More details"}
            <FontAwesomeIcon
              icon={isExpanded ? faChevronUp : faChevronDown}
              style={{ marginLeft: "8px" }}
            />
          </button>

          {isExpanded && (
            <div className={styles.hiddenContent}>
              <p className={styles.description}>
                In addition to these benefits, our technical team supports you 7 days a week. We deploy monthly updates based on your feedback to ensure the tool evolves with your business growth.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
