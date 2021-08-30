import React from "react";
import ShowCard from "./ShowCard";
import { useShows } from "../../misc/customHook";

function ShowGrid({ data }) {
  const [starredShows, dispatchStarred] = useShows();
  return (
    <div className="grid p-4 gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map(({ show }) => {
        const isStarred = starredShows.includes(show.id);
        const onStarClick = ()=>{
            if(isStarred){
                dispatchStarred({type:'REMOVE',showId:show.id})
            } else {
                dispatchStarred({type:'ADD',showId:show.id})
            }
        }
        return (
          <ShowCard
            key={show.id}
            id={show.id}
            image={show.image ? show.image.medium : ""}
            name={show.name}
            summary={show.summary}
            isStarred={isStarred}
            onStarClick={onStarClick}
          />
        );
      })}
    </div>
  );
}

export default ShowGrid;
