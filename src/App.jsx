import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Phone, MapPin, Menu, X, Search, MessageCircle,
  Code2, Layers3, Lightbulb, MonitorSmartphone, Sparkles, Terminal,
  Globe2, Zap, ExternalLink
} from 'lucide-react'

const projects = [
  {
    number: '01',
    name: 'Afu Flavours Kitchen',
    type: 'Restaurant & Hospitality',
    description: 'A polished digital experience for a food brand, designed to bring its menu, identity and customer journey together.',
    stack: ['React', 'UI Design', 'Responsive'],
    url: 'https://afu-flavors-kitchen.lovable.app/',
    tone: 'lime',
    mark: 'AF',
  },
  {
    number: '02',
    name: 'SamKonceptz Pay Hub',
    type: 'Fintech & Payments',
    description: 'A payment-focused web experience created as part of the SamKonceptz digital product ecosystem.',
    stack: ['Web App', 'Product Design', 'Frontend'],
    url: 'https://samkonceptz-pay-hub.lovable.app/',
    tone: 'blue',
    mark: '₦',
  },
  {
    number: '03',
    name: 'Richybext Little Star',
    type: 'Community & Education',
    description: 'A platform concept celebrating children’s talent, confidence and potential through registration and voting experiences.',
    stack: ['Web Design', 'Forms', 'Supabase'],
    url: 'https://samzeeezzy.github.io/richybext-little-star/',
    tone: 'purple',
    mark: '★',
  },
  {
    number: '04',
    name: 'WISE School',
    type: 'Education',
    description: 'A school website experience focused on presenting programmes, school information and key updates clearly.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://samzeeezzy.github.io/wiseschool/',
    tone: 'orange',
    mark: 'W',
  },
  {
    number: '05',
    name: 'Crystal Kizor',
    type: 'Personal Brand',
    description: 'A refined landing page for an architecture and design professional, built around a confident editorial identity.',
    stack: ['Frontend', 'Brand Experience', 'Responsive'],
    url: 'https://samzeeezzy.github.io/crystal-kizor-landing-page/',
    tone: 'cyan',
    mark: 'CK',
  },
  {
    number: '06',
    name: 'Digital Product Showcase',
    type: 'Web Experience',
    description: 'A collection of interface and web development experiments exploring modern layouts and useful interactions.',
    stack: ['UI/UX', 'Frontend', 'Prototyping'],
    url: 'https://pixel-perfect-showcase-7019.lovable.app/',
    tone: 'pink',
    mark: 'PX',
  },
]

const skills = [
  { name: 'HTML & CSS', level: 'Web foundations', icon: Code2 },
  { name: 'JavaScript', level: 'Interactive experiences', icon: Terminal },
  { name: 'React', level: 'Component-driven UI', icon: Layers3 },
  { name: 'Tailwind CSS', level: 'Modern styling', icon: Sparkles },
  { name: 'Supabase', level: 'Backend & data', icon: Globe2 },
  { name: 'Responsive design', level: 'Every screen, every size', icon: MonitorSmartphone },
]

const reveal = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

