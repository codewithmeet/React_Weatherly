import axios from "axios";

export const weatherBaseAPi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});
