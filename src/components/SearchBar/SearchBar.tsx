import { useContext, useState } from "react";
import "./SearchBar.css";
import { GiModernCity } from "react-icons/gi";
import { AiOutlineEnter } from "react-icons/ai";
import { GlobalContext } from "../../context/GlobalContext";

const SearchBar = () => {
  const { searchHandler, searchQuery } = useContext(GlobalContext);

  return (
    <form
      autoComplete="off"
      autoCapitalize="sentences"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="App__InputContainer">
        <span>
          <GiModernCity />
        </span>
        <input
          type="text"
          placeholder="Enter Your City..."
          onChange={(e) => searchHandler(e.target.value)}
          value={searchQuery}
        />
        <span>Live Search</span>
      </div>
    </form>
  );
};

export default SearchBar;
