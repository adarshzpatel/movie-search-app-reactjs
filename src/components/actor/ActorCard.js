import React from "react";

function ActorCard({image,name,country,birthday,deathday,gender}) {
  return (
    <div className="bg-white shadow-md transition-all transform-gpu hover:scale-105 hover:shadow-2xl p-4 rounded-lg w-[300px] flex flex-col gap-2">
    {image !== ''?(<img src={image} className='rounded-lg h-[300px] object-cover' alt={name} />):(<div className='rounded-lg overflow-hidden  h-[300px] flex justify-center items-center font-medium text-xl  text-gray-400 bg-gray-300'>Image Not Found !</div>)}
    <div className='text-sm font-medium text-gray-700'>
    <h2 className='text-xl font-semibold text-blue-900 '>{name} <span className='text-gray-900 font-normal'>{gender ? ` (${gender})`:null }</span></h2>
    <p>{country ? `Country: ${country}` : 'No country known'}</p>
    {birthday? <p>Born : {birthday} </p>: null}
    <p>{deathday? `Died : ${deathday}`: 'Alive'}</p>
    </div>
  </div>
  );
}

export default ActorCard;
