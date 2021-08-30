import React from "react";
import { Link } from "react-router-dom";

function ShowCard({ id, image, name, summary }) {
  const summaryText = summary
    ? `${summary.split(" ").slice(0, 10).join(" ").replace(/<.+?>/g, "")}...`
    : "No Description";
  return (
    <div className="bg-white shadow-md transition-all transform-gpu hover:scale-105 hover:shadow-2xl p-4 rounded-lg w-[240px] flex flex-col gap-1 justify-between">
      {image !== ''?(<img src={image} className='rounded-lg object-cover' alt={name} />):(<div className='rounded-lg  h-[292.18px] flex justify-center items-center font-medium text-xl  text-gray-400 bg-gray-300'>Image Not Found !</div>)}
      <h2 className='text-xl font-semibold'>{name}</h2>
      <p className='text-gray-700 text-sm'>{summaryText}</p>
      <div className='flex justify-between '>
        <Link to={`/show/${id}`} className=' hover:border-b-4 transition-all font-medium border-yellow-400 text-blue-600  focus:outline-none'>View Details</Link>
        <button className='focus:outline-none'><StarOutline className='h-6 w-6'/></button>
      </div>
    </div>
  );
}

export default ShowCard;

export const StarOutline = ({...props})=>(
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLineJoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
</svg>
)

export const StarFilled = ({...props})=>(
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
</svg>
)