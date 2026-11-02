import './App.css'

const skills = [
  { group: '01', name: 'Core web', items: ['HTML', 'CSS', 'JavaScript'] },
  { group: '02', name: 'Framework', items: ['React'] },
]

const projects = [
  {
    number: '01',
    title: 'Calculator',
    type: 'INTERACTIVE WEB APP',
    description: 'A JavaScript calculator project, built and published on the web.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://munafridi.github.io/Calculator-in-js/',
    source: 'https://github.com/munafridi/Calculator-in-js',
    visual: 'calculator',
  },
  {
    number: '02',
    title: 'PDF Website',
    type: 'WEB PROJECT',
    description: 'A practice website project published with GitHub Pages.',
    technologies: [],
    demo: 'https://munafridi.github.io/PDF-Website//',
    source: 'https://github.com/munafridi/PDF-Website',
    visual: 'pdf',
  },
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="arrow-icon">
      <path d="M4 10h11M10 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ProjectVisual({ type }) {
  if (type === 'calculator') {
    return (
      <div className="calculator-art" aria-hidden="true">
        <div className="calc-top"><span /><span /><span /><b>CALCULATOR</b></div>
        <div className="calc-screen">123<span>.45</span></div>
        <div className="calc-pad">{['AC', '±', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '−', '1', '2', '3', '+', '0', '.', '='].map((key, index) => <i className={[3, 7, 11, 15, 18].includes(index) ? 'calc-op' : ''} key={key}>{key}</i>)}</div>
      </div>
    )
  }
  return (
    <div className="document-art" aria-hidden="true">
      <div className="document-page"><span className="pdf-mark">PDF</span><span className="document-rule" /><span className="document-rule short" /><span className="document-rule" /><span className="document-rule medium" /><span className="document-box" /></div>
      <span className="document-caption">WEB DOCUMENT</span>
    </div>
  )
}

function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <a className="brand" href="#home" aria-label="Muneeb, home"><span className="brand-symbol">M<span>.</span></span><span>Muneeb</span></a>
        <nav className="navigation" aria-label="Main navigation">
          <a href="#home">Home</a><a href="#about">About</a><a href="#skills">Skills</a><a href="#experience">Experience</a><a href="#projects">Projects</a>
        </nav>
        <a className="header-contact" href="mailto:muneebking52@gmail.com">Get in touch <ArrowIcon /></a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-side">
            <div className="portrait-card"><img src="/images/muneeb-profile.jpg" alt="Muneeb seated outdoors in the evening" /><span className="portrait-caption">MUNEEB · FRONTEND DEVELOPER</span></div>
            <a className="github-link" href="https://github.com/munafridi" target="_blank" rel="noreferrer"><span className="github-mark">GH</span> GitHub profile <span className="external-arrow">↗</span></a>
          </div>
          <div className="hero-main">
            <p className="eyebrow"><span className="availability-dot" /> FRONTEND DEVELOPER <span className="eyebrow-divider">/</span> COMPUTER SCIENCE STUDENT</p>
            <h1>Building useful<br /><span>things for the web.</span></h1>
            <p className="hero-description">Hi, I’m Muneeb. I’m a frontend developer with 2 years of experience and a BS Computer Science student, learning and building one project at a time.</p>
            <div className="hero-actions"><a className="primary-button" href="#projects">Explore my work <ArrowIcon /></a><a className="secondary-button" href="mailto:muneebking52@gmail.com">Let’s talk</a></div>
            <div className="hero-stats"><div><strong>2<span>+</span></strong><small>YEARS EXPERIENCE</small></div><div><strong>02</strong><small>FEATURED PROJECTS</small></div><div><strong>BS</strong><small>COMPUTER SCIENCE</small></div></div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-label"><span>01</span><span>ABOUT ME</span></div>
          <div className="about-body"><h2>Curious about how<br />good interfaces <em>work.</em></h2><div className="about-copy"><p>I’m a frontend developer who enjoys turning ideas into clear, responsive web experiences. I’m also studying for my BS in Computer Science.</p><p>With two years of frontend experience, I’ve been building projects, strengthening my skills, and learning through hands-on practice.</p></div></div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-label"><span>02</span><span>MY STACK</span></div>
          <div className="section-intro"><h2>Tools I use<br /><em>to build.</em></h2><p>My current frontend toolkit. I’ll add more here as I grow my skills.</p></div>
          <div className="skill-groups">{skills.map((group) => <div className="skill-group" key={group.group}><span className="skill-group-number">{group.group}</span><h3>{group.name}</h3><div className="skill-pills">{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-label"><span>03</span><span>EXPERIENCE</span></div>
          <div className="experience-content"><div><h2>Learning by<br /><em>building.</em></h2><p className="experience-intro">My frontend experience so far, alongside my Computer Science studies.</p></div><article className="experience-entry"><span className="experience-marker" /><div className="experience-entry-head"><div><span className="entry-kicker">FRONTEND DEVELOPMENT</span><h3>Frontend Developer</h3></div><span className="entry-duration">2 YEARS</span></div><p>Hands-on frontend experience building and publishing web projects while continuing my BS in Computer Science.</p><div className="experience-tags"><span>Self-directed projects</span><span>BS Computer Science student</span></div></article></div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-label"><span>04</span><span>SELECTED PROJECTS</span></div>
          <div className="projects-heading"><h2>Things I’ve<br /><em>made.</em></h2><p>Personal projects and practice work, built as I learn and grow as a frontend developer.</p></div>
          <div className="project-list">{projects.map((project) => <article className={`project-card project-${project.visual}`} key={project.number}>
            <a className={`project-visual ${project.visual}`} href={project.demo} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live demo`}><ProjectVisual type={project.visual} /></a>
            <div className="project-details"><div className="project-meta"><span>_{project.number} · {project.type}</span><span>LIVE</span></div><h3>{project.title}</h3><p>{project.description}</p>{project.technologies.length > 0 && <div className="project-tags">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>}<div className="project-links"><a href={project.demo} target="_blank" rel="noreferrer">Live website <ArrowIcon /></a><a href={project.source} target="_blank" rel="noreferrer">GitHub repository <ArrowIcon /></a></div></div>
          </article>)}</div>
        </section>

        <section className="contact-section" id="contact"><div className="contact-kicker">HAVE A PROJECT OR AN IDEA?</div><h2>Let’s make<br /><em>it happen.</em></h2><p>Reach out to talk about a project, an opportunity, or just to say hello.</p><div className="contact-actions"><a className="contact-email" href="mailto:muneebking52@gmail.com">muneebking52@gmail.com <ArrowIcon /></a><a className="contact-github" href="https://github.com/munafridi" target="_blank" rel="noreferrer">GitHub <span>↗</span></a></div></section>
      </main>

      <footer className="footer"><a className="brand" href="#home"><span className="brand-symbol">M<span>.</span></span><span>Muneeb</span></a><span>FRONTEND DEVELOPER · COMPUTER SCIENCE STUDENT</span><a href="#home">BACK TO TOP ↑</a></footer>
    </div>
  )
}

export default App
