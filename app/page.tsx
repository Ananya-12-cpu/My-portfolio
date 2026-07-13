import PortfolioBanner from "./components/Banner";
import AboutPage from "./about/page";
import SkillPage from "./skill/page";
import WorkPage from "./works/page";
import NeuralBackground from "./components/NeuralBackground";
import ExperiencePage from "./experience/page";

export default function Home() {
  return (
    <div className="bg-[#05060a]">
      {/* Neural network effect behind everything */}
      <NeuralBackground />

      <section id="banner">
        <PortfolioBanner />
      </section>

      <section id="about">
        <AboutPage />
      </section>

      <section id="skill">
        <SkillPage />
      </section>

      <section id="works">
        <WorkPage />
      </section>

      <section id="experience">
        <ExperiencePage />
      </section>
    </div>
  );
}
