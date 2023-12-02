import React from "react";
import { BsSearch } from "react-icons/bs";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex relative mb-5">
      <BsSearch className="absolute left-4 rounded-2xl top-4" size={24} />
      <input
        className="bg-gray-100 p-4 pl-12 w-full max-w-xl md:min-w-[500px]"
        type="text"
        name=""
        id=""
        placeholder="Search..."
        value={searchTerm || ""}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default Search;
