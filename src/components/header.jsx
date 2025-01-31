import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header className="w-full h-[100px] shadow-xl bg-blue-400 flex justify-center items-center relative">
        <img src="/logo.png" alt="Logo" className="w-[100px] h-[100px] object-cover  absolute left-3 border-[3px] rounded-full"/>
        <Link to="/" className="text-[25px] font-bold m-1">
          Home
        </Link>
        <Link to="/contact" className="text-[25px] font-bold m-4">
          Contact
        </Link>
        <Link to="/gallary" className="text-[25px] font-bold m-4">
          Gallary
        </Link>
        <Link to="/items" className="text-[25px] font-bold m-4">
          Items
        </Link>
      </header>
    </div>
  );
}
