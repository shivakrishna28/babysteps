import React from "react";
import Header from "./components/Header";
import Itinerary from "./components/Itinerary";
import Pricing from "./components/Pricing";
import TermsConditions from "./components/TermsConditions";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Itinerary />
      <Pricing />
      <TermsConditions />
      <Footer />
    </div>
  );
}

export default App;

