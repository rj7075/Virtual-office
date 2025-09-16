// App.jsx
import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OfficeLocations from "./components/OfficeLocations";
import Plans from "./components/Plans";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { cityData } from "./assets/cityData";
import "./index.css";

function App() {
  const [selectedCity, setSelectedCity] = useState("gurgaon");
  const currentCityData = cityData[selectedCity];

  return (
    <div className="font-sans">
      <Header />
      <Hero
        city={currentCityData.city}
        setSelectedCity={setSelectedCity}
        selectedCity={selectedCity}
      />
      <OfficeLocations offices={currentCityData.officeLocations} />
      <Plans plans={currentCityData.plans} />
      <Services services={currentCityData.services} />
      <Testimonials testimonials={currentCityData.testimonials} />
      <FAQ faqs={currentCityData.faqs} />
      <Footer />
    </div>
  );
}

export default App;
