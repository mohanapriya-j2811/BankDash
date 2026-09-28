import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, AreaChart, Area, Legend } from 'recharts'
import { Send, ChevronRight, CreditCard, Wallet } from 'lucide-react'
import BankCard from '../components/BankCard'
import { Section, Panel, IconBadge } from '../components/Card'

const days = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']
const dep = [480, 350, 330, 480, 150, 390, 395]
const wit = [240, 130, 260, 370, 240, 240, 335]
const weekly = days.map((d, i) => ({ d, Deposit: dep[i], Withdraw: wit[i] }))

const pie = [
  { name: 'Entertainment', value: 30, c: '#343C6A' },
  { name: 'Bill Expense', value: 15, c: '#FC7900' },
  { name: 'Others', value: 35, c: '#1814F3' },
  { name: 'Investment', value: 20, c: '#FA00FF' },
]

const balance = [
  ['Jul', 120], ['', 300], ['', 250], ['', 480], ['', 400], ['Aug', 780], ['', 400], ['', 210],
  ['', 560], ['', 420], ['', 230], ['Jan', 640], ['', 600],
].map(([m, v]) => ({ m, v }))

const tx = [
  { t: 'Deposit from my Card', d: '28 January 2021', a: '-$850', neg: true, icon: CreditCard, c: 'amber' },
  { t: 'Deposit Paypal', d: '25 January 2021', a: '+$2,500', icon: Wallet, c: 'blue' },
  { t: 'Jemi Wilson', d: '21 January 2021', a: '+$5,400', icon: Wallet, c: 'teal' },
]

const people = [
  { n: 'Livia Bator', r: 'CEO', img: 32 },
  { n: 'Randy Press', r: 'Director', img: 12 },
  { n: 'Workman', r: 'Designer', img: 15 },
]

export default function Dashboard() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <Section title="My Cards" className="lg:col-span-2"
        action={<button className="text-sm font-semibold">See All</button>}>
        <div className="grid gap-4 sm:grid-cols-2">
          <BankCard variant="dark" />
          <BankCard variant="white" />
        </div>
      </Section>

      <Section title="Recent Transaction">
        <Panel className="space-y-4">
          {tx.map((x) => (
            <div key={x.t} className="flex items-center gap-3">
              <IconBadge icon={x.icon} color={x.c} className="!h-11 !w-11" />
              <div className="flex-1">
                <p className="text-sm font-medium">{x.t}</p>
                <p className="text-xs text-muted">{x.d}</p>
              </div>
              <span className={`text-sm font-medium ${x.neg ? 'text-danger' : 'text-ok'}`}>{x.a}</span>
            </div>
          ))}
        </Panel>
      </Section>

      <Section title="Weekly Activity" className="lg:col-span-2">
        <Panel className="h-[300px] sm:h-[340px]">
          <ResponsiveContainer>
            <BarChart data={weekly} barGap={6}>
              <CartesianGrid vertical={false} stroke="#F0F0F0" />
              <XAxis dataKey="d" tick={{ fill: '#718EBF', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#718EBF', fontSize: 12 }} axisLine={false} tickLine={false} width={35} />
              <Tooltip />
              <Legend verticalAlign="top" align="right" iconType="circle" />
              <Bar dataKey="Deposit" fill="#1814F3" radius={20} barSize={12} />
              <Bar dataKey="Withdraw" fill="#16DBCC" radius={20} barSize={12} />
            </BarChart>
          </ResponsiveContainer>
        </Panel>
      </Section>

      <Section title="Expense Statistics">
        <Panel className="h-[300px] sm:h-[340px] !p-2">
          <ResponsiveContainer>
            <PieChart>
              <Pie data={pie} dataKey="value" outerRadius="85%" stroke="#fff" strokeWidth={4}
                label={({ value }) => `${value}%`} labelLine={false}>
                {pie.map((p) => <Cell key={p.name} fill={p.c} />)}
              </Pie>
              <Legend iconType="circle" wrapperStyle={{ fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
        </Panel>
      </Section>

      <Section title="Quick Transfer">
        <Panel>
          <div className="flex items-center justify-between gap-2">
            {people.map((p) => (
              <div key={p.n} className="text-center">
                <img src={`https://i.pravatar.cc/80?img=${p.img}`} className="mx-auto h-14 w-14 rounded-full object-cover sm:h-16 sm:w-16" />
                <p className="mt-2 text-xs font-medium sm:text-sm">{p.n}</p>
                <p className="text-xs text-muted">{p.r}</p>
              </div>
            ))}
            <button className="flex h-10 w-10 items-center justify-center rounded-full shadow"><ChevronRight size={18} /></button>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <span className="hidden text-sm text-muted sm:block">Write Amount</span>
            <div className="flex flex-1 items-center rounded-full bg-page">
              <input defaultValue="525.50" className="w-full bg-transparent px-5 py-3 text-sm outline-none" />
              <button className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white">
                Send <Send size={16} />
              </button>
            </div>
          </div>
        </Panel>
      </Section>

      <Section title="Balance History" className="lg:col-span-2">
        <Panel className="h-[260px]">
          <ResponsiveContainer>
            <AreaChart data={balance}>
              <defs>
                <linearGradient id="bh" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1814F3" stopOpacity={0.25} />
                  <stop offset="100%" stopColor="#1814F3" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E6EFF5" />
              <XAxis dataKey="m" tick={{ fill: '#718EBF', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#718EBF', fontSize: 12 }} axisLine={false} tickLine={false} width={35} />
              <Tooltip />
              <Area type="monotone" dataKey="v" stroke="#1814F3" strokeWidth={3} fill="url(#bh)" />
            </AreaChart>
          </ResponsiveContainer>
        </Panel>
      </Section>
    </div>
  )
}