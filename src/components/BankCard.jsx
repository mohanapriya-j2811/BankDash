import { Cpu } from 'lucide-react'

const styles = {
  dark: 'bg-gradient-to-br from-[#4C49ED] to-[#0A06F4] text-white',
  sky: 'bg-gradient-to-br from-[#5B8BFF] to-[#2D60FF] text-white',
  white: 'bg-white text-ink border border-slate-200',
}

export default function BankCard({ variant = 'dark' }) {
  const light = variant === 'white'
  return (
    <div className={`overflow-hidden rounded-3xl ${styles[variant]}`}>
      <div className="p-5">
        <div className="flex justify-between">
          <div>
            <p className={`text-xs ${light ? 'text-muted' : 'opacity-80'}`}>Balance</p>
            <p className="text-xl font-semibold">$5,756</p>
          </div>
          <Cpu size={32} />
        </div>
        <div className="mt-6 flex gap-10 text-sm">
          <div>
            <p className={`text-[11px] ${light ? 'text-muted' : 'opacity-70'}`}>CARD HOLDER</p>
            <p className="font-semibold">Eddy Cusuma</p>
          </div>
          <div>
            <p className={`text-[11px] ${light ? 'text-muted' : 'opacity-70'}`}>VALID THRU</p>
            <p className="font-semibold">12/22</p>
          </div>
        </div>
      </div>
      <div className={`flex items-center justify-between px-5 py-4 ${light ? 'border-t border-slate-200' : 'bg-white/15'}`}>
        <span className="text-lg font-semibold tracking-wider sm:text-xl">3778 **** **** 1234</span>
        <span className="flex"><i className="h-6 w-6 rounded-full bg-slate-400/60" /><i className="-ml-3 h-6 w-6 rounded-full bg-slate-300/70" /></span>
      </div>
    </div>
  )
}