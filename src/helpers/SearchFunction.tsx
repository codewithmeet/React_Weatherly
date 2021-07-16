import { weatherBaseAPi } from "../service/AxiosInstance";

export const SearchWeather = async (search: string) => {
  const apiKey: string = "81446ca99c371e56c1fd4fb147955902";
  const response = await weatherBaseAPi.post(
    `/weather?q=${search}&appid=${apiKey}`
  );
  return response.data;
};
