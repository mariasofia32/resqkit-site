import AppScreens from './AppScreens.jsx'
import FeatureStrip from './FeatureStrip.jsx'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="section hero__inner">
        <div className="hero__copy">
          <h1>
            Când apare urgența,
            <br />
            nu trebuie să știi tot.
          </h1>
          <p className="hero__lead">
            ResQ Kit te ghidează pas cu pas în primul ajutor și te ajută să reacționezi
            corect atunci când fiecare secundă contează.
          </p>
          <div className="hero__actions">
            <a href="#solutia" className="btn btn--accent btn--lg">Descoperă soluția</a>
            <a href="#solutia" className="btn btn--ghost btn--lg">▶ Vezi cum funcționează</a>
          </div>
        </div>

        <div className="hero__visual">
          <AppScreens />
        </div>
      </div>

      <div className="section hero__strip-wrap">
        <FeatureStrip />
      </div>
    </section>
  )
}