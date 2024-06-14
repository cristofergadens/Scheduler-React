import React from "react";
import ProfessionalCard from "../components/ProfessionalCard";
import Schedule from "../components/Schedule";

export default function Home() {
  return (
    <div className="homeContainer">
      <ProfessionalCard />
      <Schedule />
    </div>
  );
}
