import { useEffect, useRef } from 'react'

/**
 * Déclenche une animation quand l'élément entre dans le viewport.
 * Ajoute la classe CSS `is-visible` sur l'élément référencé.
 * @param {number} delay - délai en ms avant d'appliquer la classe
 */
export function useReveal(delay = 0) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay) {
            setTimeout(() => el.classList.add('is-visible'), delay)
          } else {
            el.classList.add('is-visible')
          }
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return ref
}
