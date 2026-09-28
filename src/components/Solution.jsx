const STEPS = [
  {
    n: '01',
    title: 'Deschizi aplicația',
    text: 'La o urgență, apeși pe ResQKit',
  },
  {
    n: '02',
    title: 'Alegi situația',
    text: 'Selectezi tipul de rană/urgență sau ceri ajutor de la Asistentul AI.',
  },
  {
    n: '03',
    title: 'Ghidaj pas cu pas',
    text: 'Aplicația recomandă instrucțiuni clare, adaptate situației, fără termeni medicali complicați.',
  },
  {
    n: '04',
    title: 'Verifici ce materiale ai',
    text: 'Urmezi pașii afișați pe ecran, în ordine, până la finalizarea intervenției.',
  },
  {
    n: '05',
    title: 'Predai informațiile echipajului medical',
    text: 'Locația, contextul și informațiile relevante sunt transmise automat către dispecerat.',
  },
]

export default function Solution() {
  return (
    <section id="solutia" className="section solution">
      <div className="solution__intro">
        <span className="eyebrow eyebrow--center">Soluția</span>
        <h2 className="section-title">
          Transformăm trusa ta <span className="text-gradient">într-un sistem inteligent.</span>
        </h2>
        <p className="section-lead">
          ResQKit nu înlocuiește trusa medicală — o face utilizabilă. Un singur modul
          electronic reutilizabil, gândit pentru secundele în care nu ai timp să gândești.
        </p>
      </div>

      <div className="steps">
        {STEPS.map((s) => (
          <div key={s.n} className="card steps__card">
            <span className="steps__n">{s.n}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>

      <div className="card solution__quote">
        <p>
          Nu putem preveni fiecare accident. <span className="text-gradient">Dar putem fi mai pregătiți pentru el.</span>
        </p>
      </div>
    </section>
  )
}
