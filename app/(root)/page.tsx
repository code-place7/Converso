import Calltoaction from "@/components/Calltoaction";
import CompanionCard from "@/components/Companioncard";
import Companionlist from "@/components/Companionlist";
import { recentSessions } from "@/constants";

const Home = async () => {
  return (
    <main>
      <h1>Popular Companions</h1>

      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura  the Brainy EXplorer"
          topic="Neural Network Of the Brain"
          subject="science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id="456"
          name="Countsy   the Number  Wizard"
          topic="Numbers and Counting"
          subject="math"
          duration={30}
          color="#e5d0ff"
        />
        <CompanionCard
          id="789"
          name="Verba the Wordy Wonder"
          topic="Words and Language"
          subject="english"
          duration={30}
          color="#BDE7FF"
        />
      </section>
      <section className="home-section">
        <Companionlist
          title="Recently completed sessions"
          classNames="w-2/3 max-lg:w-full"
          companions={recentSessions}
        />
        <Calltoaction />
      </section>
    </main>
  );
};

export default Home;
