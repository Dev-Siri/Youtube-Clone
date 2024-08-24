import axios from "axios";

import { BASE_URL } from "./constants";

export const fetchFromAPI = async <T>(url: string) => {
  const options = {
    params: { maxResults: "50" },
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
      "X-RapidAPI-Host": import.meta.env.VITE_RAPID_API_HOST,
    },
  };

  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data as T;
};
