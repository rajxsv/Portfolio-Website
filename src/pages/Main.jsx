import React from 'react'

export default function Main() {
  return (
    <div className="w-full flex flex-col gap-3 items-center text-white bg-gray-900 max-w-4xl p-5">
      <header className="text-center mb-5 bg-gray-800 p-3 rounded-md max-w-2xl">
        <h1 className="text-2xl ">Raj's Portfolio</h1>
      </header>
      <nav className="text-center">
        <ul className="list-none p-0">
          <li className="inline-block mx-5 bg-gray-800 p-1 rounded-md">
            <a href="https://github.com/rajxsv">Github</a>
          </li>
          <li className="inline-block mx-5 bg-gray-800 p-1 rounded-md">
            <a href="https://github.com/rajxsv">Github</a>
          </li>
          <li className="inline-block mx-5 bg-gray-800 p-1 rounded-md">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <main className="mt-5">
        <section id="about" className="mb-5">
          <h2 className="bg-gray-800 p-1 rounded-md max-w-fit mb-2">This is me</h2>
          <p>
            I am a Tech Stack independent software developer, I love solving
            complex DSA problems and developing robust backend infrastructure
            for fullstack web apps.I also keep a keen interest for Machine
            Learning and its integration into websites.
          </p>
        </section>
        <section className="mb-5">
          <h2 className=" bg-gray-800 p-1 rounded-md  max-w-fit mb-2">Experience</h2>
          <ul>
            <li>
              <h3>Software Engineer Internship</h3>
            </li>
            <p className="ml-2">Accenture</p>
          </ul>
        </section>
        <section className="mb-5">
          <h2 className=" bg-gray-800 p-1 rounded-md max-w-fit mb-2">
            Languages/Frameworks
          </h2>
          <ul className="flex justify-between">
            <li>
              <ul>
                <li>C/C++</li>
                <li>JavaScript</li>
                <li>Java</li>
              </ul>
            </li>
            <li>
              <ul>
                <li>Python</li>
                <li>React</li>
                <li>Express</li>
              </ul>
            </li>
            <li>
              <ul>
                <li>Mongoose</li>
                <li>MongoDB</li>
                <li>NodeJS</li>
              </ul>
            </li>
            <li>
              <ul>
                <li>Spring</li>
                <li>ML</li>
                <li>ML</li>
              </ul>
            </li>
          </ul>
        </section>
        <section className="mb-5">
          <h2 className="bg-gray-800 p-1 rounded-md max-w-fit mb-2">Projects</h2>
          <ul>
            <li>Redis Implementation Using Java</li>
            <li>DSA HUB</li>
            <li>Machine Learning project</li>
            <li>Rozgaar Bharat</li>
            <li>E-Library</li>
          </ul>
        </section>
        <section id="contact" className="mb-5">
          <h2 className="bg-gray-800 p-1 rounded-md max-w-fit mb-2">Contact</h2>
          <p>Email: rajessvee@gmail.com</p>
          <p>Phone: +91-6280239660</p>
        </section>
      </main>
    </div>
  )
}
