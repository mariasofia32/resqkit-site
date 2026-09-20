import Icon from './Icon.jsx'

const CARDS = [
  {
    icon: 'schedule',
    title: 'Timpul contează',
    text: 'Ajutorul nu ajunge întotdeauna imediat. Fiecare minut poate face diferența.',
  },
  {
    icon: 'psychology',
    title: 'Panica blochează',
    text: 'În situații critice, stresul face dificilă luarea deciziilor corecte.',
  },
  {
    icon: 'medical_services',
    title: 'Trusa este pasivă',
    text: 'Ai materialele, dar nu știi exact ce să faci în funcție de situație.',
  },
  {
    icon: 'event_busy',
    title: 'Consumabile expirate',
    text: 'Produsele se pot expira fără să observi, iar trusa devine inutilă.',
  },
]

export default function Problem() {
  return (
    <section id="problema" className="section problem">
      <span className="eyebrow eyebrow--center">Problema</span>
      <h2 className="section-title">Trusa există. Ghidarea lipsește.</h2>

      <div className="grid grid--4">
        {CARDS.map((c) => (
          <div key={c.title} className="card problem__card">
            <div className="icon-badge"><Icon name={c.icon} /></div>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
          </div>
        ))}
      </div>

      <div className="card problem__stat">
        <div className="problem__stat-text">
          <span className="eyebrow">Ce arată datele?</span>
          <p>
            Rezultatele chestionarului nostru arată diferența dintre ce cred oamenii că
            știu și ce știu de fapt să facă atunci când sunt puși în situație.
          </p>
        </div>

        <div className="problem__stat-numbers">
          <div>
            <strong className="stat-blue">36%</strong>
            <span>se consideră pregătiți să acorde primul ajutor</span>
          </div>
          <div>
            <strong className="stat-blue">39%</strong>
            <span>reușesc să acționeze corect într-o situație concretă</span>
          </div>
          <div>
            <strong className="stat-blue">22%</strong>
            <span>verifică periodic trusa medicală</span>
          </div>
        </div>

        <div className="donut-wrap">
          <div className="donut" style={{ '--pct': 34 }}>
            <span>36%</span>
          </div>
          <div className="donut-legend">
            <span><i className="dot dot--fill" /> Acționează corect</span>
            <span><i className="dot dot--track" /> Se consideră pregătiți</span>
          </div>
        </div>
      </div>
    </section>
  )
}