import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header className="w-full h-[100px] shadow-xl bg-blue-400 flex justify-center items-center relative">
        <img src="/logo.png" alt="Logo" className="w-[90px] h-[90px] object-cover  absolute left-4 border-[3px] rounded-full"/>
        <Link to="/" className="m-1 text-xl font-bold">
          Home
        </Link>
        <Link to="/contact" className="m-5 text-xl font-bold">
          Contact
        </Link>
        <Link to="/gallary" className="m-5 text-xl font-bold">
          Gallary
        </Link>
        <Link to="/items" className="m-5 text-xl font-bold">
          Items
        </Link>
      </header>
    </div>
  );
}
