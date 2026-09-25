/**
 * Source unique des routes du site.
 * Utilisee par le routeur React et par le script de pre-rendu (prerender.js)
 * pour generer un fichier HTML statique par page.
 */
import { CREDLY_URL, CERT_NAME } from './data/certification.js'

export const SITE_URL = 'https://nicolas-pandraud.netlify.app'

/** CV en donnees structurees schema.org (a garder aligne avec pages/CV.jsx). */
const cvJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  url: `${SITE_URL}/cv`,
  inLanguage: 'fr-FR',
  mainEntity: {
    '@type': 'Person',
    name: 'Nicolas Pandraud',
    givenName: 'Nicolas',
    familyName: 'Pandraud',
    jobTitle: 'DevOps spécialisé AWS · Lead Développeur Fullstack',
    description:
      "Freelance IT (micro-entreprise, depuis 2023) avec une expertise confirmée en architecture cloud AWS, CI/CD et développement fullstack. Expérience de lead technique sur des équipes de 4 à 6 personnes, en contexte Agile. Ouvert à des missions freelance ou à un poste en CDI, à Lyon ou en remote.",
    email: 'mailto:npandraud@gmail.com',
    telephone: '+33641911752',
    url: SITE_URL,
    sameAs: ['https://linkedin.com/in/nicolas-pandraud', CREDLY_URL],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lyon',
      addressCountry: 'FR',
    },
    knowsLanguage: [
      { '@type': 'Language', name: 'Français', alternateName: 'fr' },
      { '@type': 'Language', name: 'Anglais', alternateName: 'en' },
      { '@type': 'Language', name: 'Espagnol', alternateName: 'es' },
    ],
    knowsAbout: [
      'AWS', 'AWS CDK', 'Lambda', 'EC2', 'S3', 'DynamoDB', 'RDS', 'SQS', 'SNS',
      'IoT Core', 'Cognito', 'GitLab CI/CD', 'Docker', 'Angular', 'TypeScript',
      'Vue.js', 'React.js', 'Node.js', 'NestJS', 'REST API', 'MongoDB',
      'PostgreSQL', 'MySQL', 'Scrum', 'Agile',
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      name: CERT_NAME,
      credentialCategory: 'certification',
      recognizedBy: { '@type': 'Organization', name: 'Amazon Web Services' },
      url: CREDLY_URL,
    },
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'Epitech' },
      { '@type': 'CollegeOrUniversity', name: 'IUT2 Grenoble' },
    ],
  },
}

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
    jsonLd: cvJsonLd,
  },
]
