import styles from './Hero.module.css'
import { CREDLY_URL, CERT_NAME, CERT_BADGE } from '../data/certification'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Image de fond */}
      <div className={styles.bg} aria-hidden="true" />

      {/* Contenu centré */}
      <div className={styles.content}>
        {/* Badge de certification officiel, cliquable vers Credly */}
        <a
          href={CREDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.certBadge}
          aria-label={`${CERT_NAME} - vérifier sur Credly`}
        >
          <img src={CERT_BADGE} alt={CERT_NAME} width="132" height="132" loading="eager" />
          <span className={styles.certVerified}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Certifié
          </span>
        </a>

        <span className={styles.badge}>DevOps spécialisé AWS · Lead Fullstack</span>
        <h1 className={styles.name}>Nicolas Pandraud</h1>
        <p className={styles.tagline}>
          <strong>DevOps spécialisé AWS</strong>, certifié Solutions Architect Associate.<br />
          J'architecte des infrastructures cloud fiables et scalables, de l'IoT au frontend.
        </p>

        {/* Call to action */}
        <a href="#about" className={styles.cta}>
          En savoir plus
        </a>
      </div>

      {/* Indicateur de scroll */}
      <a href="#about" className={styles.scrollIndicator} aria-label="Défiler vers le bas">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>
    </section>
  )
}
