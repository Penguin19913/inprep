import React, { useState } from "react";
import { assets } from "../../assets/assests";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

const SearchBar = ({ data }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState(data ? data : "");
  const brand = {
  orange: "#FE7E1D",
  off: "#F6F6F7",
  blue: "#0A2540",
  green: "#008F3F",
};
  const Button = ({ className = "", children, as = "button", ...props }) => {
    const As = as;
    return (
      <As
        className={`inline-flex items-center justify-center rounded-2xl px-5 py-2.5 text-sm font-semibold shadow-sm transition hover:shadow-md active:scale-[.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${className}`}
        {...props}
      >
        {children}
      </As>
    );
  };

  const onSearchHandler = (e) => {
    e.preventDefault();
    navigate("/course-list/" + input);
    setInput("")
  };

  return (
    <form onSubmit={onSearchHandler} className="mx-auto mt-6 flex max-w-xl items-center gap-2 rounded-2xl border border-black/10 bg-white/80 p-2 shadow">
      <Search className="ml-2 h-5 w-5 text-black/40" />
      <input
        className={`w-full rounded-2xl border border-black/10 bg-white/95 px-4 py-3 text-sm shadow-inner placeholder:text-black/40 focus:border-black/40 focus:outline-none`}

        placeholder="Search for batches, e.g., Class 8 Science"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type="text"
      />

      {/* <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type="text"
        placeholder="Search for batches, e.g., Class 8 Science"
        className="w-full h-full outline-none text-gray-500/80"
      /> */}

      <Button
        className="text-white"
        style={{ backgroundColor: brand.orange }}
        type="submit"
      >
        Search
      </Button>

      {/* <button
        type="submit"
        className="w-40 bg-blue-600 rounded text-white md:px-10 px-7 md:py-3 py-2 mx-1"
      >
        Search
      </button> */}
    </form>
  );
};

export default SearchBar;
