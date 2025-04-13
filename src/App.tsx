import "./App.css";
import { Benefits } from "./components/benefits/Benefits";
import { Contacts } from "./components/contacts/Contacts";
import { Download } from "./components/download/Download";
import { Footer } from "./components/footer/Footer";

import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { Pricing } from "./components/pricing/Pricing";
import { Testimonials } from "./components/testimonials/Testimonials";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Benefits />
      <Pricing />
      <Download />
      <Testimonials />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
