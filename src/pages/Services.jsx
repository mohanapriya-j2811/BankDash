import { HeartPulse, ShoppingBag, ShieldCheck, Banknote, Briefcase, BarChart3, User } from 'lucide-react'
import { Section, Panel, IconBadge } from '../components/Card'

const top = [
  { i: HeartPulse, c: 'blue', t: 'Life Insurance', s: 'Unlimited protection' },
  { i: ShoppingBag, c: 'amber', t: 'Shopping', s: 'Buy. Think. Grow.' },
  { i: ShieldCheck, c: 'teal', t: 'Safety', s: 'We are your allies' },
]
const list = [
  { i: Banknote, c: 'pink', t: 'Business loans' },
  { i: Briefcase, c: 'amber', t: 'Checking accounts' },
  { i: BarChart3, c: 'pink', t: 'Savings accounts' },
  { i: User, c: 'blue', t: 'Debit and credit cards' },
  { i: ShieldCheck, c: 'teal', t: 'Life Insurance' },
  { i: Banknote, c: 'pink', t: 'Business loans' },
]

export default function Services() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        {top.map((x) => (
          <Panel key={x.t} className="flex items-center gap-4 !p-4 sm:!p-5">
            <IconBadge icon={x.i} color={x.c} className="!h-14 !w-14" />
            <div><p className="font-semibold">{x.t}</p><p className="text-sm text-muted">{x.s}</p></div>
          </Panel>
        ))}
      </div>

      <Section title="Bank Services List">
        <div className="space-y-3">
          {list.map((x, idx) => (
            <Panel key={idx} className="flex flex-wrap items-center gap-4 !p-4">
              <IconBadge icon={x.i} color={x.c} round={false} className="!rounded-xl" />
              <div className="min-w-[160px] flex-1 lg:flex-none lg:w-[200px]">
                <p className="text-sm font-medium">{x.t}</p>
                <p className="text-xs text-muted">It is a long established</p>
              </div>
              {[1, 2, 3].map((n) => (
                <div key={n} className="hidden flex-1 text-sm lg:block">
                  <p className="font-medium">Lorem Ipsum</p><p className="text-xs text-muted">Many publishing</p>
                </div>
              ))}
              <button className={`ml-auto rounded-full border px-6 py-2 text-xs ${idx === 2 ? 'border-primary text-primary' : 'border-slate-300 text-muted'}`}>
                View Details
              </button>
            </Panel>
          ))}
        </div>
      </Section>
    </div>
  )
}