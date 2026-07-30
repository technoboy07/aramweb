import React, { useState, useEffect, useRef } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import MapSection from './components/MapSection';
import heroImg1 from './components/assets/images/20240706164225_IMG_9221.JPG';
import heroImg2 from './components/assets/images/20240706165508_IMG_9240.JPG';
import heroImg3 from './components/assets/images/20240706175646__MG_9305.JPG';
import heroImg4 from './components/assets/images/_MG_6099.JPG';
import heroImg5 from './components/assets/images/IMG_2091.JPG';
import './App.css';

const carouselImages = [
  { url: heroImg1, alt: 'ASFT community programme' },
  { url: heroImg2, alt: 'ASFT youth gathering' },
  { url: heroImg3, alt: 'ASFT outdoor activity' },
  { url: heroImg4, alt: 'ASFT volunteers in action' },
  { url: heroImg5, alt: 'ASFT community event' },
];

const stats = [
  { value: 3400, label: 'Youth Trained', suffix: '+' },
  { value: 48, label: 'Communities Reached', suffix: '' },
  { value: 12, label: 'Active Programs', suffix: '' },
  { value: 9, label: 'Years of Impact', suffix: '' },
];

const allPrograms = [
  {
    id: 'ce1',
    category: 'Community Engagement',
    title: 'Neighbourhood Connect',
    icon: '🤝',
    desc: 'Building bridges between youth and local leaders through structured dialogue, mentorship, and community projects that create lasting civic bonds.',
    color: '#0d5260',
  },
  {
    id: 'ce2',
    category: 'Community Engagement',
    title: 'Urban Green Initiative',
    icon: '🌿',
    desc: 'Youth-led environmental clean-up drives, urban gardening, and sustainability workshops that revitalize shared spaces.',
    color: '#0d5260',
  },
  {
    id: 'tp1',
    category: 'Training Programs',
    title: 'Digital Skills Academy',
    icon: '💻',
    desc: 'Hands-on coding, graphic design, and digital literacy sessions tailored for underserved youth aged 14–24.',
    color: '#e85d4a',
  },
  {
    id: 'tp2',
    category: 'Training Programs',
    title: 'Leadership Bootcamp',
    icon: '🎯',
    desc: 'Six-week intensive that develops communication, conflict resolution, and project management skills through real community challenges.',
    color: '#e85d4a',
  },
  {
    id: 'oe1',
    category: 'Outdoor Education',
    title: 'Trail & Summit',
    icon: '⛰️',
    desc: 'Multi-day hiking and camping expeditions designed to foster resilience, teamwork, and a deep connection to nature.',
    color: '#c99a5f',
  },
  {
    id: 'oe2',
    category: 'Outdoor Education',
    title: 'River & Roots',
    icon: '🛶',
    desc: 'Water-based adventures combined with ecological learning — kayaking, fishing, and conservation fieldwork along local waterways.',
    color: '#c99a5f',
  },
];

const timeline = [
  { year: '2015', title: 'Founded', desc: 'ASFT was established in Auckland with a single youth skills workshop attended by 24 young people.' },
  { year: '2017', title: 'First Grant', desc: 'Received our first government grant, allowing us to launch the Leadership Bootcamp and hire two full-time staff.' },
  { year: '2019', title: '500 Youth Trained', desc: 'Crossed a landmark milestone — 500 young people trained across three regions.' },
  { year: '2021', title: 'Outdoor Education Launch', desc: 'Expanded into outdoor education, partnering with DOC for the inaugural Trail & Summit programme.' },
  { year: '2023', title: 'National Recognition', desc: 'Awarded the Community Impact Award by the New Zealand Nonprofit Alliance.' },
  { year: '2025', title: '3,400+ Lives Changed', desc: 'Today we operate 12 programmes, serve 48 communities, and are growing to reach every corner of Aotearoa.' },
];

const teamMembers = [
  {
    name: 'Aroha Ngata',
    role: 'Executive Director',
    bio: 'Aroha brings 15 years in community development and is passionate about equitable opportunities for Māori and Pasifika youth.',
    img: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=400&fit=crop&auto=format',
    initials: 'AN',
  },
  {
    name: 'James Tuilagi',
    role: 'Programs Lead',
    bio: 'James designs and delivers every major programme, drawing on a background in outdoor education and youth psychology.',
    img: 'https://images.unsplash.com/photo-1594913543505-e4fdd1d021e4?w=400&h=400&fit=crop&auto=format',
    initials: 'JT',
  },
  {
    name: 'Mei Lin Chen',
    role: 'Community Partnerships',
    bio: 'Mei builds the relationships that sustain our work — with iwi, local councils, businesses, and international funders.',
    img: 'https://images.unsplash.com/photo-1498661694102-0a3793edbe74?w=400&h=400&fit=crop&auto=format',
    initials: 'ML',
  },
  {
    name: 'Samuel Osei',
    role: 'Digital Skills Trainer',
    bio: 'Samuel is a self-taught developer who now teaches young people the skills that changed his own life.',
    img: 'https://images.unsplash.com/photo-1609253932702-796cbf3d3171?w=400&h=400&fit=crop&auto=format',
    initials: 'SO',
  },
];

