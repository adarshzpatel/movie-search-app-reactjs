import React from "react";
import ImageNotFound from "../ImageNotFound";

function Cast({ cast }) {
  return (
    <div>
      <h2 className="text-xl border-b-4 mb-4 pb-1 max-w-min text-gray-900 font-semibold">
        Casts
      </h2>

      <div className="grid md:grid-cols-2 gap-2 ">
        {cast.map(({ person, character, voice }, key) => (
          <div
            key={key}
            className="flex  items-center gap-2 rounded-md bg-gray-200 p-2 text-lg text-gray-600"
          >
            {person.image ? (
              <img
                src={person.image.medium}
                className="rounded-md h-16 w-16 object-center object-cover "
                alt="cast person"
              />
            ) : (
              <ImageNotFound />
            )}

            <span>
              {person.name} as{" "}
              <span className="text-gray-800 font-semibold">
                {character.name} {voice ? "| Voice " : ""}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cast;
