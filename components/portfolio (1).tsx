'use client'

import { useState } from 'react'
import { ArrowDown, ArrowUpRight, ChevronDown, Download, Mail, MapPin, Menu, X } from 'lucide-react'

const resumeUrl = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/Sun_Cerrae_Quinones_Resume.pdf`

const roles = [
  { role: 'Revenue Cycle Project Coordinator', company: 'Harlow Dental', dates: 'July 2024 — Present', summary: 'I coordinate claims work across billing, providers, and insurance teams while maintaining weekly visibility into open cases and performance.', details: ['Reduced A/R by 15% by improving the claims workflow between billing, providers, and insurance; monitored progress through monthly aging reports', 'Manage 25+ cases weekly as one of three coordinators responsible for intake, follow-up, and resolution', 'Create standardized KPI reports for weekly leadership review, tracking credentialing and enrollment status'] },
  { role: 'Digital Content Producer', company: 'Victoria’s Secret & Co.', dates: 'Aug 2023 — July 2024', summary: 'I supported multiple digital campaigns at once, coordinating assets, scope, and publishing requirements across contributors.', details: ['Managed timelines for 5+ campaigns, coordinating with marketing, creative, and technical teams to meet launch dates', 'Standardized the CMS asset workflow for multiple contributors, helping prevent publishing errors', 'Clarified project scope and requirements with stakeholders before production to avoid confusion and rework'] },
  { role: 'Digital Producer', company: 'Belk', dates: 'Jun 2022 — July 2023', summary: 'I translated campaign requirements into clear tasks, monitored schedules, and completed pre-launch quality checks.', details: ['Coordinated 10+ concurrent campaigns using JIRA and MS Project, managing timelines and dependencies across projects', 'Performed QA and publishing checks before each launch, identifying issues early enough to resolve before release', 'Clarified business requirements and turned them into clear, assignable tasks so teams could move forward without delays'] },
  { role: 'Project Coordinator, Dental Operations', company: 'Charlotte Dentistry', dates: 'Nov 2021 — Jun 2022', summary: 'I created shared project structure for clinical and administrative teams and served as a consistent point of contact for vendors and leadership.', details: ['Kept projects on schedule by coordinating milestones and priorities across clinical and administrative teams', 'Documented key workflows and processes, giving new hires a clear reference instead of relying on weeks of shadowing', 'Coordinated communication between leadership, vendors, and internal teams, resolving issues and keeping projects moving'] },
  { role: 'Operations Coordinator', company: 'IllustraDENT', dates: 'Feb 2020 — Nov 2021', summary: 'I coordinated scheduling, logistics, and reporting across multiple office locations.', details: ['Standardized data-entry and logging processes across multiple office locations, improving consistency in how information was recorded', 'Compiled and reported KPI results to leadership on a regular basis to support operational decisions', 'Coordinated scheduling and logistics across multiple locations, keeping teams aligned on priorities and day-to-day operations'] },
  { role: 'Dental Office Coordinator', company: 'Park Avenue Smiles', dates: 'Feb 2018 — Mar 2020', summary: 'I supported scheduling, billing, insurance, and staff training in a busy dental office.', details: ['Reduced claim rejection rates by 25% by creating a standardized claims process and retraining staff on updated compliance requirements', 'Oversaw daily front-office operations, including scheduling, billing, and insurance, while serving as the primary point of contact for patients, providers, and payers'] },
]

function Header() {
  const [open, setOpen] = useState(false)
  const links = [['Profile', 'profile'], ['Experience', 'experience'], ['Projects', 'projects'], ['Credentials', 'credentials']]
  return <header className="site-header">
    <a href="#top" className="name-mark" aria-label="Sun Cerrae Quinones, home"><strong>Sun Cerrae</strong><span>Quinones</span></a>
    <nav className="desktop-nav" aria-label="Main navigation">{links.map(([label, href]) => <a key={href} href={`#${href}`}>{label}</a>)}</nav>
    <a className="header-resume" href={resumeUrl} download target="_blank" rel="noreferrer"><Download size={16}/> Résumé</a>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X/> : <Menu/>}</button>
    {open && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">{links.map(([label, href]) => <a key={href} href={`#${href}`} onClick={() => setOpen(false)}>{label}</a>)}<a href={resumeUrl} target="_blank" rel="noreferrer">Download résumé</a></nav>}
  </header>
}

