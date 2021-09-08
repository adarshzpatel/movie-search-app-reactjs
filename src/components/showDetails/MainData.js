import React from "react";
import ImageNotFound from "../ImageNotFound";
import { StarFilled } from "../show/ShowCard";
import Details from "./Details";

const MainData = ({
  image,
  rating,
  summary,
  tags,
  name,
  status,
  premiered,
  network,
}) => {
  return (
    <div className=" gap-4">
      <div>
        {/* HEADING */}
        <h1 className="text-4xl border-yellow-400 pb-1 ml-0 mb-0 md:pb-2 border-b-4  font-bold   ">
          {name}
        </h1>
        {/* RATING & TAGS */}
        <div className="flex items-center gap-1 my-1 py-1 ">
          <StarFilled className="text-yellow-500  h-8" />

          <span className="font-semibold text-lg text-gray-800">
            {rating.average || "N/A"}
          </span>

          <div className="flex gap-1 ml-2">
            {tags.map((tag, i) => (
              <span
                className="text-sm md:font-base font-normal px-2  rounded-full bg-blue-500   text-white"
                key={i}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-col md:flex-row flex gap-4">
        {image ? (
          <img
            src={image.original}
            className="rounded-lg  max-w-min object-cover  h-80"
            alt="show-cover"
          />
        ) : (
          <ImageNotFound />
        )}
        <div >
          <h2 className="text-xl border-b-4 pb-1 max-w-min text-gray-900 font-semibold">
            Summary
          </h2>
          <div
            className="text-gray-700 py-1  font-normal"
            dangerouslySetInnerHTML={{ __html: summary }}
          />
          <Details status={status} network={network} premiered={premiered} />
        </div>
      </div>
    </div>
  );
};

export default MainData;
