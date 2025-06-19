import React, { useEffect, useState } from 'react';
import './App.css';
import heroImage from './logo.jpg'; // adjust as needed

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="Volunteer For India" />
        </div>
        <ul className="nav-links">
          <li>About</li>
          <li>Volship Fellowship</li>
          <li>Get Involved</li>
          <li>Stories</li>
        </ul>
      </nav>
          <main className="hero-section">
        <img
          src={heroImage}
          alt="Hero"
          className={`zoom-in-image ${loaded ? 'animate' : ''}`}
        />
      </main>

      {/* Scrollable Sections */}
      <section className="content-section">
        <h2>About Us</h2>
        <p>We empower volunteers to bring real change in society.</p>
      </section>

      <section className="content-section dark">
        <h2>Get Involved</h2>
        <p>Join hands with our movement across India.</p>
      </section>

      <section className="content-section">
        <h2>Stories</h2>
        <p>Explore inspiring journeys from our volunteers.</p>
      </section>
    </div>
  );
}

export default App;