function Experience() {
  const [active, setActive] = useState(0)
  return <section id="experience" className="section experience-section">
    <div className="section-title"><p className="eyebrow">Experience</p><h2>A background shaped by coordination, service, and follow-through.</h2></div>
    <div className="experience-layout"><p className="section-note">Select a role to read more about my responsibilities and contributions.</p><div className="roles">{roles.map((item, index) => {
      const expanded = active === index
      return <article className="role" key={item.company}>
        <button onClick={() => setActive(expanded ? -1 : index)} aria-expanded={expanded} className="role-trigger">
          <span className="role-date">{item.dates}</span><span className="role-heading"><strong>{item.role}</strong><small>{item.company}</small></span><ChevronDown className={expanded ? 'chevron open' : 'chevron'} size={20}/>
        </button>
        {expanded && <div className="role-detail"><p>{item.summary}</p><ul>{item.details.map(detail => <li key={detail}>{detail}</li>)}</ul></div>}
      </article>
    })}</div></div>
  </section>
}

function ProjectCard({ label, title, context, contribution, outcome, link, linkLabel = 'View on GitHub' }: { label: string, title: string, context: string, contribution: string, outcome: string, link?: string, linkLabel?: string }) {
  return <article className="project-card"><p className="project-label">{label}</p><h3>{title}</h3><div className="project-story"><div><span>Context</span><p>{context}</p></div><div><span>My contribution</span><p>{contribution}</p></div><div className="outcome"><span>Outcome</span><p>{outcome}</p></div></div>{link && <a className="project-link" href={link} target="_blank" rel="noreferrer">{linkLabel} <ArrowUpRight size={14}/></a>}</article>
}

