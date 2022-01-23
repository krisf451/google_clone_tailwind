import React, { createContext, useContext, useState } from "react";
import axios from "axios";
const ResultContext = createContext();

const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (type) => {
    setIsLoading(true);

    const res = await axios.get(`${baseUrl}${type}`, {
      headers: {
        "x-rapidapi-host": "google-search1.p.rapidapi.com",
        "x-rapidapi-key": "90646c5694mshe72d0ccf61a2548p137719jsn21c47dd5f3f3",
      },
    });

    setResults(res);
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
