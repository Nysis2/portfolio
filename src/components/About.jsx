import { useReveal } from '../hooks/useReveal'
import styles from './About.module.css'
import { CREDLY_URL, CERT_NAME, CERT_BADGE } from '../data/certification'

const stack = [
  'AWS', 'CDK', 'Lambda', 'Angular', 'TypeScript',
  'Vue.js', 'React', 'Node.js', 'NestJS',
  'Docker', 'GitLab CI/CD', 'IoT Core', 'MongoDB', 'PostgreSQL',
]

function TechBadge({ tech, index }) {
  const ref = useReveal(index * 50)
  return (
    <li ref={ref} className={`${styles.tech} reveal`}>{tech}</li>
  )
}

export default function About() {
  const headerRef = useReveal()
  const bioRef = useReveal(100)

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <header ref={headerRef} className={`${styles.header} reveal`}>
          <h2 className={styles.title}>À propos</h2>
        </header>

        <div className={styles.body}>
          <div ref={bioRef} className={`${styles.bio} reveal`}>
            <p>
              Freelance IT depuis 2023, spécialisé en architecture cloud AWS
              et développement fullstack. J'interviens de l'infrastructure au
              code, du CDK AWS au frontend Angular, pour accélérer la mise
              en production et fiabiliser les systèmes.
            </p>
            <p>
              Expérience de lead technique sur des équipes de 4 à 6 développeurs
              en contexte Agile. Ouvert à des missions freelance ou un poste en CDI,
              à Lyon ou en remote.
            </p>

            <a
              className={styles.cert}
              href={CREDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={styles.certBadge} src={CERT_BADGE} alt={CERT_NAME} width="56" height="56" loading="lazy" />
              <span className={styles.certText}>
                <strong>Certified Solutions Architect - Associate</strong>
                <span className={styles.certMeta}>Amazon Web Services · Vérifier le badge ↗</span>
              </span>
            </a>
          </div>

          <ul className={styles.stack}>
            {stack.map((tech, i) => (
              <TechBadge key={tech} tech={tech} index={i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
