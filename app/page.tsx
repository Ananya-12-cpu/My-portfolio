import PortfolioBanner from "./components/Banner";
import AboutPage from "./about/page";
import SkillPage from "./skill/page";
import WorkPage from "./works/page";
import Drag from "./components/Drag";
import WaterDroplets from "./components/WaterDroplets";
import ParticleNetwork from "./components/ParticleNetwork";
import TechStackNetwork from "./components/TechStackNetwork";

export default function Home() {
  return (
    <div>
      {/* Water effect behind everything */}
      {/* <WaterDroplets count={40} /> */}

      {/* <TechStackNetwork /> */}
<ParticleNetwork/>
      {/* Pointer-following ball */}
      {/* <Drag /> */}
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
