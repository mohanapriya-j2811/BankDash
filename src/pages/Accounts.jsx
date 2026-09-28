import { Wallet, HandCoins, Receipt, PiggyBank, RefreshCw, Wrench, User, Apple, Gamepad2 } from 'lucide-react'
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from 'recharts'
import Card, { Section, Panel, IconBadge } from '../components/Card'
import BankCard from '../components/BankCard'

const stats = [
  { icon: Wallet, color: 'amber', title: 'My Balance', value: '$12,750' },
  { icon: HandCoins, color: 'blue', title: 'Income', value: '$5,600' },
  { icon: Receipt, color: 'pink', title: 'Expense', value: '$3,460' },
  { icon: PiggyBank, color: 'teal', title: 'Total Saving', value: '$7,920' },
]
const last = [
  { i: RefreshCw, c: 'teal', t: 'Spotify Subscription', d: '25 Jan 2021', type: 'Shopping', s: 'Pending', a: '-$150' },
  { i: Wrench, c: 'blue', t: 'Mobile Service', d: '25 Jan 2021', type: 'Service', s: 'Completed', a: '-$340' },
  { i: User, c: 'pink', t: 'Emily Wilson', d: '25 Jan 2021', type: 'Transfer', s: 'Completed', a: '+$780' },
]
const chart = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((d, i) => ({
  d, Debit: [280, 220, 210, 400, 300, 330, 380][i], Credit: [440, 380, 290, 260, 430, 210, 440][i],
}))
const invoices = [
  { i: Apple, c: 'teal', n: 'Apple Store', t: '5h ago', a: '$450' },
  { i: User, c: 'amber', n: 'Michael', t: '2 days ago', a: '$160' },
  { i: Gamepad2, c: 'blue', n: 'Playstation', t: '5 days ago', a: '$1085' },
  { i: User, c: 'pink', n: 'William', t: '10 days ago', a: '$90' },
]

export default function Accounts() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => <Card key={s.title} {...s} />)}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Section title="Last Transaction" className="lg:col-span-2">
          <Panel className="space-y-5">
            {last.map((x) => (
              <div key={x.t} className="flex flex-wrap items-center gap-3 sm:flex-nowrap">
                <IconBadge icon={x.i} color={x.c} round={false} className="!h-12 !w-12" />
                <div className="min-w-[150px] flex-1">
                  <p className="text-sm font-medium">{x.t}</p>
                  <p className="text-xs text-muted">{x.d}</p>
                </div>
                <span className="hidden w-20 text-sm text-muted sm:block">{x.type}</span>
                <span className="hidden w-24 text-sm text-muted md:block">1234 ****</span>
                <span className="hidden w-24 text-sm text-muted sm:block">{x.s}</span>
                <span className={`ml-auto text-sm font-medium ${x.a.startsWith('-') ? 'text-danger' : 'text-ok'}`}>{x.a}</span>
              </div>
            ))}
          </Panel>
        </Section>

        <Section title="My Card" action={<button className="text-sm font-semibold">See All</button>}>
          <BankCard variant="sky" />
        </Section>

        <Section title="Debit & Credit Overview" className="lg:col-span-2">
          <Panel className="h-[320px]">
            <p className="mb-2 text-xs text-muted sm:text-sm">$7,560 Debited & $5,420 Credited in this Week</p>
            <ResponsiveContainer height="85%">
              <BarChart data={chart} barGap={4}>
                <XAxis dataKey="d" axisLine={false} tickLine={false} tick={{ fill: '#718EBF', fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="Debit" fill="#1814F3" radius={8} barSize={20} />
                <Bar dataKey="Credit" fill="#FCAA0B" radius={8} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </Panel>
        </Section>

        <Section title="Invoices Sent">
          <Panel className="space-y-5">
            {invoices.map((v) => (
              <div key={v.n} className="flex items-center gap-3">
                <IconBadge icon={v.i} color={v.c} round={false} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-muted">{v.n}</p>
                  <p className="text-xs text-muted">{v.t}</p>
                </div>
                <span className="text-sm text-muted">{v.a}</span>
              </div>
            ))}
          </Panel>
        </Section>
      </div>
    </div>
  )
}