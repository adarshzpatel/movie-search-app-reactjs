import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import Cast from "../components/showDetails/Cast";
import Details from "../components/showDetails/Details";
import MainData from "../components/showDetails/MainData";
import Seasons from "../components/showDetails/Seasons";

import { useShow } from "../misc/customHook";

function ShowDetails() {
  const { id } = useParams();
  const { show, isLoading, error } = useShow(id);

  if (isLoading) {
    return <div>Fetching Data...</div>;
  }

  if (error) {
    return <div>Error : {error}</div>;
  }

  return (
    <div className="p-4  w-full  max-w-screen-lg mx-auto">
      <MainData
        image={show.image}
        name={show.name}
        summary={show.summary}
        rating={show.rating}
        tags={show.genres}
        status={show.status}
        network={show.network}
        premiered={show.premiered}
      />

      <Seasons seasons={show._embedded.seasons} />
      <Cast cast={show._embedded.cast} />
    </div>
  );
}

export default ShowDetails;
