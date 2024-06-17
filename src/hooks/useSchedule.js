import { useEffect, useState } from "react";
import api from "../services/api";

export function useSchedule() {
  const [schedule, setSchedule] = useState(null);

  useEffect(() => {
    api
      .get("/schedule")
      .then((response) => {
        setSchedule(response.data);
      })
      .catch((error) => {
        console.error("Error fetching schedule:", error);
      });
  }, []);

  return schedule;
}
