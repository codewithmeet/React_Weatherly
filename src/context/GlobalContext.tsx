import React, { useState } from "react";

export interface Coord {
  lon: number;
  lat: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface Clouds {
  all: number;
}

export interface Sys {
  country: string;
  sunrise: number;
  sunset: number;
}

export interface Data {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number | undefined;
  id: number | undefined;
  name: string | undefined;
  cod: number | undefined;
}

const intialState: Data = {
  coord: {
    lon: 0,
    lat: 0,
  },
  weather: [
    {
      id: 0,
      main: "",
      description: "",
      icon: "",
    },
  ],
  base: "",
  main: {
    temp: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    pressure: 0,
    humidity: 0,
    sea_level: 0,
    grnd_level: 0,
  },
  visibility: 0,
  wind: {
    speed: 0,
    deg: 0,
    gust: 0,
  },
  clouds: {
    all: 0,
  },
  dt: 0,
  sys: {
    country: "",
    sunrise: 0,
    sunset: 0,
  },
  timezone: 0,
  id: 0,
  name: "",
  cod: 0,
};

export const GlobalContext = React.createContext({
  searchQuery: "",
  intialState: intialState,
  data: intialState,
  setData: ({}: Data) => {},
  searchHandler: (e: string) => {},
});

interface Props {
  children: JSX.Element;
}

const GlobalProvider = ({ children }: Props) => {
  const [searchQuery, setSearchQuery] = useState("Keshod");

  const [data, setData] = useState<Data>(intialState);

  const searchHandler = (searchQuery: string) => {
    setSearchQuery(searchQuery);
  };

  return (
    <GlobalContext.Provider
      value={{
        searchHandler: searchHandler,
        searchQuery: searchQuery,
        data: data,
        setData: setData,
        intialState: intialState,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
