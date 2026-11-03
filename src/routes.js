/**
 * Source unique des routes du site.
 * Utilisee par le routeur React et par le script de pre-rendu (prerender.js)
 * pour generer un fichier HTML statique par page.
 */
import { CREDLY_URL, CERT_NAME } from './data/certification.js'

export const SITE_URL = 'https://nicolas-pandraud.netlify.app'

/** Personne en donnees structurees schema.org (a garder aligne avec pages/CV.jsx). */
const person = {
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: 'Nicolas Pandraud',
  givenName: 'Nicolas',
  familyName: 'Pandraud',
  jobTitle: 'DevOps spécialisé AWS · Lead Développeur Fullstack',
  description:
    "Freelance IT (micro-entreprise, depuis 2023), certifié AWS Solutions Architect Associate, avec une expertise confirmée en architecture cloud AWS, CI/CD et développement fullstack. Expérience de lead technique sur des équipes de 4 à 6 personnes, en contexte Agile. Ouvert à des missions freelance ou à un poste en CDI, à Lyon ou en remote.",
  email: 'mailto:npandraud@gmail.com',
  telephone: '+33641911752',
  url: SITE_URL,
  sameAs: ['https://www.linkedin.com/in/nicolas-pandraud/', CREDLY_URL],
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
    'PostgreSQL', 'MySQL', 'Express', 'Socket.io', 'Three.js', 'Stripe',
    'GitHub Actions', 'Playwright', 'Scrum', 'Agile',
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
}

/** Accueil : le site et son auteur. */
const homeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'Nicolas Pandraud',
      inLanguage: 'fr-FR',
      author: { '@id': `${SITE_URL}/#person` },
    },
    person,
  ],
}

/** CV : page de profil centree sur la meme personne. */
const cvJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  url: `${SITE_URL}/cv`,
  inLanguage: 'fr-FR',
  mainEntity: person,
}

export const routes = [
  {
    path: '/',
    title: 'Nicolas Pandraud - DevOps AWS freelance à Lyon & Lead Fullstack',
    description:
      'DevOps AWS et lead développeur fullstack freelance à Lyon, certifié AWS Solutions Architect Associate : architecture cloud, CDK, CI/CD, React et Node.js.',
    jsonLd: homeJsonLd,
  },
  {
    path: '/cv',
    title: 'CV - Nicolas Pandraud, DevOps AWS & Lead Fullstack à Lyon',
    description:
      'CV de Nicolas Pandraud : DevOps AWS certifié Solutions Architect Associate et lead développeur fullstack (React, Angular, Node.js, CDK, CI/CD), freelance à Lyon.',
    jsonLd: cvJsonLd,
  },
]
