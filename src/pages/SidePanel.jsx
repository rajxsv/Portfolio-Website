import React from "react";
import { Link } from "react-router-dom";

export default function SidePanel() {
  return (
    <div className="flex border-b-2 w-full pt-2 border-emerald-800 mb-20 gap-11">
      <div className="flex ml-20 gap-10" >
      <Link to={"/"}>
        <p className="px-4 py-2 text-1xl mb-3 rounded-md hover:text-emerald-400 text-white">
          Home
        </p>
      </Link>
      <Link to={"/projects"}>
        <p className="px-4 py-2 text-1xl mb-3 rounded-md hover:text-emerald-400 text-white">
          Projects
        </p>
      </Link>
      <Link to={"/blogs"}>
        <p className="px-4 py-2 text-1xl mb-3 hover:text-emerald-400 text-white">
          Blogs
        </p>
      </Link>
      </div>
    </div>
  );
}
