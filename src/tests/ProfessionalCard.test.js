import React from "react";
import { render, screen } from "@testing-library/react";
import ProfessionalCard from "../components/ProfessionalCard";

import "@testing-library/jest-dom";

const mockProfile = {
  image:
    "https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png",
  name: "Marcos Silva",
  role: "PSICOLOGIST",
  location: "Lisbon",
  price: 160,
  reviews: 20,
  rating: 4,
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
};

describe("ProfessionalCard component", () => {
  it("should render correctly", async () => {
    render(<ProfessionalCard profile={mockProfile} />);

    expect(await screen.findByText(mockProfile.role)).toBeInTheDocument();
    expect(await screen.findByText(mockProfile.name)).toBeInTheDocument();
    expect(await screen.findByText(new RegExp(mockProfile.location, 'i'))).toBeInTheDocument();
    expect(await screen.findByText(new RegExp(mockProfile.price.toString(), 'i'))).toBeInTheDocument();
  });
});
