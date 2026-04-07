import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <span className={styles.text}>© {year} Nicolas Pandraud</span>
      <a
        href="https://www.linkedin.com/in/nicolas-pandraud/"
        className={styles.linkedinLink}
        aria-label="LinkedIn de Nicolas Pandraud"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </footer>
  );
}
