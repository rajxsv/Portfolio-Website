import React from "react";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";

export default function Main() {
  return (
    <div className="w-4/5 border border-emerald-800 rounded-xl gap-10 items-center text-white gray p-5">
      <header className="text-center items-center flex w-full h-[25rem] justify-center p-3 rounded-md">
        <h1 className="text-5xl text-emerald-400 title-font">
          Raj's Portfolio
        </h1>
      </header>
      <nav className="text-center ">
        <ul className="list-none p-0">
          <li className="inline-block text-3xl mx-5 p-1 rounded-md">
            <a href="https://github.com/rajxsv"><FiGithub /></a>
          </li>
          <li className="inline-block mx-5 text-3xl p-1 rounded-md">
            <a href="https://www.linkedin.com/in/rajpreet-singh-b8200a224/"><AiOutlineLinkedin /></a>
          </li>
          <li className="inline-block mx-5 p-1 text-3xl rounded-md">
            <a href="https://leetcode.com/rajxsv/"><SiLeetcode /></a>
          </li>
          <li className="inline-block mx-5 p-1 text-3xl rounded-md">
            <a href="https://codeforces.com/profile/suzzume"><SiCodeforces /></a>
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

      <section
        className="flex justify-center flex-col m-10 p-10 items-center gap-2 md:gap-9 col-reverse mb-20"
        id="skills"
      >
        <h2 className=" text-3xl shrink-0 title-font text-orange-600 mb-5 md:mb-0">
          Skills
        </h2>

        <div className="gap-6 flex flex-wrap items-center justify-center">
          <div className="flex flex-wrap h-min items-center justify-center gap-4 mb-10 content-black p-10 border-orange-600 border rounded-lg">
              <img src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" />
              <img src=" https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white" />
              <img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" />
          </div>
          <div className="flex flex-wrap h-min gap-4 mb-10 content-black p-10 border-orange-600 border rounded-lg">
              <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
              <img src=" https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
              <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" />
              <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
              <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />


              <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" />
              {/* <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=VineeTagarwaL-Code" /> */}
          </div>

          <div className="flex flex-wrap h-min gap-4 mb-10 content-black p-10 border-orange-600 border rounded-lg">
              <img src="https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot" />
              <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" />
              <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" />
              <img src=" https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
              <img src="  https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" />
            </div>

          <div className="flex flex-wrap h-min gap-4 mb-10 content-black p-10 border-orange-600 border rounded-lg">
              <img src="https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white" />
              <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" />
          </div>
          <div className="flex flex-wrap h-min gap-4 mb-10 content-black p-10 border-orange-600 border rounded-lg">
              <img src="https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD" />
              <img src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" />
              <img src="https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white" />
              <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" />
              <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" />
          </div>

          {/* <div className='flex flex-col gap-4'>
              <p className='text-secondary  py-1 px-2 bg-stone-900 rounded-lg'>Backend</p>
              
            </div>
            <div className='flex flex-col gap-4'>
              <p className='text-secondary  py-1 px-2 bg-stone-900 rounded-lg'>Cloud</p>
            
            </div>
            <div className='flex flex-col gap-4'>
              <p className='text-secondary  py-1 px-2 bg-stone-900 rounded-lg'>Devops</p>
              <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
            </div> */}
        </div>
      </section>
    </div>
  );
}
