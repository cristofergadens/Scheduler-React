import { useEffect, useState } from "react";
import api from "../services/api";

export function useProfile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    api
      .get("/profile")
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
      });
  }, []);

  return profile;
}
