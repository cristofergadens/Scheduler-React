import React from "react";
import ProfessionalCard from "../components/ProfessionalCard";
import Schedule from "../components/Schedule";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="homeContainer">
        <ProfessionalCard />
        <Schedule />
      </div>
      <Footer/>
    </>
  );
}
