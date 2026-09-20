import Icon from './Icon.jsx'

const FEATURES = [
  {
    icon: 'collections_bookmark',
    title: 'Bibliotecă de ghiduri de prim ajutor',
    text: 'Căutare + listă organizată pe categorii, fiecare ghid marcat cu nivel de urgență.',
  },
  {
    icon: 'smart_toy',
    title: 'Asistent AI conversațional',
    text: 'Chat cu asistentul ResQKit AI — poate analiza o rană dintr-o poză.',
  },
  {
    icon: 'inventory_2',
    title: 'Ghidare de urgență interactivă, pas cu pas',
    text: 'Un flux de tip arbore-decizional, cu taburi separate pentru Victimă / Materiale / Victime.',
  },
  {
    icon: 'local_hospital',
    title: 'Predare informații către echipajul medical',
    text: 'La sosirea ambulanței, aplicația generează automat un rezumat al intervenției din sesiune.',
  },
  {
    icon: 'model_training',
    title: 'Mod de exersare (training)',
    text: 'Permite antrenarea pe ghiduri într-un mediu sigur, fără o urgență reală.',
  },
  {
    icon: 'motion_play',
    title: 'Continuarea unei intervenții în desfășurare',
    text: 'Dacă există o sesiune activă salvată pe dispozitiv, aplicația oferă direct opțiunea de a o relua din ecranul principal.',
  },
]

export default function Product() {
  return (
    <section id="produs" className="section product">
      <span className="eyebrow eyebrow--center">Produsul</span>
      <h2 className="section-title">Un modul mic. O diferență mare.</h2>
      <p className="section-lead">
        ResQKit se instalează în orice trusă medicală auto și se conectează la telefonul
        tău prin Bluetooth. Restul se întâmplă automat, exact când ai nevoie.
      </p>

      <div className="grid grid--3">
        {FEATURES.map((f) => (
          <div key={f.title} className="card product__card">
            <div className="icon-badge icon-badge--lg"><Icon name={f.icon} size={26} /></div>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}