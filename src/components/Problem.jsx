import Icon from './Icon.jsx'

const CARDS = [
  {
    icon: 'schedule',
    title: 'Timpul contează',
    text: 'Fiecare minut fără resuscitare scade șansele de supraviețuire cu aproximativ 10%.',
  },
  {
    icon: 'psychology',
    title: 'Panica blochează',
    text: 'Peste jumătate dintre români recunosc că ar paraliza în fața unei situații critice.',
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
            Studiile naționale recente arată o diferență clară între cât de pregătiți
            se cred românii să acorde primul ajutor și cât de pregătiți sunt de fapt
            atunci când sunt puși în situație.
          </p>
        </div>

        <div className="problem__stat-numbers">
          <div>
            <strong className="stat-blue">70.000</strong>
            <span>de vieți pierdute anual în România din lipsa intervenției rapide</span>
          </div>
          <div>
            <strong className="stat-blue">82%</strong>
            <span>dintre români nu au cunoștințele necesare pentru a acorda corect primul ajutor</span>
          </div>
          <div>
            <strong className="stat-blue">18%</strong>
            <span>au urmat vreodată un curs de prim ajutor</span>
          </div>
        </div>

        <div className="donut-wrap">
          <div className="donut" style={{ '--pct': 82 }}>
            <span>82%</span>
          </div>
          <div className="donut-legend">
            <span><i className="dot dot--fill" /> Nu știu să acorde primul ajutor</span>
            <span><i className="dot dot--track" /> Au cunoștințele necesare</span>
          </div>
        </div>
      </div>

      <p className="problem__source">
        Surse:{' '}
        <a href="https://www.antena3.ro/life/sanatate/studiu-romanii-vor-sa-acorde-primul-ajutor-dar-nu-stiu-cum-sa-se-descurce-in-situatii-de-urgenta-781936.html" target="_blank" rel="noopener noreferrer">
          Antena3 CNN, barometrul „Viață pentru viață" (2026)
        </a>{' '}
        și{' '}
        <a href="https://www.piatafinanciara.ro/studiu-groupama-82-dintre-romani-nu-stiu-sa-acorde-corect-primul-ajutor-chiar-daca-unul-din-cinci-marturisesc-ca-au-fost-martori-intr-o-situatie-de-urgenta/" target="_blank" rel="noopener noreferrer">
          Piața Financiară, studiu Groupama (2026)
        </a>
      </p>
    </section>
  )
}