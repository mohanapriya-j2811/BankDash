import { Coins, PieChart as PieIcon, Repeat, Apple, Globe, Car } from 'lucide-react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import Card, { Section, Panel, IconBadge } from '../components/Card'

const yearly = [[2016, 6], [2017, 24], [2018, 16], [2019, 37], [2020, 21], [2021, 30]].map(([y, v]) => ({ y, v: v * 1000 }))
const monthly = [[2016, 11], [2016.4, 14], [2016.8, 21], [2017.3, 12], [2017.7, 26], [2018.2, 32], [2018.7, 24],
  [2019, 21], [2019.5, 29], [2020, 24], [2020.5, 15], [2021, 35]].map(([y, v]) => ({ y, v: v * 1000 }))

const mine = [
  { i: Apple, c: 'pink', n: 'Apple Store', s: 'E-commerce, Marketplace', v: '$54,000', r: '+16%' },
  { i: Globe, c: 'blue', n: 'Samsung Mobile', s: 'E-commerce, Marketplace', v: '$25,300', r: '-4%' },
  { i: Car, c: 'amber', n: 'Tesla Motors', s: 'Electric Vehicles', v: '$8,200', r: '+25%' },
]
const stocks = [['Trivago', '$520', '+5%'], ['Canon', '$480', '+10%'], ['Uber Food', '$350', '-3%'], ['Nokia', '$940', '+2%'], ['Tiktok', '$670', '-12%']]

const axis = { tick: { fill: '#718EBF', fontSize: 12 }, axisLine: false, tickLine: false }
const money = (v) => `$${v / 1000},000`.replace(',000', ',000')

function Chart({ data, color, dots, type = 'linear' }) {
  return (
    <Panel className="h-[260px] sm:h-[300px]">
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E6EFF5" vertical={false} />
          <XAxis dataKey="y" type="number" domain={[2016, 2021]} ticks={[2016, 2017, 2018, 2019, 2020, 2021]} {...axis} />
          <YAxis tickFormatter={(v) => `$${(v / 1000)},000`.replace('$0,000', '$0')} width={60} {...axis} />
          <Tooltip />
          <Line type={type} dataKey="v" stroke={color} strokeWidth={3} dot={dots ? { r: 4, fill: '#fff', stroke: color, strokeWidth: 2 } : false} />
        </LineChart>
      </ResponsiveContainer>
    </Panel>
  )
}

export default function Investments() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <Card icon={Coins} color="teal" title="Total Invested Amount" value="$150,000" />
        <Card icon={PieIcon} color="pink" title="Number of Investments" value="1,250" />
        <Card icon={Repeat} color="blue" title="Rate of Return" value="+5.80%" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Section title="Yearly Total Investment"><Chart data={yearly} color="#FCAA0B" dots /></Section>
        <Section title="Monthly Revenue"><Chart data={monthly} color="#16DBCC" type="monotone" /></Section>
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        <Section title="My Investment" className="lg:col-span-3">
          <div className="space-y-3">
            {mine.map((m) => (
              <Panel key={m.n} className="flex flex-wrap items-center gap-4 !p-4">
                <IconBadge icon={m.i} color={m.c} round={false} />
                <div className="min-w-[140px] flex-1">
                  <p className="text-sm font-medium">{m.n}</p>
                  <p className="text-xs text-muted">{m.s}</p>
                </div>
                <div className="text-sm"><p className="font-medium">{m.v}</p><p className="text-xs text-muted">Envestment Value</p></div>
                <div className="text-sm"><p className={`font-medium ${m.r.startsWith('-') ? 'text-danger' : 'text-ok'}`}>{m.r}</p><p className="text-xs text-muted">Return Value</p></div>
              </Panel>
            ))}
          </div>
        </Section>

        <Section title="Trending Stock" className="lg:col-span-2">
          <Panel className="overflow-x-auto">
            <table className="w-full min-w-[320px] text-left text-sm">
              <thead className="text-muted">
                <tr>{['SL No', 'Name', 'Price', 'Return'].map((h) => <th key={h} className="pb-3 font-medium">{h}</th>)}</tr>
              </thead>
              <tbody>
                {stocks.map(([n, p, r], i) => (
                  <tr key={n}>
                    <td className="py-3">0{i + 1}.</td><td>{n}</td><td>{p}</td>
                    <td className={r.startsWith('-') ? 'text-danger' : 'text-ok'}>{r}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Panel>
        </Section>
      </div>
    </div>
  )
}