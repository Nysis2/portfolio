import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* Logo / nom */}
      <a href="#hero" className={styles.logo}>
        Nicolas Pandraud
      </a>

      {/* Liens de navigation */}
      <ul className={styles.links}>
        <li>
          <a href="#projects">Projets</a>
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
    </nav>
  );
}
