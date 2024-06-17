import React from "react";
import ProfessionalCard from "../components/ProfessionalCard";
import Schedule from "../components/Schedule";
import Footer from "../components/Footer";
import { useProfile } from "../hooks/useProfile.js";
import { useSchedule } from "../hooks/useSchedule.js";

export default function Home() {
  const profile = useProfile();
  const schedule = useSchedule();

  return (
    <>
      <div className="homeContainer">
        <ProfessionalCard profile={profile} />
        <Schedule schedule={schedule} />
      </div>
      <Footer />
    </>
  );
}
