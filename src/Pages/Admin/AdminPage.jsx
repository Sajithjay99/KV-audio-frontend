import React from "react";
import { MdDashboard } from "react-icons/md";
import { FaBookmark } from "react-icons/fa6";
import { BsFillSpeakerFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { Link,Routes, Route } from "react-router-dom";
import AdminItemsPage from "./adminItemsPage";
import AddItemsPage from "./addItemsPage";

export default function AdminPage() {
  return (
    <div className="flex w-full h-screen">
      
      <div className="w-[220px] h-full bg-green-200">
        <button className="w-full h-[40px] text-xl font-semibold  flex justify-center items-center">
          <MdDashboard />
          Dashboard
        </ button>

        <Link to="/admin/bookings" className="w-full h-[40px] text-xl font-semibold flex justify-center items-center">
          <FaBookmark />
          Bookings
        </Link>

        <Link to="/admin/items" className="w-full h-[40px] text-xl font-semibold flex justify-center items-center">
          <BsFillSpeakerFill />
          Items
        </Link>

        <Link to="/admin/users" className="w-full h-[40px] text-xl font-semibold flex justify-center items-center">
          <FaUserCircle />
          Users
        </Link>
      </div>

      <div className="h-full  w-[calc(100vw-220px)]">
        <Routes path="/*">
           
          <Route path="/bookings" element={<h1>Bookings</h1>} />
          <Route path="/items" element={<AdminItemsPage/>} />
          <Route path="/items/add"  element={<AddItemsPage/>} />
          <Route path="/users" element={<h1>Users</h1>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </div>
  );
}