function SectionLabel({ children, number }) {
  return <div className="section-label"><span>{number}</span><span className="label-line" />{children}</div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const filteredProjects = projects.filter(project => `${project.name} ${project.type} ${project.description} ${project.stack.join(' ')}`.toLowerCase().includes(searchQuery.toLowerCase()))
  const closeMenu = () => setMenuOpen(false)

  const nav = [
    ['About', '#about'], ['Expertise', '#expertise'], ['Projects', '#projects'], ['Contact', '#contact'],
  ]

  return (
    <div className="min-h-screen overflow-hidden bg-ink text-white selection:bg-neon selection:text-ink">
      <div className="noise" />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header">
        <a href="#home" className="brand" aria-label="Samuel Ezekiel home">
          <span className="brand-symbol">S<span>.</span></span>
          <span className="brand-name">SAMUEL<span> EZEKIEL</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map(([label, href]) => <a key={label} className="nav-link" href={href}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <button className="search-toggle" onClick={() => { setSearchOpen(!searchOpen); setSearchQuery('') }} aria-label="Search projects" aria-expanded={searchOpen}><Search size={17} /></button>
          <a href="https://wa.me/2347068860965?text=Hello%20Samuel%2C%20I%20visited%20your%20portfolio." target="_blank" rel="noreferrer" className="header-whatsapp"><MessageCircle size={15} /> WHATSAPP</a>
          <a href="#contact" className="header-cta hidden md:inline-flex">LET’S TALK <ArrowUpRight size={14} /></a>
        </div>
        <button className="mobile-menu md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {searchOpen && <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="site-search">
        <Search size={17} />
        <input autoFocus value={searchQuery} onChange={event => setSearchQuery(event.target.value)} onKeyDown={event => { if (event.key === 'Escape') setSearchOpen(false); if (event.key === 'Enter') document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }} placeholder="Search projects, skills or technologies..." aria-label="Search projects" />
        <button onClick={() => { setSearchQuery(''); setSearchOpen(false) }} aria-label="Close search"><X size={17} /></button>
      </motion.div>}
      {menuOpen && <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mobile-nav md:hidden">
        {nav.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}<ArrowUpRight size={15} /></a>)}
      </motion.nav>}

      <main>
        <section id="home" className="hero-section section-wrap">
          <div className="hero-grid">
            <motion.div initial="hidden" animate="visible" variants={reveal} className="hero-copy">
              <div className="availability"><span className="pulse-dot" /> AVAILABLE FOR CREATIVE COLLABORATIONS</div>
              <p className="eyebrow">HELLO, WORLD. I'M</p>
              <h1>Samuel<br /><span className="outlined">Naanyoung</span><br /><span className="name-accent">Ezekiel<span className="period">.</span></span></h1>
              <div className="hero-bottom">
                <p className="hero-description">I build thoughtful digital experiences at the intersection of <span>technology, creativity and purpose.</span></p>
                <div className="hero-actions">
                  <a href="#projects" className="button-primary">EXPLORE MY WORK <ArrowUpRight size={16} /></a>
                  <a href="#about" className="text-link">MORE ABOUT ME <ArrowDown size={14} /></a>
                </div>
              </div>
            </motion.div>

            <motion.div className="hero-art" initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: .15 }}>
              <div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="orbit orbit-c" />
              <div className="hero-core">
                <div className="core-grid" />
                <div className="core-monogram">S<span>.</span></div>
                <div className="core-caption">DIGITAL<br />CRAFTSMAN</div>
              </div>
              <div className="float-tag tag-code"><Code2 size={14} /> CODE / CREATE</div>
              <div className="float-tag tag-idea"><Lightbulb size={14} /> IDEAS → IMPACT</div>
              <div className="float-cross cross-one">+</div><div className="float-cross cross-two">+</div>
              <div className="art-coordinate">09°04' N<br />08°40' E</div>
              <div className="art-index">FIG. 001 — THE MAKER</div>
            </motion.div>
          </div>
          <div className="hero-meta"><span>BASED IN NIGERIA · BUILDING FOR EVERYWHERE</span><span>SCROLL TO EXPLORE <ArrowDown size={13} /></span></div>
        </section>

        <section id="about" className="section-wrap content-section">
          <SectionLabel number="01">A LITTLE ABOUT ME</SectionLabel>
          <div className="about-grid">
            <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>Curiosity<br />made me a<br /><span className="green-text">creator.</span></motion.h2>
            <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="about-copy">
              <p className="large-copy">I’m Samuel Naanyoung Ezekiel — a technology enthusiast, frontend developer and entrepreneur passionate about turning ideas into useful digital products.</p>
              <p>My journey is driven by a simple belief: technology should do more than look impressive. It should solve problems, connect people and create opportunities. I enjoy exploring how design and code can work together to make that happen.</p>
              <p>Alongside my individual work, I lead <strong>SamKonceptz Enterprise</strong>, where I continue to learn, build and help bring digital ideas to life.</p>
              <a href="#contact" className="inline-arrow">LET’S CREATE SOMETHING <ArrowUpRight size={16} /></a>
            </motion.div>
          </div>
          <div className="stat-strip">
            <div><strong>01</strong><span>CURIOUS MINDSET</span></div>
            <div><strong>∞</strong><span>ROOM TO LEARN</span></div>
            <div><strong>100%</strong><span>BUILT WITH PURPOSE</span></div>
          </div>
        </section>

        <section id="expertise" className="section-wrap content-section expertise-section">
          <SectionLabel number="02">WHAT I BRING</SectionLabel>
          <div className="section-heading-row">
            <h2>Ideas into<br /><span className="green-text">interfaces.</span></h2>
            <p className="section-intro">A growing toolkit for designing, developing and delivering digital experiences that feel clear, useful and memorable.</p>
          </div>
          <div className="skills-grid">
            {skills.map(({ name, level, icon: Icon }, i) => (
              <motion.div key={name} className="skill-card" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * .05 }}>
                <div className="skill-icon"><Icon size={19} /></div>
                <div><h3>{name}</h3><p>{level}</p></div>
                <ArrowUpRight className="skill-arrow" size={16} />
              </motion.div>
            ))}
          </div>
          <div className="capability-note"><Zap size={17} /><span>Always experimenting. Always improving. Always building.</span></div>
        </section>

        <section id="projects" className="section-wrap content-section projects-section">
          <SectionLabel number="03">SELECTED WORK</SectionLabel>
          <div className="section-heading-row projects-heading">
            <h2>Made with<br /><span className="green-text">intention.</span></h2>
            <p className="section-intro">A selection of projects and digital experiences from my ongoing journey of learning, building and creating.</p>
          </div>
          <div className="projects-grid">
            {filteredProjects.map((project, i) => (
              <motion.a href={project.url} target="_blank" rel="noreferrer" key={project.number} className="project-card" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: (i % 2) * .08 }}>
                <div className={`project-visual visual-${project.tone}`}>
                  <div className="visual-top"><span>PROJECT / {project.number}</span><ExternalLink size={15} /></div>
                  <div className="visual-mark">{project.mark}</div>
                  <div className="visual-orb" />
                  <div className="visual-bottom"><span>CONCEPT → EXPERIENCE</span><span>2025—26</span></div>
                </div>
                <div className="project-info">
                  <div><p className="project-type">{project.type}</p><h3>{project.name}</h3></div>
                  <span className="project-arrow"><ArrowUpRight size={19} /></span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-stack">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
              </motion.a>
            ))}
          </div>
          {filteredProjects.length === 0 && <p className="search-empty">No projects match “{searchQuery}”. Try another keyword.</p>}
          <div className="github-callout">
            <div><Github size={22} /><div><strong>More experiments on GitHub</strong><span>Follow the code, not just the screenshots.</span></div></div>
            <a href="https://github.com/Samzeeezzy" target="_blank" rel="noreferrer" className="button-outline">VISIT GITHUB <ArrowUpRight size={15} /></a>
          </div>
        </section>

        <section className="manifesto-section">
          <div className="manifesto-inner">
            <span className="manifesto-kicker">A NOTE TO THE FUTURE</span>
            <h2>“The best ideas<br />deserve to become<br /><span>real things.</span>”</h2>
            <div className="manifesto-foot"><span>THINK DEEPLY. BUILD BOLDLY.</span><Sparkles size={20} /></div>
          </div>
        </section>

        <section id="contact" className="section-wrap content-section contact-section">
          <SectionLabel number="04">HAVE AN IDEA?</SectionLabel>
          <div className="contact-layout">
            <div><h2>Let’s make<br />it <span className="green-text">happen.</span></h2><p className="contact-intro">Have a project, opportunity or interesting idea? I’d love to hear what you’re thinking.</p></div>
            <div className="contact-panel">
              <span className="contact-kicker">START A CONVERSATION</span>
              <a className="contact-email" href="mailto:sezekiel949@gmail.com">Let’s talk <ArrowUpRight size={22} /></a>
              <div className="contact-links">
                <a href="tel:+2347068860965"><Phone size={17} /> +234 706 886 0965 <ArrowUpRight size={13} /></a>
                <a href="https://wa.me/2347068860965?text=Hello%20Samuel%2C%20I%20visited%20your%20portfolio." target="_blank" rel="noreferrer" className="whatsapp-contact"><MessageCircle size={17} /> WhatsApp <ArrowUpRight size={13} /></a>
                <a href="mailto:sezekiel949@gmail.com"><Mail size={17} /> Email <ArrowUpRight size={13} /></a>
                <a href="https://github.com/Samzeeezzy" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a>
                <span className="contact-location"><MapPin size={17} /> Abuja, Nigeria</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a href="#home" className="brand"><span className="brand-symbol">S<span>.</span></span><span className="brand-name">SAMUEL<span> EZEKIEL</span></span></a>
        <span>DESIGNED WITH CURIOSITY. BUILT WITH PURPOSE.</span>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
        <small>© {new Date().getFullYear()} Samuel Naanyoung Ezekiel. All rights reserved.</small>
      </footer>
    </div>
  )
}

export default App