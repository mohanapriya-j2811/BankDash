import { User, Briefcase, BarChart3, Wrench } from 'lucide-react'
import Card, { Section, Panel } from '../components/Card'

const stats = [
  { icon: User, color: 'blue', title: 'Personal Loans', value: '$50,000' },
  { icon: Briefcase, color: 'amber', title: 'Corporate Loans', value: '$100,000' },
  { icon: BarChart3, color: 'pink', title: 'Business Loans', value: '$500,000' },
  { icon: Wrench, color: 'teal', title: 'Custom Loans', value: 'Choose Money' },
]
const rows = [
  ['$100,000', '$40,500', '8 Months', '12%', '$2,000 / month'],
  ['$500,000', '$250,000', '36 Months', '10%', '$8,000 / month'],
  ['$900,000', '$40,500', '12 Months', '12%', '$5,000 / month'],
  ['$50,000', '$40,500', '25 Months', '5%', '$2,000 / month'],
  ['$50,000', '$40,500', '5 Months', '16%', '$10,000 / month'],
  ['$80,000', '$25,500', '14 Months', '8%', '$2,000 / month'],
  ['$12,000', '$5,500', '9 Months', '13%', '$500 / month'],
  ['$160,000', '$100,800', '3 Months', '12%', '$900 / month'],
]

export default function Loans() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => <Card key={s.title} {...s} />)}
      </div>

      <Section title="Active Loans Overview">
        <Panel className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="text-muted">
              <tr className="border-b border-slate-100">
                {['SL No', 'Loan Money', 'Left to repay', 'Duration', 'Interest rate', 'Installment', 'Repay'].map((h) => (
                  <th key={h} className="pb-4 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-b border-slate-50">
                  <td className="py-4">0{i + 1}.</td>
                  {r.map((c) => <td key={c + i}>{c}</td>)}
                  <td>
                    <button className={`rounded-full border px-6 py-1.5 text-xs ${i === 0 ? 'border-primary text-primary' : 'border-ink'}`}>Repay</button>
                  </td>
                </tr>
              ))}
              <tr className="font-medium text-danger">
                <td className="pt-4">Total</td><td>$125,0000</td><td>$750,000</td><td /><td /><td>$50,000 / month</td><td />
              </tr>
            </tbody>
          </table>
        </Panel>
      </Section>
    </div>
  )
}