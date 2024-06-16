import React from 'react';
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
      day: "AUG 20",
      day_of_week: "Tuesday",
      times: ["08:00", "08:30", "09:00", "09:30", "10:00", "MORE"],
    },
  ],
};

jest.mock('swiper/react', () => {
  const React = require('react');
  const SwiperMock = ({ children, ...rest }) => (
    <div {...rest}>{children}</div>
  );
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
    expect(await screen.findByText(mockSchedule.title)).toBeInTheDocument();
  });
});
