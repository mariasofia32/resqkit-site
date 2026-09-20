import Icon from './Icon.jsx'

const ITEMS = [
  { icon: 'explore', label: 'Ghidare pas cu pas' },
  { icon: 'smart_toy', label: 'AI care orientează (fără diagnostic)' },
  { icon: 'inventory_2', label: 'Monitorizare consumabile' },
  { icon: 'call', label: 'Asistență 112 & raport de context' },
  { icon: 'wifi_off', label: 'Funcționare offline' },
]

export default function FeatureStrip() {
  return (
    <div className="feature-strip">
      {ITEMS.map((it) => (
        <div key={it.label} className="feature-chip">
          <span className="feature-chip__icon"><Icon name={it.icon} /></span>
          <span>{it.label}</span>
        </div>
      ))}
    </div>
  )
}