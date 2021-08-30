import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import Cast from "../components/showDetails/Cast";
import Details from "../components/showDetails/Details";
import MainData from "../components/showDetails/MainData";
import Seasons from "../components/showDetails/Seasons";

import { useShow } from "../misc/customHook";



function ShowDetails() {
  const { id } = useParams();
  const {show,isLoading,error} = useShow(id);

  if (isLoading) {
    return <div>Fetching Data...</div>;
  }

  if (error) {
    return <div>Error : {error}</div>;
  }

  return (
    <div>
      <div><MainData image={show.image} name={show.name} summary={show.summary} rating={show.rating} tags={show.genres}/></div>
      <div><Details status={show.status} network={show.network} premiered={show.premiered}/></div>
      <div><Seasons seasons={show._embedded.seasons}/></div>
      <div><Cast cast={show._embedded.cast}/></div>
    </div>
    )
}

export default ShowDetails;
