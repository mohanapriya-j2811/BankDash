import { useState } from 'react'
import { ArrowUp, ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react'
import { ResponsiveContainer, BarChart, Bar, XAxis, Cell, LabelList } from 'recharts'
import BankCard from '../components/BankCard'
import { Section, Panel } from '../components/Card'

const rows = [
  ['Spotify Subscription', 'Shopping', '28 Jan, 12.30 AM', -2500],
  ['Freepik Sales', 'Transfer', '25 Jan, 10.40 PM', 750],
  ['Mobile Service', 'Service', '20 Jan, 10.40 PM', -150],
  ['Wilson', 'Transfer', '15 Jan, 03.29 PM', -1050],
  ['Emilly', 'Transfer', '14 Jan, 10.40 PM', 840],
]
const expense = [['Aug', 6], ['Sep', 10], ['Oct', 7], ['Nov', 4], ['Dec', 9], ['Jan', 6]]
  .map(([m, v]) => ({ m, v }))

export default function Transactions() {
  const [tab, setTab] = useState('All Transactions')
  const [page, setPage] = useState(1)
  const data = rows.filter((r) =>
    tab === 'Income' ? r[3] > 0 : tab === 'Expense' ? r[3] < 0 : true
  )

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <Section title="My Cards" className="lg:col-span-2"
        action={<button className="text-sm font-semibold">+ Add Card</button>}>
        <div className="grid gap-4 sm:grid-cols-2">
          <BankCard variant="dark" />
          <BankCard variant="white" />
        </div>
      </Section>

      <Section title="My Expense">
        <Panel className="h-[190px] sm:h-[200px]">
          <ResponsiveContainer>
            <BarChart data={expense}>
              <XAxis dataKey="m" axisLine={false} tickLine={false} tick={{ fill: '#718EBF', fontSize: 12 }} />
              <Bar dataKey="v" radius={12} barSize={28}>
                {expense.map((e) => <Cell key={e.m} fill={e.m === 'Dec' ? '#16DBCC' : '#EDF0F7'} />)}
                <LabelList dataKey="v" position="top" formatter={(v) => (v === 9 ? '$12,500' : '')} fontSize={11} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Panel>
      </Section>

      <Section title="Recent Transactions" className="lg:col-span-3">
        <div className="mb-3 flex gap-6 border-b border-slate-200 text-sm font-medium text-muted">
          {['All Transactions', 'Income', 'Expense'].map((t) => (
            <button key={t} onClick={() => setTab(t)}
              className={`pb-3 ${tab === t ? 'border-b-2 border-primary text-primary' : ''}`}>{t}</button>
          ))}
        </div>

        <Panel className="overflow-x-auto !p-0">
          <table className="w-full min-w-[820px] text-left text-sm">
            <thead className="text-muted">
              <tr className="border-b border-slate-100">
                {['Description', 'Transaction ID', 'Type', 'Card', 'Date', 'Amount', 'Receipt'].map((h) => (
                  <th key={h} className="px-6 py-4 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map(([d, type, date, amt]) => (
                <tr key={d} className="border-b border-slate-50">
                  <td className="flex items-center gap-3 px-6 py-4">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-muted text-muted">
                      {amt < 0 ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
                    </span>{d}
                  </td>
                  <td className="px-6">#12548796</td>
                  <td className="px-6">{type}</td>
                  <td className="px-6">1234 ****</td>
                  <td className="px-6">{date}</td>
                  <td className={`px-6 ${amt < 0 ? 'text-danger' : 'text-ok'}`}>
                    {amt < 0 ? '-' : '+'}${Math.abs(amt).toLocaleString()}
                  </td>
                  <td className="px-6">
                    <button className="rounded-full border border-primary px-5 py-1 text-xs text-primary">Download</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Panel>

        <div className="mt-6 flex items-center justify-end gap-4 text-sm text-primary">
          <button className="flex items-center"><ChevronLeft size={16} /> Previous</button>
          {[1, 2, 3, 4].map((n) => (
            <button key={n} onClick={() => setPage(n)}
              className={`h-9 w-9 rounded-lg ${page === n ? 'bg-primary text-white' : ''}`}>{n}</button>
          ))}
          <button className="flex items-center">Next <ChevronRight size={16} /></button>
        </div>
      </Section>
    </div>
  )
}