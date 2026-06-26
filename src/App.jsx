import Header from "./components/Header";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import About from "./Components/About";
import Testimonials from "./Components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />

      <main style={{ marginTop: "70px" }}>
        <Hero />
        <Features />
        <About />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
