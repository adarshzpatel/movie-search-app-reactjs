import React from "react";

function Details({ status, premiered, network }) {
  return (
    <div className='text-lg text-gray-800 '>
      <p className='font-semibold'>
        Status : <span className='font-normal'>{status}</span>
      </p>
      
    <p className='font-semibold'>
        Premiered : <span className='font-normal'>{premiered} {network ? `on ${network.name}` : null}</span>
    </p>
    </div>
  );
}

export default Details;
