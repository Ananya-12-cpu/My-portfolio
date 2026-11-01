import RaceHero from "./components/race/RaceHero";
import RaceHud from "./components/race/RaceHud";
import { CheckpointGate } from "./components/race/Stage";
import AboutPage from "./about/page";
import SkillPage from "./skill/page";
import ExperiencePage from "./experience/page";
import WorkPage from "./works/page";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0a0612]">
      <RaceHud />
      <RaceHero />
      <CheckpointGate n={1} label="Driver" />
      <AboutPage />
      <CheckpointGate n={2} label="Garage" />
      <SkillPage />
      <CheckpointGate n={3} label="Laps" />
      <ExperiencePage />
      <CheckpointGate n={4} label="Tracks" />
      <WorkPage />
      <CheckpointGate n={5} label="Finish" />
      <Contact />
      <Footer />
    </main>
  );
}
