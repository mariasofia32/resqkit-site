const MEMBERS = [
  { name: 'Vicașiu Vlad', role: ' Team Lead & Backend Developer', initials: 'VV', photo: '/team/vicasiu-vlad.jpg' },
  { name: 'Gruber Alexandra', role: 'Frontend developer & Design Lead', initials: 'GA', photo: '/team/gruber-alexandra.jpg' },
  { name: 'Nossa Maria', role: 'Frontend developer & Marketing', initials: 'NM', photo: '/team/nossa-maria.jpg' },
  { name: 'Voina Alexandru', role: 'Business Lead', initials: 'VA', photo: '/team/voina-alexandru.jpg' },
  { name: 'Roșoga Matei', role: 'AI Lead & Backend Developer', initials: 'RM', photo: '/team/rosoga-matei.jpg' },
  { name: 'Bojan Maia', role: ' Social Media Manager & Marketing', initials: 'BM', photo: '/team/bojan-maia.jpg' },
  { name: 'Petru-Man Luca', role: 'Backend Lead & Business', initials: 'PL', photo: '/team/petru-man-luca.jpg' },
]

const MENTORS = [
  { name: 'Oana Ungurașu', role: 'Software Engineer', initials: 'OU', photo: '/team/oana-ungurasu.jpg' },
  { name: 'Edward Vlad', role: 'Software Engineer', initials: 'Ev', photo: '/team/edward-vlad.jpg' },
  { name: 'Mircea Nealcoș', role: 'Java Developer', initials: 'MN', photo: '/team/mircea-nealcos.jpg' },
]

function PersonCard({ name, role, initials, photo }) {
  return (
    <div className="person">
      <div className="person__frame">
        {photo ? (
          <img src={photo} alt={name} className="person__photo" />
        ) : (
          <span>{initials}</span>
        )}
      </div>
      <strong>{name}</strong>
      <span className="person__role">{role}</span>
    </div>
  )
}

export default function Team() {
  return (
    <section id="echipa" className="section team">
      <span className="eyebrow eyebrow--center">Despre echipă</span>
      <h2 className="section-title">
        O echipă care construiește pentru momentele
        <br className="hide-mobile" /> în care fiecare secundă contează.
      </h2>

      <h3 className="team__subtitle">Membri echipă</h3>
      <div className="grid grid--team">
        {MEMBERS.map((m) => (
          <PersonCard key={m.name} {...m} />
        ))}
      </div>

      <h3 className="team__subtitle">Mentori</h3>
      <div className="grid grid--team grid--mentors">
        {MENTORS.map((m) => (
          <PersonCard key={m.name} {...m} />
        ))}
      </div>
    </section>
  )
}