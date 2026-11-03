import { useEffect } from 'react'
import './CV.css'
import { CREDLY_URL, CERT_NAME, CERT_BADGE } from '../data/certification'

/* Liste de tags : balisage ul/li pour que les parseurs (ATS, bots) lisent
   des items separes plutot que des mots colles. */
function Tags({ items, listClass, itemClass }) {
  return (
    <ul className={listClass}>
      {items.map((s) => (
        <li key={s} className={itemClass}>{s}</li>
      ))}
    </ul>
  )
}

const SkillTags = ({ items }) => (
  <Tags items={items} listClass="cv-skill-tags" itemClass="cv-skill-tag" />
)

const StackTags = ({ items }) => (
  <Tags items={items} listClass="cv-stack" itemClass="cv-stack-tag" />
)

export default function CV() {
  useEffect(() => {
    const prev = document.title
    document.title = 'Nicolas Pandraud - DevOps AWS & Lead Fullstack'
    return () => { document.title = prev }
  }, [])

  // Les {' '} separent les elements inline dans le texte brut ; invisibles
  // a l'ecran car les conteneurs sont en flex.
  return (
    <div className="cv-wrap">

      {/* Bouton téléchargement : impression native -> Enregistrer en PDF (A4, toujours à jour) */}
      <button type="button" onClick={() => window.print()} className="cv-download">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        Télécharger le CV
      </button>

      <article className="cv-page" id="cv-content">

        {/* Header */}
        <header className="cv-header">
          <div>
            <h1 className="cv-name">Nicolas <span>Pandraud</span></h1>
            <p className="cv-title">DevOps spécialisé AWS · Lead Développeur Fullstack</p>
          </div>
          <address className="cv-contact">
            <span>Lyon, France · Remote</span>{' '}
            <a href="tel:+33641911752">06 41 91 17 52</a>{' '}
            <a href="mailto:npandraud@gmail.com">npandraud@gmail.com</a>{' '}
            <a href="https://linkedin.com/in/nicolas-pandraud" target="_blank" rel="noopener noreferrer">linkedin.com/in/nicolas-pandraud</a>{' '}
            <a href="https://nicolas-pandraud.netlify.app" target="_blank" rel="noopener noreferrer">nicolas-pandraud.netlify.app</a>
          </address>
        </header>

        <div className="cv-body">

          {/* Sidebar */}
          <aside className="cv-sidebar">

            <section className="cv-sidebar-section">
              <h2 className="cv-sidebar-title">Certification</h2>
              <a className="cv-cert" href={CREDLY_URL} target="_blank" rel="noopener noreferrer">
                <img className="cv-cert-logo" src={CERT_BADGE} alt={CERT_NAME} width="82" height="82" />
                <div className="cv-cert-name">AWS Certified Solutions Architect</div>{' '}
                <div className="cv-cert-meta">Associate · Amazon Web Services · 2026</div>
              </a>
            </section>

            <section className="cv-sidebar-section">
              <h2 className="cv-sidebar-title">Compétences</h2>

              <div className="cv-skill-group">
                <h3 className="cv-skill-group-name">Cloud & DevOps</h3>
                <SkillTags items={['AWS CDK','Lambda','EC2 / S3','DynamoDB','RDS','SQS / SNS','IoT Core','Cognito','GitLab CI/CD','Docker']} />
              </div>

              <div className="cv-skill-group">
                <h3 className="cv-skill-group-name">Frontend</h3>
                <SkillTags items={['Angular','TypeScript','Vue.js','React.js']} />
              </div>

              <div className="cv-skill-group">
                <h3 className="cv-skill-group-name">Backend</h3>
                <SkillTags items={['Node.js','NestJS','REST API']} />
              </div>

              <div className="cv-skill-group">
                <h3 className="cv-skill-group-name">Bases de données</h3>
                <SkillTags items={['MongoDB','PostgreSQL','MySQL']} />
              </div>

              <div className="cv-skill-group">
                <h3 className="cv-skill-group-name">Méthodes</h3>
                <SkillTags items={['Scrum / Agile','Lead tech']} />
              </div>
            </section>

            <section className="cv-sidebar-section">
              <h2 className="cv-sidebar-title">Langues</h2>
              <ul>
                {[['Français','Natif'],['Anglais','Avancé'],['Espagnol','Élémentaire']].map(([lang, lvl]) => (
                  <li key={lang} className="cv-lang-item">
                    <span className="cv-lang-name">{lang}</span>{' '}
                    <span className="cv-lang-level">{lvl}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="cv-sidebar-section">
              <h2 className="cv-sidebar-title">Mobilité</h2>
              <p>Lyon · Remote · France</p>
              <p style={{ marginTop: 4 }}>Freelance ou CDI</p>
              <p style={{ marginTop: 4 }}>Véhiculé</p>
            </section>

          </aside>

          {/* Main */}
          <main className="cv-main">

            <section className="cv-profil">
              <h2 className="cv-section-title">Profil</h2>
              <p>
                Freelance IT (micro-entreprise, depuis 2023), certifié AWS Solutions Architect Associate,
                avec une expertise confirmée en architecture cloud AWS, CI/CD et développement fullstack. J'interviens de l'infrastructure au code
                pour accélérer la mise en production et fiabiliser les systèmes. Expérience de lead
                technique sur des équipes de 4 à 6 personnes, en contexte Agile.
                Ouvert à des missions freelance ou à un poste en CDI, à Lyon ou en remote.
              </p>
            </section>

            <section>
              <h2 className="cv-section-title">Expérience professionnelle</h2>

              <div className="cv-exp">
                <div className="cv-exp-header">
                  <h3 className="cv-exp-title">Fondateur & Développeur Full Stack</h3>{' '}
                  <div className="cv-exp-period">2026 - aujourd'hui</div>
                </div>
                <div className="cv-exp-company">
                  MYSTRIA{' '}
                  <span className="cv-exp-sep">·</span>{' '}
                  <span className="cv-exp-type">Plateforme SaaS de jeu de rôle en ligne · <a href="https://mystria.fr" target="_blank" rel="noopener noreferrer">mystria.fr</a></span>
                </div>
                <p className="cv-exp-desc">
                  Conception et mise en production d'une plateforme SaaS temps réel en TypeScript : front React
                  avec plateau 3D (Three.js), API Node.js/Express et WebSockets, paiements Stripe. CI/CD GitHub
                  Actions multi-environnements (tests, audit de sécurité, déploiement continu). Pratique IA-first :
                  agents IA (Claude Code) au cœur du workflow, de la conception à la revue de code.
                </p>
                <StackTags items={['React','TypeScript','Node.js','Express','Socket.io','Three.js','MongoDB','Stripe','GitHub Actions','Playwright','Claude Code']} />
              </div>

              <div className="cv-exp">
                <div className="cv-exp-header">
                  <h3 className="cv-exp-title">DevOps AWS & Lead Développeur</h3>{' '}
                  <div className="cv-exp-period">2023 - 2026</div>
                </div>
                <div className="cv-exp-company">
                  STEF IT <span className="cv-exp-via">via</span> VICINITY{' '}
                  <span className="cv-exp-sep">·</span>{' '}
                  <span className="cv-exp-type">Transport & Supply Chain · Freelance / ESN</span>
                </div>
                <p className="cv-exp-desc">
                  Lead développeur sur des projets Angular/TypeScript avec supervision d'équipe et pilotage
                  de l'architecture AWS. Développement d'une application d'optimisation d'entrepôts,
                  d'une architecture IoT d'alertes capteurs (IoT Core, LoRaWAN) et de CDK AWS.
                  Migration Jenkins vers GitLab CI.
                </p>
                <StackTags items={['Angular','NestJS','Node.js','AWS CDK','Lambda','EC2','DynamoDB','S3','RDS','SNS / SQS','Docker','GitLab','MySQL','MongoDB','Scrum']} />
              </div>

              <div className="cv-exp">
                <div className="cv-exp-header">
                  <h3 className="cv-exp-title">DevOps AWS & Développeur Full Stack</h3>{' '}
                  <div className="cv-exp-period">2022 - 2023</div>
                </div>
                <div className="cv-exp-company">
                  SERFIM <span className="cv-exp-via">via</span> ACENSI{' '}
                  <span className="cv-exp-sep">·</span>{' '}
                  <span className="cv-exp-type">Travaux publics & Environnement · CDI / ESN</span>
                </div>
                <p className="cv-exp-desc">
                  Développement de plateformes Vue.js connectées à des architectures AWS IoT.
                  Création d'un CDK SSO, d'un module d'alertes LoRaWAN (SNS/SQS) et d'un back-office Cognito.
                </p>
                <StackTags items={['Vue.js','Node.js','AWS CDK','Lambda','Cognito','SNS / SQS','DynamoDB','Docker','GitLab','Scrum']} />
              </div>

              <div className="cv-exp">
                <div className="cv-exp-header">
                  <h3 className="cv-exp-title">DevOps AWS & Développeur Full Stack</h3>{' '}
                  <div className="cv-exp-period">2020 - 2022</div>
                </div>
                <div className="cv-exp-company">
                  RISKEE / OLINO{' '}
                  <span className="cv-exp-sep">·</span>{' '}
                  <span className="cv-exp-type">Assurance digitale · Alternance Epitech</span>
                </div>
                <p className="cv-exp-desc">
                  Reconstruction complète d'une plateforme MERN en remplacement d'une solution no-code,
                  avec mise en place du CI/CD, conteneurisation Docker et tests E2E.
                  Encadrement d'une équipe de 4 développeurs.
                </p>
                <StackTags items={['React.js','Node.js','AWS Lambda','S3','DynamoDB','IAM','Docker','GitLab','Prometheus','Grafana','MongoDB','PostgreSQL','Agile']} />
              </div>
            </section>

            <section style={{ marginTop: 32 }}>
              <h2 className="cv-section-title">Formation</h2>
              <div className="cv-edu-grid">
                <div>
                  <h3 className="cv-edu-degree">Master of Science</h3>
                  <div className="cv-edu-school">Epitech</div>
                  <div className="cv-edu-year">2019 - 2022 · Alternance</div>
                </div>
                <div>
                  <h3 className="cv-edu-degree">DUT Informatique</h3>
                  <div className="cv-edu-school">IUT2 Grenoble</div>
                  <div className="cv-edu-year">2017 - 2019</div>
                </div>
              </div>
            </section>

          </main>
        </div>
      </article>
    </div>
  )
}
