import { useEffect, useState } from 'react'

// Pune cele 5 poze reale din aplicație în: public/app-screens/
// denumite exact screen-1.png ... screen-5.png
const IMAGES = [
  '/app-screens/screen-1.png',
  '/app-screens/screen-2.png',
  '/app-screens/screen-3.png',
  '/app-screens/screen-4.png',
  '/app-screens/screen-5.png',
  '/app-screens/screen-6.png',
  '/app-screens/screen-7.png',
]

const INTERVAL_MS = 2800 // la cât timp se schimbă imaginea (2.8 secunde)

export default function AppScreens() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % IMAGES.length)
    }, INTERVAL_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="app-screens">
      <div className="app-screens__glow" aria-hidden="true" />

      <div className="app-screens__frame">
        {IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Captură din aplicația ResQ Kit, ecran ${i + 1}`}
            className={`app-screens__img ${i === index ? 'is-active' : ''}`}
          />
        ))}
      </div>

      <div className="app-screens__dots">
        {IMAGES.map((src, i) => (
          <button
            key={src}
            className={i === index ? 'is-active' : ''}
            aria-label={`Arată ecranul ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}