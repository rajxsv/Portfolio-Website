import React from "react";

export default function Main() {
  return (
    <div className="w-4/5 border border-emerald-800 rounded-xl gap-10 items-center text-white gray p-5">
      <header className="text-center items-center flex w-full h-[25rem] justify-center p-3 rounded-md">
        <h1 className="text-5xl text-emerald-400 title-font ">Raj's Portfolio</h1>
      </header>
      <nav className="text-center ">
        <ul className="list-none p-0">
          <li className="inline-block mx-5 p-1 rounded-md">
            <a href="https://github.com/rajxsv">Github</a>
          </li>
          <li className="inline-block mx-5  p-1 rounded-md">
            <a href="https://github.com/rajxsv">Github</a>
          </li>
          <li className="inline-block mx-5 p-1 rounded-md">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <section className="m-20">
        <p className="text-2xl">
          I am a Tech Stack independent software developer, I love solving
          complex DSA problems and developing robust backend infrastructure for
          fullstack web apps.I also keep a keen interest for Machine Learning
          and its integration into websites.
        </p>
      </section>
    </div>
  );
}
