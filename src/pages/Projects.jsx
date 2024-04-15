import React from "react";
import { projects } from "../assets/Data.json";

export default function Projects() {
  return (
    <div className="w-4/5 border border-emerald-800 rounded-xl gap-10 items-center text-white gray p-5">
      <header className="text-center items-center flex w-full h-[25rem] justify-center p-3 rounded-md">
        <h1 className="text-5xl text-emerald-400 title-font ">Projects</h1>
      </header>
      <div className="content-black h-[20rem] m-9 p-10 rounded-xl border border-emerald-600 hover:border-emerald-900 hover:cursor-pointer overflow-hidden flex flex-col">
        <h1 className="text-4xl h-1/4 title-font">title</h1>
        <p className="h-4/5 text-1xl">Description</p>
      </div>
      <div className="content-black h-[20rem] m-9 p-10 rounded-xl border hover:border-emerald-900 border-emerald-600 hover:cursor-pointer overflow-hidden flex flex-col">
        <h1 className="text-4xl h-1/4 title-font">title</h1>
        <p className="h-4/5 text-1xl">Description</p>
      </div>
      <div className="content-black h-[20rem] m-9 p-10 rounded-xl border hover:border-emerald-900 border-emerald-600 hover:cursor-pointer overflow-hidden flex flex-col">
        <h1 className="text-4xl h-1/4 title-font">title</h1>
        <p className="h-4/5 text-1xl">Description</p>
      </div>
      <div className="content-black h-[20rem] m-9 p-10 rounded-xl border border-emerald-600 hover:border-emerald-900 hover:cursor-pointer overflow-hidden flex flex-col">
        <h1 className="text-4xl h-1/4 title-font">title</h1>
        <p className="h-4/5 text-1xl">Description</p>
      </div>
    </div>
  );
}
