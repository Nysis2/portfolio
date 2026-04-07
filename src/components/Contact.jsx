import { useReveal } from '../hooks/useReveal'
import styles from './Contact.module.css'

export default function Contact() {
  const ref = useReveal()

  return (
    <section id="contact" className={styles.section}>
      {/* Lueur décorative */}
      <div className={styles.glow} aria-hidden="true" />

      <div ref={ref} className={`${styles.container} reveal`}>
        {/* Badge disponibilité */}
        <div className={styles.availability}>
          <span className={styles.dot} />
          Disponible pour de nouveaux projets
        </div>

        <h2 className={styles.title}>Travaillons ensemble</h2>

        <p className={styles.subtitle}>
          Vous avez un projet à construire, une idée à explorer ou besoin
          d'un développeur fiable ?<br />
          Discutons-en.
        </p>

        <div className={styles.actions}>
          <a
            href="https://www.linkedin.com/in/nicolas-pandraud/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primary}
          >
            Me contacter sur LinkedIn ↗
          </a>
          <a href="mailto:npandraud@gmail.com" className={styles.secondary}>
            Envoyer un email
          </a>
          <a
            href="/cv"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Voir mon CV ↗
          </a>
        </div>
      </div>
    </section>
  )
}
