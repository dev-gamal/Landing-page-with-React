import Header from './components/Header';
import Hero from './Components/Hero';
import Features from './Components/Features';
import Footer from './components/Footer';

export default function App() {
  
  const sectionPlaceholderStyle = {
    padding: '8rem 0',
    textAlign: 'center',
    borderBottom: '1px dashed #e5e7eb'
  };

  return (
    <>
      {/* Barre de navigation fixée en haut */}
      <Header />

      {/* Zone de contenu de la Landing Page */}
      <main style={{ marginTop: '70px' }}>
        <Hero/>
        <Features/>

        {/* Squelette de la section À propos */}
        <section id="about" style={{ ...sectionPlaceholderStyle, backgroundColor: '#f9fafb' }}>
          <div className="container">
            <h2>[Section À propos]</h2>
            <p style={{ color: '#4b5563', marginTop: '0.5rem' }}>Présentation du public ciblé et du problème résolu.</p>
          </div>
        </section>

        {/* Squelette de la section Témoignages */}
        <section id="testimonials" style={sectionPlaceholderStyle}>
          <div className="container">
            <h2>[Section Témoignages]</h2>
            <p style={{ color: '#4b5563', marginTop: '0.5rem' }}>Avis statiques et retours utilisateurs.</p>
          </div>
        </section>

        {/* Squelette de la section Contact / CTA */}
        <section id="contact" style={{ ...sectionPlaceholderStyle, backgroundColor: '#f9fafb' }}>
          <div className="container">
            <h2>[Section Contact / CTA]</h2>
            <p style={{ color: '#4b5563', marginTop: '0.5rem' }}>Formulaire de contact contrôlé et appel à l'action final.</p>
          </div>
        </section>

      </main>

      {/* Pied de page global */}
      <Footer />
    </>
  );
}