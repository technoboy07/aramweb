import React, { useEffect, useState } from 'react';
import './App.css';
import heroImage from './logo.jpg'; // adjust as needed
import secondImage from './logo.png';

function App() {
  const [loaded, setLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState(''); // New state for active section

  useEffect(() => {
    setLoaded(true);

    // Optional: Add scroll event listener for active section highlighting
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Adjust offset as needed
        const sectionBottom = sectionTop + section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          {/* Consider making the logo a link to the top of the page */}
          <a href="#top">
            <img src="/logo.png" alt="Volunteer For India" />
          </a>
        </div>
        <ul className="nav-links">
          {/* Use onClick to scroll to sections and add active class */}
          <li className={activeSection === 'about' ? 'active' : ''}>
            <button onClick={() => scrollToSection('about')}>About</button>
          </li>
          {/* Assuming you'll add an ID for Volship Fellowship */}
          <li className={activeSection === 'volship-fellowship' ? 'active' : ''}>
            <button onClick={() => scrollToSection('volship-fellowship')}>Volship Fellowship</button>
          </li>
          <li className={activeSection === 'get-involved' ? 'active' : ''}>
            <button onClick={() => scrollToSection('get-involved')}>Get Involved</button>
          </li>
          <li className={activeSection === 'stories' ? 'active' : ''}>
            <button onClick={() => scrollToSection('stories')}>Stories</button>
          </li>
        </ul>
      </nav>

      <main className="hero-section" id="top"> {/* Add ID for scrolling to top */}
        <img
          src={heroImage}
          alt="Hero"
          className={`zoom-in-image ${loaded ? 'animate' : ''}`}
        />
        {/* Add a compelling headline and call to action for the hero section */}
        <div className="hero-content">
          <h1>Empowering Change Through Volunteerism</h1>
          <p>Join "Volunteer For India" and make a real impact on society.</p>
          <button className="cta-button" onClick={() => scrollToSection('get-involved')}>Get Started Today</button>
        </div>
      </main>

      {/* Scrollable Sections */}
      <section className="content-section" id="about"> {/* Add IDs to sections */}
        <h2>About Us</h2>
        <p>We empower volunteers to bring real change in society.</p>
        <img src={secondImage} alt="Second" className="section-image" /> {/* Add a class for styling */}
        <p>
          Volunteer For India is dedicated to fostering a culture of active citizenship.
          We connect passionate individuals with meaningful opportunities to contribute to
          various social causes across the nation. Our vision is a stronger, more
          compassionate India, built by the collective efforts of its citizens.
        </p>
      </section>

      <section className="content-section dark" id="volship-fellowship"> {/* New section for Volship */}
        <h2>Volship Fellowship</h2>
        <p>
          Our flagship Volship Fellowship program offers a unique opportunity for
          dedicated individuals to immerse themselves in high-impact projects.
          Gain valuable experience, develop leadership skills, and create lasting change.
        </p>
        {/* Consider adding a button here to learn more about the fellowship */}
        <button className="cta-button">Learn More</button>
      </section>

      <section className="content-section dark" id="get-involved">
        <h2>Get Involved</h2>
        <p>Join hands with our movement across India.</p>
        <div className="involvement-options">
          <div className="option-card">
            <h3>Become a Volunteer</h3>
            <p>Contribute your time and skills to a cause you care about.</p>
            <button className="cta-button-small">Apply Now</button>
          </div>
          <div className="option-card">
            <h3>Start a Chapter</h3>
            <p>Lead the movement in your local community.</p>
            <button className="cta-button-small">Learn How</button>
          </div>
          <div className="option-card">
            <h3>Donate</h3>
            <p>Support our initiatives and help us grow our impact.</p>
            <button className="cta-button-small">Donate Now</button>
          </div>
        </div>
      </section>

      <section className="content-section" id="stories">
        <h2>Stories</h2>
        <p>Explore inspiring journeys from our volunteers.</p>
        {/* Placeholder for actual story cards/carousel */}
        <div className="story-grid">
          <div className="story-card">
            <h3>From Local to National Impact</h3>
            <p>Read about Priya's journey empowering rural communities.</p>
          </div>
          <div className="story-card">
            <h3>Building a Greener Future</h3>
            <p>Discover how our volunteers transformed urban spaces.</p>
          </div>
        </div>
        {/* Consider a "View All Stories" button */}
        <button className="cta-button">View All Stories</button>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Volunteer For India. All rights reserved.</p>
        <div className="social-links">
          {/* Add social media icons/links */}
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

export default App;