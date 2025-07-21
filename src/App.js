import React, { useEffect, useState } from 'react';
import './App.css';

// Component Imports
import MapSection from './components/MapSection'; // NEW: Import the map component

// Asset Imports
import heroImage from './logo.jpg';
import secondImage from './logo.png';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function App() {
  const [loaded, setLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Effect for page load and scroll spying
  useEffect(() => {
    setLoaded(true);

    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentSection = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 150; // Offset for navbar height
        if (window.scrollY >= sectionTop) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Effect for scroll-triggered fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    const sections = document.querySelectorAll('.section-hidden');
    sections.forEach((section) => observer.observe(section));

    // Cleanup observer on component unmount
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Function for smooth scrolling
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
          <a href="#top" onClick={() => scrollToSection('top')}>
            <img src="/logo.png" alt="Volunteer For India" />
          </a>
        </div>
        <ul className="nav-links">
          <li className={activeSection === 'about' ? 'active' : ''}>
            <button onClick={() => scrollToSection('about')}>About</button>
          </li>
          <li className={activeSection === 'volship-fellowship' ? 'active' : ''}>
            <button onClick={() => scrollToSection('volship-fellowship')}>Volship Fellowship</button>
          </li>
          <li className={activeSection === 'get-involved' ? 'active' : ''}>
            <button onClick={() => scrollToSection('get-involved')}>Get Involved</button>
          </li>
          <li className={activeSection === 'stories' ? 'active' : ''}>
            <button onClick={() => scrollToSection('stories')}>Stories</button>
          </li>
          {/* NEW: Map navigation link */}
          <li className={activeSection === 'map' ? 'active' : ''}>
            <button onClick={() => scrollToSection('map')}>Our Reach</button>
          </li>
        </ul>
      </nav>

      <main className="hero-section" id="top">
        <img
          src={heroImage}
          alt="Volunteers working together"
          className={`zoom-in-image ${loaded ? 'animate' : ''}`}
        />
        <div className="hero-content">
          <h1>Empowering Change Through Volunteerism</h1>
          <p>Join "Volunteer For India" and make a real impact on society.</p>
          <button className="cta-button" onClick={() => scrollToSection('get-involved')}>Get Started Today</button>
        </div>
      </main>

      <section className="content-section section-hidden" id="about">
        <h2>About Us</h2>
        <p>We empower volunteers to bring real change in society.</p>
        <img src={secondImage} alt="Group of volunteers" className="section-image" />
        <p>
          Volunteer For India is dedicated to fostering a culture of active citizenship.
          We connect passionate individuals with meaningful opportunities to contribute to
          various social causes across the nation. Our vision is a stronger, more
          compassionate India, built by the collective efforts of its citizens.
        </p>
      </section>

      <section className="content-section dark section-hidden" id="volship-fellowship">
        <h2>Volship Fellowship</h2>
        <p>
          Our flagship Volship Fellowship program offers a unique opportunity for
          dedicated individuals to immerse themselves in high-impact projects.
          Gain valuable experience, develop leadership skills, and create lasting change.
        </p>
        <button className="cta-button">Learn More</button>
      </section>

      <section className="content-section section-hidden" id="get-involved">
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

      <section className="content-section dark section-hidden" id="stories">
        <h2>Stories of Impact</h2>
        <p>Explore inspiring journeys from our volunteers.</p>
        <div className="story-grid">
          <div className="story-card">
            <h3>From Local to National Impact</h3>
            <p>Read about Priya's journey empowering rural communities through digital literacy programs.</p>
          </div>
          <div className="story-card">
            <h3>Building a Greener Future</h3>
            <p>Discover how our volunteers transformed neglected urban spaces into vibrant community gardens.</p>
          </div>
           <div className="story-card">
            <h3>Education for All</h3>
            <p>See how Arjun's weekend classes brought quality education to underprivileged children.</p>
          </div>
        </div>
        <button className="cta-button" style={{marginTop: '2.5rem'}}>View All Stories</button>
      </section>
      
      {/* NEW: Integrated Map Section */}
      <MapSection />

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Volunteer For India. All rights reserved.</p>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;