const volunteerReasons = [
  { icon: '🌱', title: 'Real Impact', desc: 'Every hour you give translates directly into a skill learned, a connection made, or a life changed.' },
  { icon: '🤲', title: 'Inclusive Community', desc: 'We celebrate all backgrounds. Our volunteers come from every walk of life — and that diversity is our strength.' },
  { icon: '📚', title: 'Learn & Grow', desc: 'Gain facilitation, leadership, and programme delivery skills you cannot find in a classroom.' },
  { icon: '🌏', title: 'Nationwide Network', desc: 'Connect with passionate people working across 48 communities and growing.' },
  { icon: '🎉', title: 'Celebrate Together', desc: 'From youth graduations to trail summits — we celebrate every win as a team.' },
  { icon: '💬', title: 'Voice That Matters', desc: 'Volunteer input shapes our programmes. You are a co-creator, not just a helper.' },
];

const testimonials = [
  {
    quote: "Volunteering with ASFT changed how I see my role in this community. I came for a day and stayed for three years.",
    name: 'Tama Waititi',
    role: 'Volunteer, Trail & Summit',
    img: 'https://images.unsplash.com/photo-1758599668178-d9716bbda9d5?w=120&h=120&fit=crop&auto=format',
  },
  {
    quote: 'The Leadership Bootcamp gave me confidence I never knew I had. I now run workshops of my own.',
    name: 'Priya Sharma',
    role: 'Programme Graduate, 2022',
    img: 'https://images.unsplash.com/photo-1758599669199-a858720a9689?w=120&h=120&fit=crop&auto=format',
  },
  {
    quote: "ASFT doesn't just talk about community — they build it every single day. Proud to be part of this whānau.",
    name: 'Marcus Faleolo',
    role: 'Community Partner',
    img: 'https://images.unsplash.com/photo-1758599667717-27c61bcdd14b?w=120&h=120&fit=crop&auto=format',
  },
];

const categories = ['All', 'Community Engagement', 'Training Programs', 'Outdoor Education'];

function useScrollVisible(ref, threshold = 0.15) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return undefined;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return visible;
}

function useCountUp(target, visible) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!visible) return undefined;
    const duration = 1800;
    const step = 16;
    const increments = Math.ceil(duration / step);
    let frame = 0;
    const timer = setInterval(() => {
      frame += 1;
      const progress = frame / increments;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (frame >= increments) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [visible, target]);
  return count;
}