export function Portfolio() {
  return <main id="top"><Header/>
    <section className="hero">
      <div className="hero-copy"><p className="eyebrow">Project Coordinator · Charlotte, North Carolina</p><h1>Sun Cerrae<br/><em>Quinones</em></h1><p className="intro">I help teams keep projects organized, communication clear, and priorities moving forward.</p><div className="hero-actions"><a className="primary-action" href={resumeUrl} download target="_blank" rel="noreferrer"><Download size={17}/> Download my résumé</a><a className="secondary-action" href="mailto:suncquinones@gmail.com"><Mail size={17}/> Email me</a></div></div>
      <aside className="hero-card"><p>Professional focus</p><h2>Project coordination across healthcare operations and digital production.</h2><div className="hero-detail"><MapPin size={17}/><span>Based in Charlotte, NC</span></div><div className="hero-detail"><span className="availability"/><span>Open to new opportunities</span></div><a href="#profile">Learn more about my work <ArrowDown size={16}/></a></aside>
    </section>

    <section id="profile" className="section profile-section"><div className="section-title"><p className="eyebrow">Professional summary</p><h2>I bring calm structure to work with many moving parts.</h2></div><div className="profile-copy"><p>Project Coordinator with 8 years of experience supporting projects and operations across healthcare and digital production. Experienced in managing timelines, coordinating cross-functional teams, documenting workflows, tracking KPIs, and resolving issues that affect project delivery. Skilled in JIRA, MS Project, CMS workflows, and process improvement.</p><div className="profile-links"><a href="https://www.linkedin.com/in/suncerrae" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15}/></a><a href="tel:9803715532">(980) 371-5532</a></div></div></section>

    <section className="results-section" aria-label="Selected professional results"><div><strong>15%</strong><p>reduction in accounts receivable after improving claims workflows</p></div><div><strong>25+</strong><p>revenue cycle cases coordinated during a typical week</p></div><div><strong>25%</strong><p>reduction in claim rejections after standardizing staff procedures</p></div><div><strong>10+</strong><p>concurrent digital campaigns tracked and delivered</p></div></section>

    <Experience/>

    <section id="projects" className="section projects-section"><div className="section-title"><p className="eyebrow">Selected projects</p><h2>Examples of how I approach coordination.</h2></div><div className="projects-grid">
      <ProjectCard label="Reporting build" title="Claims & A/R KPI dashboard" context="Revenue cycle teams need a fast, visual read on outstanding A/R, aging, and rejection trends without digging through raw claims data." contribution="I built a live dashboard tracking A/R aging by bucket, monthly rejection rate trends, and a filterable claims table, styled after the KPI reports I run weekly at Harlow Dental." outcome="A working, deployable reporting tool that mirrors real revenue-cycle KPI tracking." link="https://cerrae.github.io/claims-kpi-dashboard/" linkLabel="View live dashboard"/>
      <ProjectCard label="Troubleshooting" title="Production deployment fix" context="This site's résumé download was silently failing in production due to a GitHub Pages deployment path mismatch." contribution="I diagnosed the root cause in the build configuration, coordinated the fix, and caught two rollout mistakes by verifying the live repo state at each step rather than assuming changes had landed." outcome="Documented the full diagnosis-to-resolution process as a case study." link="https://github.com/cerrae/suncerrae/blob/main/CASE-STUDY.md"/>
      <ProjectCard label="Healthcare operations" title="Claims workflow and reporting" context="Claims moved between several owners without a consistent handoff or shared reporting rhythm." contribution="I mapped the workflow, clarified ownership, and created a weekly KPI review for open cases and aging." outcome="The updated process contributed to a 15% reduction in accounts receivable."/>
      <ProjectCard label="Digital production" title="Multi-campaign delivery" context="Several campaigns were moving through creative, CMS, QA, and publishing at the same time." contribution="I confirmed requirements, tracked dependencies, standardized asset handoffs, and completed pre-launch checks." outcome="All assigned campaigns launched on schedule without production publishing errors."/>
      <ProjectCard label="Project recovery" title="Schedule recovery plan" context="An extended creative review used the project’s QA buffer and placed the original launch plan at risk." contribution="I rebuilt the schedule, separated critical launch work from enhancements, and kept QA in the plan." outcome="The revised plan recovered two weeks while protecting launch quality."/>
    </div></section>

    <section className="section skills-section"><div className="section-title"><p className="eyebrow">Skills & tools</p><h2>What I bring to a project team.</h2></div><div className="skills-list">{[['Core competencies','Project Coordination | Workflow Optimization | Process Documentation | Stakeholder Management | KPI Reporting | Project Scheduling | Cross-Functional Collaboration | Digital Production | CMS Management'],['Operations','Revenue cycle, claims, billing, scheduling, workflow documentation, KPI reporting'],['Platforms','JIRA, Microsoft Project, CMS platforms, Microsoft Office'],['Technical foundation','HTML, CSS, SQL, JIRA, MS Project, SharePoint, Adobe Creative Suite, CMS, Agile']].map(([title, copy]) => <div key={title}><h3>{title}</h3><p>{copy}</p></div>)}</div></section>

    <section id="credentials" className="section credentials-section"><div className="section-title"><p className="eyebrow">Education & credentials</p><h2>Continued learning in project management and technology.</h2></div><div className="credential-list">{[['Google Project Management: Specialization','Coursera','Aug 2022'],['Agile Project Management','Coursera','Aug 2022'],['Project Management','Bryan University','Feb 2022'],['Advanced Full Stack Web Development','Bryan University','Feb 2022']].map(([title, issuer, date]) => <article key={title}><div><h3>{title}</h3><p>{issuer}</p></div><time>{date}</time></article>)}</div></section>

    <footer id="contact"><div><p className="eyebrow">Contact</p><h2>I&apos;d be glad to discuss how I could support your team.</h2></div><div className="contact-panel"><a className="contact-email" href="mailto:suncquinones@gmail.com">suncquinones@gmail.com <ArrowUpRight size={20}/></a><a href={resumeUrl} download target="_blank" rel="noreferrer"><Download size={16}/> Download résumé</a><a href="https://www.linkedin.com/in/suncerrae" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16}/></a><a href="tel:9803715532">(980) 371-5532</a></div><p className="copyright">© {new Date().getFullYear()} Sun Cerrae Quinones · Charlotte, North Carolina</p></footer>
  </main>
}
