'use client'

import { useState } from 'react'
import { ArrowDown, ArrowUpRight, Check, ChevronDown, Mail, Menu, X } from 'lucide-react'

const roles = [
  { role: 'Revenue Cycle Project Coordinator', company: 'Harlow Dental', dates: 'Apr 2024 — Present', status: 'Active', intake: 'Stepped into a revenue cycle team where claims moved between billing, providers, and insurance with no consistent handoff process.', action: 'Rebuilt the claims workflow end to end, managed 25+ cases weekly, and built standardized KPI reporting reviewed every week.', outcome: 'Cut A/R by 15%, tracked through monthly aging reports.', metric: '−15% A/R' },
  { role: 'Digital Content Producer', company: "Victoria’s Secret & Co.", dates: 'Nov 2023 — Apr 2024', status: 'Resolved', intake: 'Joined mid-cycle on a team running 5+ campaigns at once, with CMS version control varying by contributor.', action: 'Standardized the asset workflow and confirmed scope with cross-functional stakeholders before build work began.', outcome: 'Delivered every campaign on time with zero missed launch dates or production publishing errors.', metric: '0 missed launches' },
  { role: 'Digital Producer', company: 'Belk', dates: 'Jun 2023 — Oct 2023', status: 'Resolved', intake: 'Managed 10+ concurrent digital campaigns in JIRA and MS Project, each running on its own timeline.', action: 'Ran pre-launch QA and publishing checks while turning ambiguous requirements into clear, assignable tasks.', outcome: 'Kept 10+ campaigns on schedule with no cross-campaign delays and fewer post-launch fire drills.', metric: '10+ campaigns' },
  { role: 'Project Coordinator, Dental Operations', company: 'Charlotte Dentistry', dates: 'Nov 2022 — Jun 2023', status: 'Resolved', intake: 'Coordinated clinical and administrative teams without shared project structure; new hires learned entirely by shadowing.', action: 'Built shared project structure, documented core workflows, and became the central contact for vendors and leadership.', outcome: 'Hit every milestone on schedule and made onboarding independent of institutional memory.', metric: '100% milestones' },
  { role: 'Operations Coordinator', company: 'IllustraDENT', dates: 'Feb 2020 — Nov 2022', status: 'Resolved', intake: 'Oversaw scheduling and logistics across multiple office locations operating independently.', action: 'Standardized information logging across locations and delivered KPI reports to leadership on a consistent cadence.', outcome: 'Closed recurring data gaps and gave leadership a dependable basis for decisions.', metric: 'Multi-site system' },
  { role: 'Dental Office Coordinator', company: 'Park Avenue Smiles', dates: 'Feb 2018 — Mar 2020', status: 'Resolved', intake: 'Ran daily scheduling, billing, and insurance operations where claims were handled inconsistently by staff.', action: 'Retrained staff on current procedures and compliance standards, standardizing claim filing office-wide.', outcome: 'Cut claim rejection rates by 25%, measured against monthly claims data.', metric: '−25% rejections' },
]

const phases = [
  ['01', 'Discovery', 'Define the problem, stakeholders, constraints, and measure of success.'],
  ['02', 'Planning', 'Sequence dependencies, assign owners, and protect the critical path.'],
  ['03', 'Execution', 'Keep teams aligned with visible work, decisions, and daily blockers.'],
  ['04', 'QA Review', 'Test before launch—never trade quality for a false sense of speed.'],
  ['05', 'Launch', 'Coordinate the handoff, monitor the release, and communicate clearly.'],
  ['06', 'Post-Launch', 'Measure outcomes, document lessons, and improve the next cycle.'],
]