function StatItem({ value, label, suffix, visible }) {
  const count = useCountUp(value, visible);
  return (
    <div className="stat-item">
      <div className="stat-value">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function TimelineSection() {
  const itemRefs = useRef([]);
  const [visibleItems, setVisibleItems] = useState(() => new Array(timeline.length).fill(false));

  useEffect(() => {
    const observers = [];
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => {
              const next = [...prev];
              next[i] = true;
              return next;
            });
            obs.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="section section-cream">
      <div className="section-inner-narrow">
        <div className="section-header" style={{ marginBottom: 64 }}>
          <span className="pill pill-coral">Our Journey</span>
          <h2>A decade of showing up</h2>
        </div>

        <div className="timeline-wrap">
          <div className="timeline-line" />
          <div className="timeline-list">
            {timeline.map((item, i) => {
              const isEven = i % 2 === 0;
              const yearClass = isEven ? 'teal' : 'coral';
              const cardClass = isEven ? 'teal' : 'coral';
              return (
                <div
                  key={item.year}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  className={`timeline-item${visibleItems[i] ? ' visible' : ''}`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  {isEven ? (
                    <>
                      <div className="timeline-left">
                        <div className={`timeline-card ${cardClass}`}>
                          <h3>{item.title}</h3>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                      <div className="timeline-node">
                        <div className={`timeline-year ${yearClass}`}>{item.year}</div>
                      </div>
                      <div className="timeline-spacer" />
                    </>
                  ) : (
                    <>
                      <div className="timeline-spacer" />
                      <div className="timeline-node">
                        <div className={`timeline-year ${yearClass}`}>{item.year}</div>
                      </div>
                      <div className="timeline-right">
                        <div className={`timeline-card ${cardClass}`}>
                          <h3>{item.title}</h3>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  const [navSolid, setNavSolid] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const statsRef = useRef(null);
  const statsVisible = useScrollVisible(statsRef);
  const aboutRef = useRef(null);
  const aboutVisible = useScrollVisible(aboutRef);
  const programsRef = useRef(null);
  const programsVisible = useScrollVisible(programsRef);
  const teamRef = useRef(null);
  const teamVisible = useScrollVisible(teamRef);
  const volRef = useRef(null);
  const volVisible = useScrollVisible(volRef);

  useEffect(() => {
    const t = setInterval(() => setTestimonialIdx((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const handler = () => setNavSolid(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const filteredPrograms =
    activeCategory === 'All'
      ? allPrograms
      : allPrograms.filter((p) => p.category === activeCategory);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We'll be in touch.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="app-shell">
      <nav className={`site-nav${navSolid ? ' solid' : ''}`}>
        <button type="button" className="nav-brand" onClick={() => scrollTo('hero')}>
          <div className="nav-brand-mark">A</div>
          <div>
            <div className="nav-brand-title">ASFT</div>
            <div className="nav-brand-sub">Family Trust</div>
          </div>
        </button>

        <div className="nav-links">
          {[
            ['About', 'about'],
            ['Programs', 'programs'],
            ['Volunteer', 'volunteer'],
            ['Our Reach', 'map'],
          ].map(([label, id]) => (
            <button key={id} type="button" className="nav-link" onClick={() => scrollTo(id)}>
              {label}
            </button>
          ))}
          <button type="button" className="btn-donate" onClick={() => scrollTo('contact')}>
            Donate
          </button>
        </div>
      </nav>

      <section id="hero" className="hero">
        {carouselImages.map((img) => (
          <div key={img.url} className="carousel-slide">
            <img src={img.url} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        ))}
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="pill pill-hero">Aram Saeivom Family Trust</span>
          <h1>
            Empowering youth to
            <br />
            <em>build their own future</em>
          </h1>
          <p>
            We partner with young people and communities across Aotearoa to build skills, grow
            leaders, and create belonging.
          </p>
          <div className="hero-ctas">
            <button type="button" className="btn-primary" onClick={() => scrollTo('contact')}>
              Donate Now
            </button>
            <button type="button" className="btn-ghost" onClick={() => scrollTo('volunteer')}>
              Volunteer With Us
            </button>
          </div>
        </div>
        <div className="scroll-cue">
          <div className="scroll-cue-line" />
          <span>Scroll</span>
        </div>
      </section>

      <div ref={statsRef} className="stats-bar">
        <div className="stats-grid">
          {stats.map((s) => (
            <StatItem
              key={s.label}
              value={s.value}
              label={s.label}
              suffix={s.suffix}
              visible={statsVisible}
            />
          ))}
        </div>
      </div>

      <section id="about" className="section section-white">
        <div ref={aboutRef} className={`section-inner fade-up${aboutVisible ? ' visible' : ''}`}>
          <div className="about-grid">
            <div className="about-copy">
              <span className="pill pill-teal-soft">About ASFT</span>
              <h2>
                Rooted in community,
                <br />
                growing together
              </h2>
              <p>
                The Aram Saeivom Family Trust (ASFT) is a registered charity dedicated to unlocking
                the potential of young New Zealanders through transformative programmes, meaningful
                connections, and bold outdoor experiences.
              </p>
              <p>
                We believe every young person deserves a fair shot — regardless of where they come
                from. For nearly a decade we have stood alongside youth, whanau, and communities to
                make that belief real.
              </p>
            </div>

            <div className="vision-stack">
              <div className="vision-card teal">
                <div className="icon">🔭</div>
                <h3>Our Vision</h3>
                <p>
                  A New Zealand where every young person is empowered to lead, contribute, and
                  thrive — in their community and beyond.
                </p>
              </div>
              <div className="vision-card coral">
                <div className="icon">🧭</div>
                <h3>Our Mission</h3>
                <p>
                  To provide transformative skills-based programmes, mentorship, and outdoor
                  experiences that build confident, connected young leaders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TimelineSection />

      <section id="programs" className="section section-white">
        <div ref={programsRef} className="section-inner">
          <div className={`section-header fade-up${programsVisible ? ' visible' : ''}`}>
            <span className="pill pill-coral-soft">What We Do</span>
            <h2>Our Programmes</h2>
            <p>
              Three pillars, one purpose — building the skills and connections young people need to
              lead.
            </p>
          </div>

          <div className="filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-tab${activeCategory === cat ? ' active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="programs-grid">
            {filteredPrograms.map((prog) => (
              <div key={prog.id} className="program-card">
                <div className="program-card-accent" style={{ background: prog.color }} />
                <div className="icon">{prog.icon}</div>
                <div className="category" style={{ color: prog.color }}>
                  {prog.category}
                </div>
                <h3>{prog.title}</h3>
                <div className="card-desc">
                  <p>{prog.desc}</p>
                  <a href="#programs" style={{ color: prog.color }}>
                    Learn More <span style={{ fontSize: '1.1rem' }}>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div ref={teamRef} className="section-inner">
          <div className={`section-header fade-up${teamVisible ? ' visible' : ''}`} style={{ marginBottom: 56 }}>
            <span className="pill pill-teal-soft">The People</span>
            <h2>Meet the Team</h2>
            <p>Hover over a card to learn more about each team member.</p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, i) => (
              <div key={member.name} className="team-card">
                <div className="team-card-inner">
                  <div className="team-card-front">
                    <img src={member.img} alt={member.name} />
                    <div className="meta">
                      <div className="name">{member.name}</div>
                      <div className="role">{member.role}</div>
                    </div>
                  </div>
                  <div className={`team-card-back ${i % 2 === 0 ? 'teal' : 'coral'}`}>
                    <div className="team-initials">{member.initials}</div>
                    <div className="name">{member.name}</div>
                    <div className="role">{member.role}</div>
                    <p>{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="volunteer" className="volunteer-section">
        <div ref={volRef} className="section-inner">
          <div className={`section-header fade-up${volVisible ? ' visible' : ''}`} style={{ marginBottom: 56 }}>
            <span className="pill pill-vol">Get Involved</span>
            <h2>Why Volunteer With Us?</h2>
            <p>More than a role — a relationship that grows with you.</p>
          </div>

          <div className="volunteer-grid">
            {volunteerReasons.map((r) => (
              <div key={r.title} className="volunteer-card">
                <div className="icon">{r.icon}</div>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>

          <div className="volunteer-cta">
            <button type="button" className="btn-primary" onClick={() => scrollTo('contact')}>
              Sign Up to Volunteer
            </button>
          </div>
        </div>
      </section>

      <MapSection />

      <section className="section section-white" style={{ overflow: 'hidden' }}>
        <div className="section-inner" style={{ maxWidth: 800, textAlign: 'center' }}>
          <span className="pill pill-coral-soft">Voices</span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              color: 'var(--teal-950)',
              lineHeight: 1.2,
              marginBottom: 52,
            }}
          >
            From the people we walk alongside
          </h2>

          <div className="testimonials">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`testimonial-slide${i === testimonialIdx ? ' active' : ''}`}
              >
                <div className="quote-mark">&ldquo;</div>
                <blockquote>{t.quote}</blockquote>
                <div className="testimonial-author">
                  <img src={t.img} alt={t.name} />
                  <div>
                    <div className="name">{t.name}</div>
                    <div className="role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <button
                key={`dot-${i}`}
                type="button"
                className={i === testimonialIdx ? 'active' : ''}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setTestimonialIdx(i)}
              />
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="site-footer">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <div className="mark">A</div>
              <div>
                <div className="title">ASFT</div>
                <div className="sub">Aram Saeivom Family Trust</div>
              </div>
            </div>
            <p className="footer-blurb">
              Building confident, connected young leaders across Aotearoa New Zealand.
            </p>
            <div className="footer-contacts">
              {[
                { icon: '📍', text: '14 Community Drive, Auckland 1010, NZ' },
                { icon: '📞', text: '+64 9 555 0194' },
                { icon: '✉️', text: 'hello@asft.org.nz' },
              ].map((item) => (
                <div key={item.text}>
                  <span style={{ fontSize: '0.95rem', marginTop: 1 }}>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            <div className="social-row">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>

          <div>
            <h3>Find Us</h3>
            <div className="footer-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.0!2d174.763!3d-36.848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDUwJzUyLjgiUyAxNzTCsDQ1JzQ2LjgiRQ!5e0!3m2!1sen!2snz!4v1000000000000"
                allowFullScreen
                loading="lazy"
                title="ASFT Location"
              />
            </div>
          </div>

          <div>
            <h3>Write to Us</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                required
              />
              <input
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                required
              />
              <textarea
                placeholder="Your message..."
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                required
              />
              <button type="submit">Send Message →</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Aram Saeivom Family Trust. All rights reserved. Registered
            Charity #CC12345.
          </p>
          <div className="footer-legal">
            {['Privacy Policy', 'Terms of Use', 'Annual Report'].map((link) => (
              <a key={link} href="#contact">
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>

      <button type="button" className="float-donate" onClick={() => scrollTo('contact')}>
        <span style={{ fontSize: '1rem' }}>❤️</span> Donate
      </button>
    </div>
  );
}

export default App;
