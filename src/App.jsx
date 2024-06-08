import "./App.css";
import Advantage from "./components/Advantage";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Premium from "./components/Premium";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <div className="w-[1400px]  mx-auto ">
        <Header />
        <Hero />
        <Premium />
        <Advantage />
        <Testimonials />
        <Faq />
        <Footer />
      </div>
    </>
  );
}

export default App;