function Header() {
  const [open, setOpen] = useState(false)
  const links = [['Experience', 'experience'], ['Work', 'work'], ['Capabilities', 'capabilities'], ['Credentials', 'credentials']]
  return <header className="site-header">
    <a href="#top" className="monogram" aria-label="Sun Cerrae Quinones, home">SCQ<span>.</span></a>
    <nav className="desktop-nav" aria-label="Main navigation">{links.map(([label, href]) => <a key={href} href={`#${href}`}>{label}</a>)}</nav>
    <a className="header-contact" href="mailto:suncquinones@gmail.com">Let&apos;s talk <ArrowUpRight size={16}/></a>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X/> : <Menu/>}</button>
    {open && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">{links.map(([label, href]) => <a key={href} href={`#${href}`} onClick={() => setOpen(false)}>{label}</a>)}<a href="mailto:suncquinones@gmail.com">Contact</a></nav>}
  </header>
}

function Experience() {
  const [active, setActive] = useState(0)
  return <section id="experience" className="section experience-section">
    <div className="section-intro"><p className="eyebrow">Career record / 2018—Now</p><h2>Six roles.<br/><em>One operating system.</em></h2><p>I find the break in the workflow, make ownership visible, and leave behind a system that holds.</p></div>
    <div className="roles">{roles.map((item, index) => {
      const expanded = active === index
      return <article className={`role ${expanded ? 'role-active' : ''}`} key={item.company}>
        <button onClick={() => setActive(index)} aria-expanded={expanded} className="role-trigger">
          <span className="role-num">{String(index + 1).padStart(2, '0')}</span>
          <span className="role-title"><strong>{item.role}</strong><small>{item.company} · {item.dates}</small></span>
          <span className="role-metric">{item.metric}</span><ChevronDown className="chevron" size={22}/>
        </button>
        {expanded && <div className="role-detail"><div><span>Situation</span><p>{item.intake}</p></div><div><span>Action</span><p>{item.action}</p></div><div><span>Outcome</span><p>{item.outcome}</p></div></div>}
      </article>
    })}</div>
  </section>
}

function Work() {
  const [phase, setPhase] = useState(0)
  return <section id="work" className="section work-section">
    <div className="section-heading"><p className="eyebrow">Selected work / Anonymized</p><h2>Plans built for<br/><em>the real world.</em></h2></div>
    <article className="case case-dark">
      <div className="case-copy"><p className="case-index">01 / Compliance governance</p><h3>Claims compliance control framework</h3><p>A governance system for a multi-provider practice where checks previously happened only when someone noticed a problem.</p><div className="case-result"><span>Control principle</span><strong>Every exception gets an owner and a forced path to resolution.</strong></div></div>
      <div className="control-list">{[['Claims accuracy audit','Weekly','Revenue Cycle Lead'],['Credentialing status','Monthly','Compliance Officer'],['Denial trend review','Monthly','Practice Manager'],['Documentation retention','Quarterly','Compliance Officer']].map((row, i) => <div className="control-row" key={row[0]}><span>0{i+1}</span><strong>{row[0]}</strong><small>{row[1]}</small><small>{row[2]}</small></div>)}<div className="escalation"><Check size={18}/> Flag → Log → Route in 48 hrs → Document → Review</div></div>
    </article>
    <article className="case recovery-case">
      <div className="case-copy"><p className="case-index">02 / Delayed project recovery</p><h3>Recovering a three-week campaign slip</h3><p>Creative approval ran twice as long as planned and consumed the QA buffer. I protected quality, reduced scope, and rebuilt the schedule.</p><div className="decision"><span>Trade-off</span><p>Moved two non-critical enhancements to fast-follow rather than cutting QA.</p></div></div>
      <div className="recovery-visual"><div className="week-labels"><span>W1</span><span>W2</span><span>W3</span><span>W4</span><span>W5</span><span>W6</span><span>W7</span><span>W8</span></div><p>Original after slip</p><div className="bar-track"><span className="bar original">8 weeks</span></div><p>Recovery plan</p><div className="bar-track"><span className="bar recovered">6 weeks</span></div><strong>2 weeks recovered. QA protected.</strong></div>
    </article>
    <article className="case phase-case">
      <div className="case-copy"><p className="case-index">03 / Planning tool</p><h3>Project phase timeline</h3><p>Dependencies sequenced before the work starts—not after something slips. Select a phase to inspect the coordination logic.</p></div>
      <div className="phase-tool"><div className="phase-tabs" role="tablist" aria-label="Project phases">{phases.map((item, i) => <button key={item[1]} role="tab" aria-selected={phase === i} onClick={() => setPhase(i)}><span>{item[0]}</span>{item[1]}</button>)}</div><div className="phase-content" role="tabpanel"><span>{phases[phase][0]} / 06</span><h4>{phases[phase][1]}</h4><p>{phases[phase][2]}</p></div></div>
    </article>
  </section>
}

