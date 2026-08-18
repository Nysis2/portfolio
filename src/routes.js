/**
 * Source unique des routes du site.
 * Utilisee par le routeur React et par le script de pre-rendu (prerender.js)
 * pour generer un fichier HTML statique par page.
 */
export const SITE_URL = 'https://nicolas-pandraud.netlify.app'

export const routes = [
  {
    path: '/',
    title: 'Nicolas Pandraud - DevOps AWS & Lead Fullstack',
    description:
      'Portfolio de Nicolas Pandraud, DevOps specialise AWS et Lead developpeur fullstack a Lyon : projets cloud, CI/CD et applications web.',
  },
  {
    path: '/cv',
    title: 'CV - Nicolas Pandraud, DevOps AWS & Lead Fullstack',
    description:
      'CV de Nicolas Pandraud : DevOps AWS certifie Solutions Architect Associate, Lead developpeur fullstack (React, Angular, Node.js, Docker, CI/CD).',
  },
]
