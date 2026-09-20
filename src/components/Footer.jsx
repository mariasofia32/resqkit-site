import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__band">
        <svg
          className="footer__pulse"
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polyline
            points="0,40 150,40 180,10 210,70 240,15 270,40 500,40 530,25 560,55 590,40 900,40 930,15 960,65 990,40 1200,40"
            fill="none"
            stroke="#8bc34a"
            strokeWidth="2.5"
          />
        </svg>

        <h2>Nu e suficient să ai o trusă.</h2>
        <p>Trebuie să știi ce să faci cu ea.</p>

        <a href="#produs" className="btn btn--accent btn--lg">
          Descoperă ResQ Kit
        </a>
      </div>

      <div className="footer__bottom">
        <Logo size={26} />

        <div className="footer__links">
          <a href="#problema">Problema</a>
          <a href="#solutia">Soluția</a>
          <a href="#produs">Produsul</a>
          <a href="#echipa">Echipa</a>
        </div>

        <div className="footer__socials">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.67.33-1 1-1z"
              />
            </svg>
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle
                cx="12"
                cy="12"
                r="4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