export function Portfolio() {
  return <main id="top"><Header/>
    <section className="hero">
      <div className="hero-status"><span className="pulse"/> Charlotte, NC · Open to opportunity</div>
      <h1><span>Structure for</span><span>work that <em>moves.</em></span></h1>
      <div className="hero-lower"><p>Project coordinator working at the intersection of healthcare operations, revenue cycle, and digital delivery.</p><div className="hero-actions"><a className="primary-action" href="mailto:suncquinones@gmail.com"><Mail size={18}/> Start a conversation</a><a className="text-action" href="https://cerrae.github.io/Sun-Cerrae-Quinones-Portfolio/Sun_Quinones_Resume.pdf" target="_blank" rel="noreferrer">View résumé <ArrowUpRight size={17}/></a></div></div>
      <a href="#experience" className="scroll-cue">Explore the work <ArrowDown size={17}/></a>
      <div className="proof-strip"><div><strong>8</strong><span>Years across operations</span></div><div><strong>25+</strong><span>Cases managed weekly</span></div><div><strong>15%</strong><span>A/R reduction</span></div><div><strong>0</strong><span>Missed campaign launches</span></div></div>
    </section>
    <Experience/><Work/>
    <section id="capabilities" className="section capabilities-section"><div className="section-heading"><p className="eyebrow">Capabilities / How I contribute</p><h2>Calm in the<br/><em>complexity.</em></h2></div><div className="cap-grid">{[['Revenue cycle','Claims, billing, A/R, credentialing, provider enrollment'],['Coordination','Cross-functional teams, vendors, and external stakeholders'],['Systems','JIRA, MS Project, CMS platforms, KPI reporting'],['Process','Workflow documentation, onboarding design, standardization'],['Methodology','Agile fundamentals, milestone tracking, stakeholder management'],['Technical','HTML, CSS, and SQL—enough to work with engineering, not around it']].map((cap, i) => <article key={cap[0]}><span>0{i+1}</span><h3>{cap[0]}</h3><p>{cap[1]}</p></article>)}</div></section>
    <section id="credentials" className="section credentials-section"><p className="eyebrow">Credentials / On file</p><div className="credential-list">{[['Google Project Management: Specialization','Coursera','Aug 2022'],['Agile Project Management','Coursera','Aug 2022'],['Project Management','Bryan University','Feb 2022'],['Advanced Full Stack Web Development','Bryan University','Feb 2022']].map((cert, i) => <div key={cert[0]}><span>{String(i+1).padStart(2,'0')}</span><strong>{cert[0]}</strong><small>{cert[1]}</small><small>{cert[2]}</small></div>)}</div></section>
    <footer id="contact"><p className="eyebrow">Next project / Start here</p><h2>Have a messy<br/>workflow? <em>Good.</em></h2><a className="footer-email" href="mailto:suncquinones@gmail.com">suncquinones@gmail.com <ArrowUpRight/></a><div className="footer-meta"><span>Sun Cerrae Quinones · Charlotte, NC</span><div><a href="tel:9803715532">(980) 371-5532</a><a href="https://www.linkedin.com/in/suncerrae" target="_blank" rel="noreferrer">LinkedIn</a></div><span>© {new Date().getFullYear()}</span></div></footer>
  </main>
}
