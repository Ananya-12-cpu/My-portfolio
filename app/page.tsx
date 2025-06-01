import PortfolioBanner from "./components/Banner";
import AboutPage from "./about/page";
import SkillPage from "./skill/page";
import WorkPage from "./works/page";

export default function Home() {
  return (
    <div>
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
    </div>
  );
}
