import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import PourquoiMoi from "../components/PourquoiMoi/PourquoiMoi";
import Modeles from "../components/Modeles/Modeles";
import Avis from "../components/Avis/Avis";
import ContactCTA from "../components/ContactCTA/ContactCTA";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <PourquoiMoi />
      <Modeles />
      <Avis />
      <ContactCTA />
    </>
  );
}

export default Home;
