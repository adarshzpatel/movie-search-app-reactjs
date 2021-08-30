import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGet } from "../misc/config";

function ShowDetails() {
  const { id } = useParams();
  const [show, setShow] = useState("null");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then((results) => {
        setTimeout(()=>{

          setShow(results);
          setIsLoading(false);
        },2000);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [id]);

  if(isLoading) {
    return <div>
      Fetching Data...
    </div>;
  }

  if(error){
    return <div>
      Error : {error}
    </div>
  }
  return (
  <div>
  
  </div>);
}

export default ShowDetails;
