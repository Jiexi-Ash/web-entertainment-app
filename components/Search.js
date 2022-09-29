import { useRef, useEffect } from "react";
import SearchIcon from "public/assets/icon-search.svg";

function Search({ handleSearch, placeholder }) {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(inputRef.current.value);
  };

  return (
    <div className="w-full md:max-w-[400px]">
      <form onSubmit={handleSubmit}>
        <div className="relative flex items-center ">
          <SearchIcon className="absolute top-3 left-0  text-white md:top-5 md:left-0 " />
          <input
            type="text"
            placeholder={placeholder}
            className="w-full z-30 pl-12 pr-4 py-5  text-sm text-white border-none  bg-transparent rounded-md caret-primaryRed focus:outline-none focus:ring-0 md:placeholder:text-2xl md:text-2xl"
            ref={inputRef}
          />
        </div>
      </form>
    </div>
  );
}

export default Search;
