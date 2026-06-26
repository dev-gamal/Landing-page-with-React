import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'The name is required.';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "The email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "The email adress is invalide.";
    }

    if (!formData.message.trim()) {
      newErrors.message = 'The message must not be empty.';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={`container ${styles.contactContainer}`}>
        
        <div className={styles.textContent}>
          <h2 className={styles.title}>Ready to take the plunge?</h2>
          <p className={styles.description}>
            Contact our team today for a personalized demo or to ask any questions. We will get back to you within 24 hours.
          </p>
          <div className={styles.contactInfo}>
            <p><strong>Email:</strong> hello@flexsol.com</p>
            <p><strong>Phone:</strong> +1 6 23 45 67 89</p>
          </div>
        </div>

        <div className={styles.formContainer}>
          {isSubmitted ? (
            <div className={styles.successMessage}>
              <FontAwesomeIcon icon={faCheckCircle} className={styles.successIcon} />
              <h3>Message sent with success !</h3>
              <p>Thank you for contacting us. Our team will get back to you very shortly.</p>
              <button 
                onClick={() => setIsSubmitted(false)} 
                className={styles.resetButton}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Full name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jean Dupont"
                  className={errors.name ? styles.inputError : ''}
                />
                {errors.name && <span className={styles.errorText}>{errors.name}</span>}
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email">E-mail adress</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jean@entreprise.com"
                  className={errors.email ? styles.inputError : ''}
                />
                {errors.email && <span className={styles.errorText}>{errors.email}</span>}
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message">Your message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Comment pouvons-nous vous aider ?"
                  className={errors.message ? styles.inputError : ''}
                ></textarea>
                {errors.message && <span className={styles.errorText}>{errors.message}</span>}
              </div>

              <button type="submit" className={styles.submitBtn}>
                Send the message <FontAwesomeIcon icon={faPaperPlane} style={{ marginLeft: '8px' }} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}