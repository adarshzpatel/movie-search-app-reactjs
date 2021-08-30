import React from "react";
import ImageNotFound from "../ImageNotFound";

function Cast({ cast }) {
  return (
    <div>
      {cast.map(({ person, character, voice }, key) => (
        <div key={key}>
          {person.image ? (
            <img
              src={person.image.medium}
              className="rounded-lg object-cover"
              alt="cast person"
            />
          ) : (
            <ImageNotFound />
          )}

          <span>
            {person.name} | {character.name} {voice ? "| Voice " : ""}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Cast;
