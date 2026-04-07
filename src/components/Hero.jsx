import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Image de fond — placer bg.jpg dans le dossier public/ */}
      <div className={styles.bg} aria-hidden="true" />

      {/* Contenu centré */}
      <div className={styles.content}>
        <span className={styles.badge}>Développeur</span>
        <h1 className={styles.name}>Nicolas Pandraud</h1>
        <p className={styles.tagline}>
          Je conçois des outils et des interfaces qui automatisent,<br />
          simplifient et donnent du sens aux données.
        </p>

        {/* Call to action */}
        <a href="#projects" className={styles.cta}>
          Voir mes projets
        </a>
      </div>
    </section>
  )
}
