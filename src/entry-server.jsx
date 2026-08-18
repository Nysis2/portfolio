import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

export { routes, SITE_URL } from './routes.js'

/**
 * Rend une route en HTML statique (appele par prerender.js au build).
 * @param {string} url - chemin de la route, ex. '/cv'
 * @returns {string} markup HTML injecte dans #root
 */
export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  )
}
