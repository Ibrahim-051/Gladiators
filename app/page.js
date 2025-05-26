import About from "./Components/About";
import Activities from "./Components/Activities";
import Footer from "./Components/Footer";
import Leading from "./Components/Leading";
import Pricing from "./Components/Pricing";
import Services from "./Components/Services";
import WhyUs from "./Components/WhyUs";
export default function Home() {
  return (
    <>
      <Leading />
      <About />
      <Activities />
      <Services />
      <WhyUs />
      <Pricing />
      <Footer />
    </>
  );
}
