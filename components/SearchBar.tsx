import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Search query:", query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-full shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl p-2"
    >
      <MagnifyingGlassIcon className="w-6 h-6 text-gray-500" />
      <input
        type="text"
        placeholder="Search DevHub blogs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full py-2 px-4 text-gray-700 dark:text-gray-200 bg-transparent focus:outline-none"
      />
      <button type="submit" className="hidden">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
