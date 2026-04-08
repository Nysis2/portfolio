import { useEffect } from 'react'
import './CV.css'

export default function CV() {
  useEffect(() => {
    const prev = document.title
    document.title = 'Nicolas Pandraud — DevOps AWS & Lead Fullstack'
    return () => { document.title = prev }
  }, [])

  return (
    <div className="cv-wrap">

      {/* Bouton téléchargement fixe */}
      <a href="/cv.pdf" download="CV_Nicolas_Pandraud.pdf" className="cv-download">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        Télécharger le CV
      </a>

      <div className="cv-page" id="cv-content">

        {/* Header */}
        <header className="cv-header">
          <div>
            <h1 className="cv-name">Nicolas <span>Pandraud</span></h1>
            <div className="cv-title">DevOps AWS · Lead Développeur Fullstack</div>
          </div>
          <div className="cv-contact">
            <span>Lyon, France · Remote</span>
            <a href="tel:0641911752">06 41 91 17 52</a>
            <a href="mailto:npandraud@gmail.com">npandraud@gmail.com</a>
            <a href="https://linkedin.com/in/nicolas-pandraud" target="_blank" rel="noopener noreferrer">linkedin.com/in/nicolas-pandraud</a>
            <a href="https://nicolas-pandraud.netlify.app" target="_blank" rel="noopener noreferrer">nicolas-pandraud.netlify.app</a>
          </div>
        </header>

        <div className="cv-body">

          {/* Sidebar */}
          <aside className="cv-sidebar">

            <div className="cv-sidebar-section">
              <div className="cv-sidebar-title">Compétences</div>

              <div className="cv-skill-group">
                <div className="cv-skill-group-name">Cloud & DevOps</div>
                <div className="cv-skill-tags">
                  {['AWS CDK','Lambda','EC2 / S3','DynamoDB','RDS','SQS / SNS','IoT Core','LoRaWAN','Cognito','GitLab CI/CD','Jenkins','Docker','Prometheus','Grafana'].map(s => (
                    <span key={s} className="cv-skill-tag">{s}</span>
                  ))}
                </div>
              </div>

              <div className="cv-skill-group">
                <div className="cv-skill-group-name">Frontend</div>
                <div className="cv-skill-tags">
                  {['Angular','TypeScript','Vue.js','React.js'].map(s => (
                    <span key={s} className="cv-skill-tag">{s}</span>
                  ))}
                </div>
              </div>

              <div className="cv-skill-group">
                <div className="cv-skill-group-name">Backend</div>
                <div className="cv-skill-tags">
                  {['Node.js','NestJS','REST API'].map(s => (
                    <span key={s} className="cv-skill-tag">{s}</span>
                  ))}
                </div>
              </div>

              <div className="cv-skill-group">
                <div className="cv-skill-group-name">Bases de données</div>
                <div className="cv-skill-tags">
                  {['MongoDB','PostgreSQL','MySQL'].map(s => (
                    <span key={s} className="cv-skill-tag">{s}</span>
                  ))}
                </div>
              </div>

              <div className="cv-skill-group">
                <div className="cv-skill-group-name">Méthodes</div>
                <div className="cv-skill-tags">
                  {['Scrum / Agile','Lead tech','Coaching'].map(s => (
                    <span key={s} className="cv-skill-tag">{s}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="cv-sidebar-section">
              <div className="cv-sidebar-title">Langues</div>
              {[['Français','Natif'],['Anglais','Avancé'],['Espagnol','Élémentaire']].map(([lang, lvl]) => (
                <div key={lang} className="cv-lang-item">
                  <span className="cv-lang-name">{lang}</span>
                  <span className="cv-lang-level">{lvl}</span>
                </div>
              ))}
            </div>

            <div className="cv-sidebar-section">
              <div className="cv-sidebar-title">Mobilité</div>
              <p>Lyon · Remote · France</p>
              <p style={{ marginTop: 4 }}>Freelance ou CDI</p>
              <p style={{ marginTop: 4 }}>Véhiculé</p>
            </div>

          </aside>

          {/* Main */}
          <main className="cv-main">

            <section className="cv-profil">
              <div className="cv-section-title">Profil</div>
              <p>
                Freelance IT (micro-entreprise, depuis 2023) avec une expertise confirmée en architecture
                cloud AWS, CI/CD et développement fullstack. J'interviens de l'infrastructure au code
                pour accélérer la mise en production et fiabiliser les systèmes. Expérience de lead
                technique sur des équipes de 4 à 6 personnes, en contexte Agile.
                Ouvert à des missions freelance ou à un poste en CDI, à Lyon ou en remote.
              </p>
            </section>

            <section>
              <div className="cv-section-title">Expérience professionnelle</div>

              <div className="cv-exp">
                <div className="cv-exp-header">
                  <div className="cv-exp-title">DevOps AWS & Lead Développeur</div>
                  <div className="cv-exp-period">2023 – 2025</div>
                </div>
                <div className="cv-exp-company">
                  STEF IT <span className="cv-exp-via">via</span> VICINITY
                  <span className="cv-exp-sep">·</span>
                  <span className="cv-exp-type">Transport & Supply Chain · Freelance / ESN</span>
                </div>
                <p className="cv-exp-desc">
                  Lead développeur sur des projets Angular/TypeScript avec supervision d'équipe et pilotage
                  de l'architecture AWS. Développement d'une application d'optimisation d'entrepôts,
                  d'une architecture IoT d'alertes capteurs (IoT Core, LoRaWAN) et de CDK AWS.
                  Migration Jenkins vers GitLab CI.
                </p>
                <div className="cv-stack">
                  {['Angular','NestJS','Node.js','AWS CDK','Lambda','EC2','DynamoDB','S3','RDS','SNS / SQS','Docker','GitLab','MySQL','MongoDB','Scrum'].map(t => (
                    <span key={t} className="cv-stack-tag">{t}</span>
                  ))}
                </div>
              </div>

              <div className="cv-exp">
                <div className="cv-exp-header">
                  <div className="cv-exp-title">DevOps AWS & Développeur Full Stack</div>
                  <div className="cv-exp-period">2022 – 2023</div>
                </div>
                <div className="cv-exp-company">
                  SERFIM <span className="cv-exp-via">via</span> ACENSI
                  <span className="cv-exp-sep">·</span>
                  <span className="cv-exp-type">Travaux publics & Environnement · CDI / ESN</span>
                </div>
                <p className="cv-exp-desc">
                  Développement de plateformes Vue.js connectées à des architectures AWS IoT.
                  Création d'un CDK SSO, d'un module d'alertes LoRaWAN (SNS/SQS) et d'un back-office Cognito.
                </p>
                <div className="cv-stack">
                  {['Vue.js','Node.js','AWS CDK','Lambda','Cognito','SNS / SQS','DynamoDB','Docker','GitLab','Scrum'].map(t => (
                    <span key={t} className="cv-stack-tag">{t}</span>
                  ))}
                </div>
              </div>

              <div className="cv-exp">
                <div className="cv-exp-header">
                  <div className="cv-exp-title">DevOps AWS & Développeur Full Stack</div>
                  <div className="cv-exp-period">2021 – 2022</div>
                </div>
                <div className="cv-exp-company">
                  RISKEE / OLINO
                  <span className="cv-exp-sep">·</span>
                  <span className="cv-exp-type">Assurance digitale · Alternance Epitech</span>
                </div>
                <p className="cv-exp-desc">
                  Reconstruction complète d'une plateforme MERN en remplacement d'une solution no-code,
                  avec mise en place du CI/CD, conteneurisation Docker et tests E2E.
                  Encadrement d'une équipe de 4 développeurs.
                </p>
                <div className="cv-stack">
                  {['React.js','Node.js','AWS Lambda','S3','DynamoDB','IAM','Docker','GitLab','Prometheus','Grafana','MongoDB','PostgreSQL','Agile'].map(t => (
                    <span key={t} className="cv-stack-tag">{t}</span>
                  ))}
                </div>
              </div>
            </section>

            <section style={{ marginTop: 32 }}>
              <div className="cv-section-title">Formation</div>
              <div className="cv-edu-grid">
                <div>
                  <div className="cv-edu-degree">Master of Science</div>
                  <div className="cv-edu-school">Epitech</div>
                  <div className="cv-edu-year">2019 – 2022 · Alternance</div>
                </div>
                <div>
                  <div className="cv-edu-degree">DUT Informatique</div>
                  <div className="cv-edu-school">IUT2 Grenoble</div>
                  <div className="cv-edu-year">2017 – 2019</div>
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  )
}
