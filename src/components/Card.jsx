export const tones = {
  amber: 'bg-amber-100 text-amber-500',
  blue: 'bg-indigo-100 text-indigo-600',
  pink: 'bg-pink-100 text-pink-500',
  teal: 'bg-teal-100 text-teal-500',
}

export function Section({ title, action, className = '', children }) {
  return (
    <section className={className}>
      <div className="mb-3 flex items-center justify-between sm:mb-4">
        <h2 className="text-base font-semibold text-ink sm:text-[22px]">{title}</h2>
        {action}
      </div>
      {children}
    </section>
  )
}

export function Panel({ className = '', children }) {
  return <div className={`rounded-3xl bg-white p-4 sm:p-6 ${className}`}>{children}</div>
}

export function IconBadge({ icon: Icon, color = 'blue', className = '', round = true }) {
  return (
    <span className={`flex h-12 w-12 shrink-0 items-center justify-center ${round ? 'rounded-full' : 'rounded-2xl'} ${tones[color]} ${className}`}>
      <Icon size={22} />
    </span>
  )
}

/* Reusable stat card */
export default function Card({ icon, color, title, value }) {
  return (
    <Panel className="flex items-center gap-4 !p-4 sm:!p-5">
      <IconBadge icon={icon} color={color} className="!h-14 !w-14" />
      <div>
        <p className="text-sm text-muted">{title}</p>
        <p className="text-lg font-semibold text-ink sm:text-xl">{value}</p>
      </div>
    </Panel>
  )
}