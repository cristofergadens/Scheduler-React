import React from "react";
import Schedule from "../components/Schedule";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
jest.mock("swiper/swiper-bundle.css");
jest.mock("swiper/css");
import "@testing-library/jest-dom";

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
  it("should render correctly", () => {
    render(<Schedule schedule={mockSchedule} />);
  });

  it("should render title and timezone correctly", async () => {
    render(<Schedule schedule={mockSchedule} />);

    expect(
      await screen.findByText("Schedule your session!")
    ).toBeInTheDocument();
    expect(
      await screen.findByText("Timezone: Lisbon (+1)")
    ).toBeInTheDocument();
  });

  it("should render days and times correctly", async () => {
    render(<Schedule schedule={mockSchedule} />);

    expect(await screen.findByText("Mon")).toBeInTheDocument();
    expect(await screen.findByText("Tue")).toBeInTheDocument();
    expect(await screen.findByText("Wed")).toBeInTheDocument();
    expect(await screen.findByText("Thu")).toBeInTheDocument();
    expect(await screen.findByText("Fri")).toBeInTheDocument();

    const timesElements = await screen.findAllByText(
      /^(08:00|08:30|09:00|09:30|10:00|MORE)$/
    );

    expect(timesElements).toHaveLength(24);
  });

  it("should render loader when schedule is not loaded", () => {
    render(<Schedule schedule={null} />);
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  it("should render different data correctly", async () => {
    const newMockSchedule = {
      timezone: "London (+0)",
      title: "New Schedule!",
      days: [
        {
          day: "AUG 24",
          day_of_week: "Saturday",
          times: ["10:00", "11:00"],
        },
        {
          day: "AUG 25",
          day_of_week: "Sunday",
          times: [],
        },
      ],
    };

    render(<Schedule schedule={newMockSchedule} />);
    await screen.findByText("New Schedule!");
    expect(screen.getByText("New Schedule!")).toBeInTheDocument();
  });

  it("should handle user interactions correctly", async () => {
    render(<Schedule schedule={mockSchedule} />);

    await waitFor(() => {
      expect(screen.getByText("AUG 19")).toBeInTheDocument();
    });

    const swiperContent = screen.getByTestId("swiper-content");
    console.log("achei o swipercontent");

    fireEvent.click(swiperContent.querySelector(".swiper-button-next"));
    fireEvent.click(swiperContent.querySelector(".swiper-button-prev"));

    await waitFor(() => {
      expect(screen.getByText("Tue")).toBeVisible();
    });
  });
});
