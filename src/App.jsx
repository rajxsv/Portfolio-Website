function App() {
  return (
    <>
      <div className="portfolio-container">
        <header className="portfolio-header">
          <h1 className="portfolio-title">Raj's Portfolio</h1>
        </header>
        <nav className="portfolio-navigation">
          <ul className="portfolio-menu">
            <li>
              <a href="https://github.com/rajxsv">Github</a>
            </li>
            <li>
              <a href="https://github.com/rajxsv">Github</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <main className="portfolio-content">
          <section id="about" className="portfolio-section">
            <h2>This is me</h2>
            <p>
              I am a Tech Stack independent software developer, I love solving
              complex DSA problems and developing robust backend infrastructure
              for fullstack web apps.I also keep a keen interest for Machine
              Learning and its integration into websites.
            </p>
          </section>
          <section id="experience">
            <h2>Experience</h2>
            <ul>
              <li>
                <h3>Software Engineer Internship</h3>
              </li>
              <p className="ml-2">Accenture</p>
            </ul>
          </section>
          <section id="skills">
            <h2>Languages/Frameworks</h2>
            <ul className="skills" >
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
          <section id="projects" className="portfolio-section">
            <h2>Projects</h2>
            <ul>
              <li>Redis Implementation Using Java</li>
              <li>DSA HUB</li>
              <li>Machine Learning project</li>
              <li>Rozgaar Bharat</li>
              <li>E-Library</li>
            </ul>
          </section>
          <section id="contact" className="portfolio-section">
            <h2>Contact</h2>
            <p>Email: rajessvee@gmail.com</p>
            <p>Phone: +91-6280239660</p>
          </section>
        </main>
        <footer className="portfolio-footer">
          <p>&copy; 2024 My Portfolio. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
