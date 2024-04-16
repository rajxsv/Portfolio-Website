import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function SidePanel() {
  const { pathname } = useLocation();
  const [index, setIndex] = useState(() => {
    if (pathname == "/") return 0;
    else if ([pathname == "/blogs"]) return 1;
    else return 2;
  });

  return (
    <div className="flex border-b-2 w-full pt-2 gray border-emerald-800 mb-20 gap-11">
      <div className="flex ml-20 gap-10">
        <Link to={"/"} onClick={() => setIndex(0)}>
          <p
            className={`px-4 py-2 text-1xl mb-3 hover:text-emerald-400 ${
              index == 0 ? "text-emerald-400" : "text-white"
            } `}
          >
            Home
          </p>
        </Link>
        <Link to={"/projects"} onClick={() => setIndex(1)}>
          <p
            className={`px-4 py-2 text-1xl mb-3 hover:text-emerald-400 ${
              index == 1 ? "text-emerald-400" : "text-white"
            } `}
          >
            Projects
          </p>
        </Link>
        <Link to={"/blogs"} onClick={() => setIndex(2)}>
          <p
            className={`px-4 py-2 text-1xl mb-3 hover:text-emerald-400 ${
              index == 2 ? "text-emerald-400" : "text-white"
            } `}
          >
            Blogs
          </p>
        </Link>
      </div>
    </div>
  );
}
