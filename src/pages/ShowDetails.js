import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { apiGet } from "../misc/config";

const reducer = (prevState, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS": {
      return { error: null, isLoading: false, show: action.show };
    }
    case "FETCH_FAILED": {
      return { ...prevState, error: action.error, isLoading: false };
    }
    default:
      return prevState;
  }
};

const initialState = {
  show: null,
  isLoading: true,
  error: null,
};

function ShowDetails() {
  const { id } = useParams();
  const [{show,isLoading,error},dispatch] = useReducer(reducer, initialState);
  
  useEffect(() => {

    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then((results) => {
        setTimeout(() => {
          dispatch({type: 'FETCH_SUCCESS',show:results})
        }, 2000);
      })
      .catch((err) => {
        dispatch({type: 'FETCH_FAILED',error: err.message})

      });
  }, [id]);

  if (isLoading) {
    return <div>Fetching Data...</div>;
  }

  if (error) {
    return <div>Error : {error}</div>;
  }
  return <div></div>;
}

export default ShowDetails;
