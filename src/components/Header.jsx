import { useLocation } from 'react-router-dom'
import { Menu, Search, Settings, Bell } from 'lucide-react'

const titles = {
  '/': 'Overview', '/transactions': 'Transactions', '/accounts': 'Accounts',
  '/investments': 'Investments', '/credit-cards': 'Credit Cards', '/loans': 'Loans',
  '/services': 'Services', '/privileges': 'My Privileges', '/settings': 'Setting',
}

function SearchBox({ className = '' }) {
  return (
    <div className={`items-center gap-3 rounded-full bg-page px-5 py-3 ${className}`}>
      <Search size={18} className="text-muted" />
      <input placeholder="Search for something" className="w-full bg-transparent text-sm outline-none placeholder:text-muted" />
    </div>
  )
}

export default function Header({ onMenu }) {
  const { pathname } = useLocation()
  return (
    <header className="bg-white px-4 py-4 sm:px-8 sm:py-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button className="lg:hidden" onClick={onMenu}><Menu size={24} /></button>
          <h1 className="text-xl font-semibold text-ink sm:text-[28px]">{titles[pathname] ?? 'BankDash'}</h1>
        </div>
        <div className="flex items-center gap-3 sm:gap-6">
          <SearchBox className="hidden w-[250px] md:flex xl:w-[300px]" />
          <button className="hidden h-11 w-11 items-center justify-center rounded-full bg-page text-muted sm:flex"><Settings size={20} /></button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-danger sm:h-11 sm:w-11"><Bell size={20} /></button>
          <img src="https://i.pravatar.cc/80?img=47" alt="profile" className="h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12" />
        </div>
      </div>
      <SearchBox className="mt-4 flex md:hidden" />
    </header>
  )
}