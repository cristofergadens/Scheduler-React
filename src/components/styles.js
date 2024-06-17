import styled, { keyframes } from "styled-components";

export const CardContainer = styled.div`
  text-align: center;

  .firstSection {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 1025px) {
    width: 40%;
    text-align: left;

    .firstSection {
      display: flex;
      flex-direction: row;
      margin-top: -130px;
      align-items: flex-start;
    }

    .infos {
      margin-top: -65px;
    }
  }

  .infos {
    margin: 0 36px 0;
    max-width: 90%;

    .name {
      font-size: 26px;
      font-weight: 700;
      color: #666;
    }

    .secondLine {
      margin-top: 12px;
    }

    .role {
      text-transform: uppercase;
      color: #1c93e3;
      font-weight: 700;
      font-family: "Roboto";
      font-size: 18px;
    }

    .location {
      font-size: 17px;
    }

    .rating {
      display: flex;
      margin-top: 3px;
      align-items: center;
      gap: 5px;

      span {
        color: gray;
      }
    }

    .price {
      font-size: 22px;
      font-weight: 800;
      color: #696666;
      margin: 0;
      font-family: "Roboto";

      .per-time {
        font-size: 16px;
        color: #696666;
      }
    }
  }

  .description {
    font-size: 18px;
    font-weight: 700;
    color: #999;
    line-height: 26px;
    text-align: left;
    padding: 0 10px;

    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    max-height: 150px;
    text-overflow: ellipsis;
  }

  .profile-image {
    box-shadow: 1px 1px 10px #eee;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;

    img {
      object-fit: cover;
    }
  }
`;

export const ScheduleContainer = styled.div`
  box-shadow: 1px 1px 10px #f6f6f6;
  width: 100%;
  max-width: 90vw;
  border-radius: 16px;
  margin: 0 auto;

  @media screen and (width >= 1025px) {
    width: 50%;
    max-width: 500px;
    margin: 0;
  }

  .header {
    background-color: #2e88df;
    color: white;
    padding: 15px 0px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .title {
      font-family: "Montserrat";
    }

    .timezone {
      padding: 0;
      margin: 0;
    }
  }

  .swiper-header {
    height: 50px;
    background-color: white;

    @media screen and (max-width: 400px) {
      height: 80px;
    }

    .swiper-slide {
      background-color: white;
    }
  }

  .swiper-content {
    .swiper-wrapper {
      padding-bottom: 16px !important;
    }
  }

  .swiper-header,
  .swiper-content {
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 1px 2px 15px #aca7a7;
    position: relative;
    padding: 10px 40px 0 !important;
    overflow: hidden;
    margin-bottom: 20px;

    .day-wrapper {
      height: 50px;
      display: flex;
      flex-direction: column;
      background-color: white;
    }

    .day-of-week {
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 500;
    }

    .day-of-month {
      text-transform: uppercase;
      font-size: 18px;
      font-weight: 600 !important;
      color: #555;
    }

    .schedules-wrapper {
      margin-top: 10px;

      .time-scheduled {
        background-color: rgba(200, 210, 219, 0.5);
        height: 40px;
        border: 1px solid white;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #333;
        font-weight: 900;
        font-family: "Open sans";
        cursor: pointer;

        &:hover {
          filter: contrast(80%);
        }

        &-white {
          background-color: white;
          height: 41px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
        }
      }
    }

    .swiper-button {
      &-next,
      &-prev {
        background-color: #555 !important;
        width: 30px !important;
        height: 30px !important;
        position: absolute;
        bottom: auto;
        top: 60% !important;
        border-radius: 50%;
        cursor: pointer;

        &:after {
          font-size: 16px !important;
          color: white;
          font-weight: 800;
        }

        &:hover {
          opacity: 90%;
        }
      }
    }
  }
`;

const rotateLoader = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  width: 60px;
  height: 60px;
  background-color: transparent;
  border-radius: 50%;
  border: 12px solid red;
  border-top: 12px solid transparent;
  animation: ${rotateLoader} 1s linear infinite;
  position: fixed;
  top: 50%;
  left: 48%;
  transform: translate(-50%, -50%);
`;

export const Footer = styled.footer`
  position: relative;
  bottom: -20px;
  margin: 0 auto;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;

  .logo {
    width: 80px;
    height: 60px;
  }

  img {
    height: 100%;
    width: 100%;
  }
`;
