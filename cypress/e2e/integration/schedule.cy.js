describe("Schedule component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render title and timezone correctly", () => {
    cy.contains("Schedule your session!").should("be.visible");
    cy.contains("Timezone: Lisbon (+1)").should("be.visible");
  });

  it("should render days and times correctly", () => {
    cy.contains("Mon").should("be.visible");
    cy.contains("Tue").should("be.visible");
    cy.contains("Wed").should("be.visible");
    cy.contains("Thu").should("be.visible");
    cy.contains("Fri").should("be.visible");

    const times = ["08:00", "08:30", "09:00", "09:30", "10:00", "MORE"];
    times.forEach((time) => {
      cy.contains(time).should("be.visible");
    });
  });

  it("should update schedule data correctly", () => {
    cy.intercept("GET", "/schedule", { fixture: "newMockSchedule.json" }).as(
      "getNewSchedule"
    );

    cy.log("Interceptação configurada para /schedule");
    cy.reload();
    cy.wait("@getNewSchedule", { timeout: 10000 }).then((interception) => {
      cy.log("Interceptação ocorreu", interception);
    });

    cy.contains("Sat").should("be.visible");
    cy.contains("Sun").should("be.visible");

    const newTimes = ["08:00", "09:00", "10:00", "11:00", "12:00"];
    newTimes.forEach((time) => {
      cy.contains(time).should("be.visible");
    });
  });

  it("should handle user interactions correctly", () => {
    cy.reload();
    cy.wait(1000);
    cy.get(".swiper-button-next").should("exist").should("be.visible");
    cy.get(".swiper-button-prev").should("exist").should("be.visible");
    cy.get(".swiper-button-next").first().click({ force: true });
    cy.get(".swiper-button-prev").first().click({ force: true });
    cy.contains("Tue").should("be.visible");
  });

  it("should display alert when clicking on 08:00 schedule time", () => {
    cy.wait(2000);
    cy.contains("Mon").should("be.visible");

    cy.get(".swiper-content")
      .should("exist")
      .within(() => {
        cy.get(".swiper-slide")
          .last()
          .find(".time-scheduled")
          .contains("08:00")
          .should("be.visible")
          .click()
          .then(() => {
            const lastDay = Cypress.$(".swiper-slide")
              .last()
              .find(".day-of-week")
              .text()
              .substring(0, 3);
            const clickedTime = "08:00";
            cy.on("window:alert", (alertText) => {
              expect(alertText).to.include(
                `Scheduled for ${clickedTime} on ${lastDay}`
              );
              cy.log(`Received alert text: ${alertText}`);
            });
          });
      });
  });
});
