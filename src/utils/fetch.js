import axios from "axios";

import { BASE_URL } from "./constants";

export const fetchFromAPI = async (url) => {
  const options = {
    params: { maxResults: "50" },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
    },
  };

  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
