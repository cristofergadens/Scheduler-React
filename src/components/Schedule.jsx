import React, { useEffect, useState, useRef } from "react";
import api from "../services/api.js";
import { ScheduleContainer } from "./styles";
import "swiper/swiper-bundle.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Controller,
} from "swiper/modules";

const Schedule = () => {
  const [schedule, setSchedule] = useState(null);
  const swiperRef1 = useRef(null);
  const swiperRef2 = useRef(null);

  useEffect(() => {
    api.get("/schedule").then((response) => setSchedule(response.data));
  }, []);

  useEffect(() => {
    if (swiperRef1.current && swiperRef2.current) {
      swiperRef1.current.controller.control = swiperRef2.current;
      swiperRef2.current.controller.control = swiperRef1.current;
    }
  }, [swiperRef1]);

  if (!schedule) return <p>Loading...</p>;

  return (
    <ScheduleContainer>
      <div className="header">
        <h2 className="title">{schedule.title}</h2>
        <p className="timezone">Timezone: {schedule.timezone}</p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
        spaceBetween={10}
        slidesPerView={4}
        navigation
        className="swiper-header"
        onSwiper={(swiper) => (swiperRef1.current = swiper)}
      >
        {schedule.days.map((day, index) => (
          <SwiperSlide key={index}>
            <div className="day-wrapper">
              <span className="day-of-week">
                {day.day_of_week.substring(0, 3)}
              </span>
              <span className="day-of-month">{day.day}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
        spaceBetween={10}
        slidesPerView={4}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }} // Add navigation to the second swiper
        className="swiper-content"
        onSwiper={(swiper) => (swiperRef2.current = swiper)}
      >
        {schedule.days.map((day, index) => (
          <SwiperSlide key={index}>
            <div className="schedules-wrapper">
              {day.times.length > 0 ? (
                day.times.map((time, timeIndex) => (
                  <div
                    key={timeIndex}
                    className={
                      time !== " " ? "time-scheduled" : "time-scheduled-white"
                    }
                  >
                    {time !== " " ? time : " - "}
                  </div>
                ))
              ) : (
                <div className="time-scheduled">-</div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons
      <div className="swiper-button-prev">Prev</div>
      <div className="swiper-button-next">Next</div> */}
    </ScheduleContainer>
  );
};

export default Schedule;
