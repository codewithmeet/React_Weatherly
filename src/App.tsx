import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import { GlobalContext } from "./context/GlobalContext";
import { SearchWeather } from "./helpers/SearchFunction";
import useDebounce from "./hooks/useDebounce";
import { PacmanLoader } from "react-spinners";

function App() {
  const { setData, searchQuery, data, intialState } = useContext(GlobalContext);
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm: string = useDebounce<string>(searchQuery, 1100);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      SearchWeather(debouncedSearchTerm).then((results) => {
        setIsSearching(false);
        setData(results);
      });
    } else {
      setIsSearching(true);
      setData(intialState);
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* Search Bar */}
      <SearchBar />
      {/* Weather Card */}
      {typeof data.name !== "undefined" && isSearching === false ? (
        <WeatherCard />
      ) : (
        <div className="App__Loader">
          <h4>Looks like we search for 404 city!😁</h4>
          <PacmanLoader color="#fff" />
        </div>
      )}
    </div>
  );
}

export default App;
