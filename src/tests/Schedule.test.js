import React from "react";
import Schedule from "../components/Schedule";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
jest.mock("swiper/swiper-bundle.css");
jest.mock("swiper/css");

const mockSchedule = {
  timezone: "Lisbon (+1)",
  title: "Schedule your session!",
  days: [
    {
      day: "AUG 19",
      day_of_week: "Monday",
      times: [" ", " ", " ", " ", " ", " "],
    },
    {
      day: "AUG 20",
      day_of_week: "Tuesday",
      times: ["08:00", "08:30", "09:00", "09:30", "10:00", "MORE"],
    },
    {
      day: "AUG 21",
      day_of_week: "Wednesday",
      times: ["08:00", "08:30", "09:00", "09:30", "10:00", "MORE"],
    },
    {
      day: "AUG 22",
      day_of_week: "Thursday",
      times: ["08:00", "08:30", "09:00", "09:30", "10:00", "MORE"],
    },
    {
      day: "AUG 23",
      day_of_week: "Friday",
      times: ["08:00", "08:30", "09:00", "09:30", "10:00", "MORE"],
    },
  ],
};

jest.mock("swiper/react", () => {
  const React = require("react");
  const SwiperMock = ({ children, ...rest }) => <div {...rest}>{children}</div>;
  const SwiperSlideMock = ({ children, ...rest }) => (
    <div {...rest}>{children}</div>
  );

  return {
    Swiper: SwiperMock,
    SwiperSlide: SwiperSlideMock,
  };
});

describe("Schedule component", () => {
  it("should render correctly", async () => {
    render(<Schedule schedules={mockSchedule} />);
  });

  it("should render days and times correctly", async () => {
    render(<Schedule schedules={mockSchedule} />);

    // Aguarda até que todos os dias da semana estejam presentes na tela
    await screen.findByText("Mon");
    await screen.findByText("Tue");
    await screen.findByText("Wed");
    await screen.findByText("Thu");
    await screen.findByText("Fri");

    // Encontra todos os elementos com o texto específico
    const timesElements = await screen.findAllByText(
      /^(08:00|08:30|09:00|09:30|10:00|MORE)$/
    );

    // Verifica se todos os elementos foram encontrados
    expect(timesElements).toHaveLength(24);
  });

  it("should render loader when schedule is not loaded", async () => {
    render(<Schedule schedules={null} />);

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });
});
