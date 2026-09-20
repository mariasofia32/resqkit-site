export default function Logo({ size = 34 }) {
  return (
    <div className="logo-mark">
      <img
        src="/logo.png"
        alt="ResQKit — Emergency First Aid"
        className="logo-img"
        style={{ height: size * 1.55 }}
      />
    </div>
  )
}