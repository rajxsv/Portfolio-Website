import React from "react";
import { Link } from "react-router-dom";

export default function SidePanel() {
  return (
    <div className="w-full text-white h-svh flex flex-col max-w-[20rem]">
      <div>
        <img
          className="max-w-[10rem] mt-10 max-h-[10rem]"
          src="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww"
        ></img>
        <div className="mt-10">
          <p>Studied at NIT JALANDHAR</p>
          <p>From Punjab</p>
        </div>
      </div>
      <div className="mt-20 max-w-[15rem] flex flex-col">
        <Link to={"/"}>
          <p className="px-4 py-2 text-1xl mb-3 bg-gray-800 rounded-md">Home</p>
        </Link>
        <Link to={"/projects"}>
          <p className="px-4 py-2 text-1xl mb-3 bg-gray-800 rounded-md">
            Projects
          </p>
        </Link>
        <Link to={"/blogs"}>
          <p className="px-4 py-2 text-1xl mb-3 bg-gray-800 rounded-md">
            Blogs
          </p>
        </Link>
        <Link to={"/interview-experiences"}>
          <p className="px-4 py-2 text-1xl mb-3 bg-gray-800 rounded-md">
            Interview Experiences
          </p>
        </Link>
      </div>
      <div className="h-full mt-10 flex flex-col justify-center">
        <h2>Whats Latest</h2>
        <div className="h-full ">
        <p>Blog Posted on new tech</p>
        </div>
      </div>
      <footer className="text-center fixed mb-10 bottom-0">
        <p>Made with ❤️ by Rajpreet Singh</p>
      </footer>
    </div>
  );
}
