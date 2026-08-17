import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const sections = ['about', 'projects']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [progress, setProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (y / max) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers = sections.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { threshold: 0.4 }
      )
      observer.observe(el)
      return observer
    })

    return () => observers.forEach((obs) => obs?.disconnect())
  }, [])

  // Fermer le menu au resize vers desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 640) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        {/* Barre de progression */}
        <span
          className={styles.progressBar}
          style={{ width: `${progress}%` }}
          aria-hidden="true"
        />

        {/* Logo / nom */}
        <a href="#hero" className={styles.logo} onClick={closeMenu}>
          Nicolas Pandraud
        </a>

        {/* Liens de navigation — desktop */}
        <ul className={styles.links}>
          <li>
            <a href="#about" className={active === 'about' ? styles.activeLink : ''}>
              À propos
            </a>
          </li>
          <li>
            <a href="#projects" className={active === 'projects' ? styles.activeLink : ''}>
              Projets
            </a>
          </li>
          <li>
            <a
              href="/cv"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cv}
            >
              CV
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/nicolas-pandraud/"
              className={styles.linkedin}
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>

        {/* Bouton hamburger — mobile uniquement */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Menu mobile */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul className={styles.mobileLinks}>
          <li>
            <a href="#about" onClick={closeMenu} className={active === 'about' ? styles.activeLink : ''}>
              À propos
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu} className={active === 'projects' ? styles.activeLink : ''}>
              Projets
            </a>
          </li>
          <li>
            <a href="/cv" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className={styles.cv}>
              CV
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/nicolas-pandraud/"
              className={styles.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
