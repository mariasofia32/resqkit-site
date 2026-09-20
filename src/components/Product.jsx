import Icon from './Icon.jsx'

const FEATURES = [
  {
    icon: 'explore',
    title: 'Ghidare pas cu pas',
    text: 'Instrucțiuni audio-video clare pentru orice situație, create împreună cu organizații medicale certificate.',
  },
  {
    icon: 'smart_toy',
    title: 'Recomandare inteligentă',
    text: 'Aplicația orientează spre protocolul potrivit, fără să pună diagnostice — doar direcție clară, rapid.',
  },
  {
    icon: 'inventory_2',
    title: 'Monitorizare consumabile',
    text: 'Notificări automate pentru expirarea produselor sterile și starea generală a trusei.',
  },
  {
    icon: 'call',
    title: 'Asistență și raport către 112',
    text: 'Locație GPS, context și informații esențiale sunt trimise automat către dispecerat, la nevoie.',
  },
  {
    icon: 'wifi_off',
    title: 'Funcționare offline',
    text: 'Tutorialele și ghidajul pas cu pas rămân disponibile chiar și fără semnal sau internet.',
  },
  {
    icon: 'autorenew',
    title: 'Modul reutilizabil',
    text: 'Un singur dispozitiv electronic, cu consumabile înlocuibile — nu arunci nimic la fiecare expirare.',
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