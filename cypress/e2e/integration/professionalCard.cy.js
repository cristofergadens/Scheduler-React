describe("ProfessionalCard component", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  
  it("should render profile data correctly with truncated description", () => {
    cy.contains("Marcos Silva").should("exist").and("be.visible");
    cy.contains("PSICOLOGIST | Lisbon").should("exist").and("be.visible");
    cy.get(".star-rating").should("exist").and("be.visible");
    cy.contains("(20 reviews)").should("exist").and("be.visible");
    cy.contains("R$160").should("exist").and("be.visible");
    cy.contains("/ 50 MINUTES").should("exist").and("be.visible");

    cy.contains(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    ).should("exist").and("be.visible");
    cy.get(".description")
      .should("have.css", "max-height", "150px")
      .and("have.css", "overflow", "hidden")
      .and("have.css", "text-overflow", "ellipsis");
  });

  it("should render profile image correctly", () => {
    cy.get(".profile-image")
      .should("exist")
      .and("be.visible")
      .should("have.attr", "alt", "Professional");
  });

  it("should render professional name and role correctly", () => {
    cy.contains("Marcos Silva").should("exist").and("be.visible");
    cy.contains("PSICOLOGIST | Lisbon").should("exist").and("be.visible");
  });

  it("should render rating and reviews correctly", () => {
    cy.get(".star-rating").should("exist").and("be.visible");
    cy.contains("(20 reviews)").should("exist").and("be.visible");
  });

  it("should render price per session correctly", () => {
    cy.contains("R$160").should("exist").and("be.visible");
    cy.contains("/ 50 MINUTES").should("exist").and("be.visible");
  });
});
