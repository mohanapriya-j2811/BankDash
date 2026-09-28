import { NavLink } from 'react-router-dom'
import {
  Home, ArrowLeftRight, User, TrendingUp, CreditCard,
  Banknote, Wrench, ShieldCheck, Settings, X,
} from 'lucide-react'

const links = [
  { to: '/', label: 'Dashboard', icon: Home },
  { to: '/transactions', label: 'Transactions', icon: ArrowLeftRight },
  { to: '/accounts', label: 'Accounts', icon: User },
  { to: '/investments', label: 'Investments', icon: TrendingUp },
  { to: '/credit-cards', label: 'Credit Cards', icon: CreditCard },
  { to: '/loans', label: 'Loans', icon: Banknote },
  { to: '/services', label: 'Services', icon: Wrench },
  { to: '/privileges', label: 'My Privileges', icon: ShieldCheck },
  { to: '/settings', label: 'Setting', icon: Settings },
]

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {open && <div className="fixed inset-0 z-30 bg-black/40 lg:hidden" onClick={onClose} />}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-[250px] bg-white transition-transform duration-300 lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-[70px] items-center justify-between px-8 sm:h-[100px]">
          <div className="flex items-center gap-2 text-2xl font-extrabold text-ink">
            <CreditCard className="text-primary" size={28} /> BankDash.
          </div>
          <button className="lg:hidden" onClick={onClose}><X size={22} /></button>
        </div>

        <nav className="mt-2 flex flex-col">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `relative flex items-center gap-5 py-4 pl-8 text-[16px] font-medium transition ${
                  isActive ? 'text-primary' : 'text-[#B1B1B1] hover:text-ink'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && <span className="absolute left-0 top-0 h-full w-1.5 rounded-r-full bg-primary" />}
                  <Icon size={22} /> {label}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  )
}