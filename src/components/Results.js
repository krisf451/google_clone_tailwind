import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

import { useResultContext } from "../contexts/ResultContextProvider";
import Loading from "./Loading";

const Results = () => {
  const { getResults, results, searchTerm, isLoading } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    getResults("/search/q=JavaScript Mastery&num=40");
  }, []);

  if (isLoading) return <Loading />;

  console.log(location.pathname);

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {/* {results?.results?.map(({link, title}) => (
            
          ))} */}
        </div>
      );
    case "/videos":
      return "VIDEOS";
    case "/news":
      return "NEWS";
    case "/images":
      return "IMAGES";
    default:
      return "ERROR";
  }
};

export default Results;
