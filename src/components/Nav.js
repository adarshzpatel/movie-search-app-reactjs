import React from "react";
import { Link } from "react-router-dom";

const LINKS = [
  { to: "/", text: "Home" },
  { to: "/starred", text: "Starred" },
];

function Nav() {
  const currentPath = window.location.pathname;
  return (
    <nav className='w-full mb-4'>
      <ul className='flex justify-center border-gray-300 gap-4 border-b w-full '>
        {LINKS.map((item) => (
          <li key={item.text} className={`${item.to===currentPath && 'border-b-4 text-gray-800 font-medium'} text-gray-600 border-blue-600 px-2 py-1`}>
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
