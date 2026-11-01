import PortfolioBanner from "./components/Banner";
import AboutPage from "./about/page";
import SkillPage from "./skill/page";
import WorkPage from "./works/page";
import NeuralBackground from "./components/NeuralBackground";
import ExperiencePage from "./experience/page";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollEffects from "./components/ScrollEffects";

export default function Home() {
  return (
    <div className="bg-[#05060a]">
      {/* Neural network effect behind everything */}
      <NeuralBackground />
      <ScrollEffects />

      <section id="banner">
        <PortfolioBanner />
      </section>

      <section id="about">
        <AboutPage />
      </section>

      <section id="skill">
        <SkillPage />
      </section>

       <section id="experience">
        <ExperiencePage />
      </section>

      <section id="works">
        <WorkPage />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}
