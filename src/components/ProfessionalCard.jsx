import React from "react";
import { CardContainer } from "./styles";
import Rating from "./Rating";
import Loader from "./Loader";

export default function ProfessionalCard({ profile }) {
  if (!profile) return <Loader />;

  return (
    <CardContainer>
      <div className="firstSection">
        <img src={profile.image} alt="Professional" className="profile-image" />
        <div className="infos">
          <h2 className="name">{profile.name}</h2>
          <div className="secondLine">
            <span className="role">{profile.role} </span>
            <span className="location"> | {profile.location}</span>
          </div>
          <div className="rating">
            <Rating rating={profile.rating} />
            <span>({profile.reviews} reviews)</span>
          </div>
          <p className="price">
            R${profile.price} <span className="per-time"> / 50 MINUTES</span>
          </p>
        </div>
      </div>
      <p className="description">{profile.description}</p>
    </CardContainer>
  );
}
