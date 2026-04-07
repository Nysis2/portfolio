import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Image de fond */}
      <div className={styles.bg} aria-hidden="true" />

      {/* Contenu centré */}
      <div className={styles.content}>
        <span className={styles.badge}>DevOps AWS · Lead Fullstack</span>
        <h1 className={styles.name}>Nicolas Pandraud</h1>
        <p className={styles.tagline}>
          J'architecte des infrastructures cloud AWS et développe des applications<br />
          fullstack — de l'IoT au frontend — pour des équipes techniques exigeantes.
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
