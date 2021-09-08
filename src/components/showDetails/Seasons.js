import React from "react";

function Seasons({ seasons }) {
  return (
    <div className='my-4'>
      <h2 className="text-xl border-b-4 max-w-max border- pb-1  mb-4 text-gray-900 font-semibold">
            Seasons & Episodes
          </h2>
      <p className='font-medium'>
        Seasons in total : <span className='font-bold text-lg'>{seasons.length}</span>
      </p>
      <p className='font-medium'>
        Episodes in total:{" "}
        <span className='font-bold text-lg'>
          {seasons.reduce((acc, season) => acc + season.episodeOrder, 0)}
        </span>
      </p>
      <div className='grid gap-2 w-full pt-4 '>
        {seasons.map((season) => (
          <div key={season.id} className='bg-gray-200 p-2 rounded-md'>
            <div className='flex gap-1 divide-y items-center'>
              <p className='text-lg font-semibold'>Season {season.number} </p> | 
              <p className='text-gray-700'>Episodes : <span>{season.number}</span></p>
            </div>
            <div className='font-medium'>
                Aired :{''}
                <span className='font-normal text-gray-700'>
                    {seasons.premiereDate} - {season.endDate}
                </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Seasons;
