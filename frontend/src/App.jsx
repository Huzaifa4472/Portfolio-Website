import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HireBanner from "./components/HireBanner";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import TrustBar from "./components/TrustBar";
import { Background, ScrollProgress, useSpotlight } from "./components/ui";

function App() {
  useSpotlight();

  return (
    <div className="relative isolate overflow-x-hidden">
      <Background />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Portfolio />
        <Experience />
        <HireBanner />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
