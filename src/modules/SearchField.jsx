
import React, { useState } from "react";
import { icons } from "../constants";
import { CustomButton } from "../UI";

const SearchField = () => {
  const [query, setQuery] = useState("");
  
  const inputHandler = (e) => {
      const lowerCase = e.target.value.toLowerCase();
      setQuery(lowerCase);  // Теперь корректно обновляет query
  };

  const clear = () => {
      setQuery("");
  }

  return (
      <div className="flex items-center my-8 justify-center">
      <div className={`relative w-full max-w-[800px] h-16 bg-[#f2f2f2] rounded-full flex items-center px-6 `}>
      <img
      className={`w-6 h-6 mr-4`}
      src={icons.search} // Assuming the search icon is an SVG
      alt="Search"
    />
    
      <input className="w-full h-full focus:outline-0 bg-[#f2f2f2] text-black font-bold text-base" placeholder="Type something to search..." onChange={inputHandler} value={query} />
      <img
      className={`w-6 h-6 ml-auto cursor-pointer`}
      src={icons.clear} // Assuming the close icon is an SVG
      alt="Clear"
      onClick={clear}
      
    />
      </div>
      <div className="ml-10 items-center">
      <CustomButton title="Search" containerStyles="w-[110px] h-[54px] !bg-[#055532]" textStyles="text-white text-[16px]"/>
      </div>
      </div>
  );
};

export default SearchField;


