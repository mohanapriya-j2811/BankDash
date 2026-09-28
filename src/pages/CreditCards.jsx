import { CreditCard, Lock, ChevronDown, Apple } from 'lucide-react'
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import BankCard from '../components/BankCard'
import { Section, Panel, IconBadge } from '../components/Card'

const donut = [
  { n: 'DBL Bank', v: 30, c: '#4C78FF' },
  { n: 'BRC Bank', v: 25, c: '#FF82AC' },
  { n: 'MCP Bank', v: 25, c: '#FFBB38' },
  { n: 'ABM Bank', v: 20, c: '#16DBCC' },
]
const list = [
  { c: 'blue', bank: 'DBL Bank', no: '**** **** 5600', name: 'William' },
  { c: 'pink', bank: 'BRC Bank', no: '**** **** 4300', name: 'Michel' },
  { c: 'amber', bank: 'ABM Bank', no: '**** **** 7560', name: 'Edward' },
]
const settings = [
  { i: CreditCard, c: 'amber', t: 'Block Card', s: 'Instantly block your card' },
  { i: Lock, c: 'blue', t: 'Change Pin Code', s: 'Choose another pin code' },
  { i: CreditCard, c: 'pink', t: 'Add to Google Pay', s: 'Withdraw without any card' },
  { i: Apple, c: 'teal', t: 'Add to Apple Pay', s: 'Withdraw without any card' },
  { i: Apple, c: 'teal', t: 'Add to Apple Store', s: 'Withdraw without any card' },
]

const field = 'w-full rounded-2xl border border-slate-200 px-5 py-3 text-sm text-muted outline-none focus:border-primary'

export default function CreditCards() {
  return (
    <div className="space-y-6">
      <Section title="My Cards">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <BankCard variant="sky" />
          <BankCard variant="dark" />
          <div className="md:col-span-2 xl:col-span-1"><BankCard variant="white" /></div>
        </div>
      </Section>

      <div className="grid gap-6 lg:grid-cols-3">
        <Section title="Card Expense Statistics">
          <Panel className="flex flex-col items-center">
            <div className="h-[200px] w-full">
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={donut} dataKey="v" innerRadius="35%" outerRadius="95%" stroke="#fff" strokeWidth={3}>
                    {donut.map((d) => <Cell key={d.n} fill={d.c} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-xs text-muted">
              {donut.map((d) => (
                <span key={d.n} className="flex items-center gap-2">
                  <i className="h-3 w-3 rounded-full" style={{ background: d.c }} />{d.n}
                </span>
              ))}
            </div>
          </Panel>
        </Section>

        <Section title="Card List" className="lg:col-span-2">
          <div className="space-y-3">
            {list.map((x) => (
              <Panel key={x.bank} className="flex flex-wrap items-center gap-4 !p-4">
                <IconBadge icon={CreditCard} color={x.c} round={false} />
                {[['Card Type', 'Secondary'], ['Bank', x.bank], ['Card Number', x.no], ['Namain Card', x.name]].map(([k, v]) => (
                  <div key={k} className="min-w-[90px] flex-1 text-sm">
                    <p className="font-medium">{k}</p><p className="text-xs text-muted">{v}</p>
                  </div>
                ))}
                <button className="text-sm font-medium text-primary">View Details</button>
              </Panel>
            ))}
          </div>
        </Section>

        <Section title="Add New Card" className="lg:col-span-2">
          <Panel>
            <p className="mb-5 text-sm text-muted">
              Credit Card generally means a plastic card issued by Scheduled Commercial Banks assigned to a Cardholder,
              with a credit limit, that can be used to purchase goods and services on credit or obtain cash advances.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm">Card Type<input className={`${field} mt-2`} placeholder="Classic" /></label>
              <label className="text-sm">Name On Card<input className={`${field} mt-2`} placeholder="My Cards" /></label>
              <label className="text-sm">Card Number<input className={`${field} mt-2`} placeholder="**** **** **** ****" /></label>
              <label className="relative text-sm">Expiration Date
                <input className={`${field} mt-2`} placeholder="25 January 2025" />
                <ChevronDown size={16} className="absolute bottom-3.5 right-4 text-muted" />
              </label>
            </div>
            <button className="mt-6 w-full rounded-xl bg-primary px-8 py-3 text-sm font-medium text-white sm:w-auto">Add Card</button>
          </Panel>
        </Section>

        <Section title="Card Setting">
          <Panel className="space-y-4">
            {settings.map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <IconBadge icon={s.i} color={s.c} round={false} className="!h-11 !w-11" />
                <div><p className="text-sm font-medium">{s.t}</p><p className="text-xs text-muted">{s.s}</p></div>
              </div>
            ))}
          </Panel>
        </Section>
      </div>
    </div>
  )
}