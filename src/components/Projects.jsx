import { useReveal } from '../hooks/useReveal'
import styles from './Projects.module.css'

/* Liste des projets */
const projects = [
  {
    id: 'mystria',
    title: 'Mystria',
    description:
      'Plateforme commerciale de jeu de rôle sur table en ligne (VTTRPG) permettant à un Maître du Jeu de mener des sessions en temps réel : cartes interactives avec tokens, fiches de personnages, diffusion audio synchronisée, messagerie ciblée, abonnements et dashboard admin.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Cloudflare R2', 'Stripe'],
    link: 'https://mystria.fr',
    github: null,
    preview: '/previews/mystria.jpg',
  },
  {
    id: 'notion-films',
    title: 'Films en salle',
    description:
      'Pipeline automatisé qui synchronise les films actuellement en salle en France (TMDb) vers une base Notion, avec une interface web mise à jour chaque jour via GitHub Actions.',
    tags: ['Python', 'Notion API', 'TMDb API', 'GitHub Actions', 'Netlify'],
    link: 'https://notion-films.netlify.app',
    github: null,
    preview: '/previews/notion-films.jpg',
  },
]

function ProjectCard({ project, index }) {
  const ref = useReveal(index * 100)
  return (
    <li ref={ref} key={project.id} className={`${styles.card} reveal`}>
      {project.preview && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.preview}
          tabIndex={-1}
          aria-hidden="true"
        >
          <img
            src={project.preview}
            alt=""
            width="1000"
            height="488"
            loading="lazy"
            decoding="async"
            className={styles.previewImg}
          />
        </a>
      )}

      <span className={styles.number}>
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDesc}>{project.description}</p>

        <ul className={styles.tags}>
          {project.tags.map((tag) => (
            <li key={tag} className={styles.tag}>{tag}</li>
          ))}
        </ul>
      </div>

      <div className={styles.cardLinks}>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkBtn}
          >
            Voir le projet ↗
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkBtnSecondary}
          >
            GitHub
          </a>
        )}
      </div>
    </li>
  )
}

export default function Projects() {
  const headerRef = useReveal()

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <header ref={headerRef} className={`${styles.header} reveal`}>
          <h2 className={styles.title}>Projets</h2>
          <p className={styles.subtitle}>
            Ce sur quoi je travaille et ce que j'ai construit.
          </p>
        </header>

        <ul className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}

          {/* Carte placeholder */}
          <li className={`${styles.card} ${styles.cardPlaceholder}`}>
            <span className={styles.placeholderLabel}>Bientôt...</span>
          </li>
        </ul>
      </div>
    </section>
  )
}
