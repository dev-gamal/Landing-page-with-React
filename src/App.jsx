import Header from "./components/Header";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import About from "./Components/About";
import Testimonials from "./Components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  const sectionPlaceholderStyle = {
    padding: "8rem 0",
    textAlign: "center",
    borderBottom: "1px dashed #e5e7eb",
  };

  return (
    <>
      <Header />

      <main style={{ marginTop: "70px" }}>
        <Hero />
        <Features />
        <About />
        <Testimonials />

        {/* Squelette de la section Contact / CTA */}
        <section
          id="contact"
          style={{ ...sectionPlaceholderStyle, backgroundColor: "#f9fafb" }}
        >
          <div className="container">
            <h2>[Section Contact / CTA]</h2>
            <p style={{ color: "#4b5563", marginTop: "0.5rem" }}>
              Formulaire de contact contrôlé et appel à l'action final.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
