import React, { createContext, useContext, useState } from "react";
const ResultContext = createContext();

const baseUrl = "https://google-search1.p.rapidapi.com/google-search";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (type) => {
    setIsLoading(true);

    const res = await fetch(`${baseUrl}${baseUrl}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "google-search1.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_GOOGLE_SEARCH_API_KEY,
      },
    });

    const data = await res.json();
    console.log(data);

    setResults(data);
    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
