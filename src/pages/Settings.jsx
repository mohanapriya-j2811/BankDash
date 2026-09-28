import { useState } from 'react'
import { Pencil, ChevronDown } from 'lucide-react'
import { Panel } from '../components/Card'

const input = 'mt-2 w-full rounded-2xl border border-slate-200 px-5 py-3 text-sm text-muted outline-none focus:border-primary'

function Toggle({ label, on: init = false }) {
  const [on, setOn] = useState(init)
  return (
    <label className="flex cursor-pointer items-center gap-3 text-sm">
      <button type="button" onClick={() => setOn(!on)}
        className={`relative h-6 w-11 rounded-full transition ${on ? 'bg-teal' : 'bg-slate-200'}`}>
        <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all ${on ? 'left-[22px]' : 'left-0.5'}`} />
      </button>
      {label}
    </label>
  )
}

const SaveBtn = () => (
  <div className="mt-8 flex sm:justify-end">
    <button className="w-full rounded-xl bg-primary px-14 py-3 text-sm font-medium text-white sm:w-auto">Save</button>
  </div>
)

function Field({ label, value, type = 'text', select }) {
  return (
    <label className="relative block text-sm">
      {label}
      <input type={type} defaultValue={value} className={input} />
      {select && <ChevronDown size={16} className="absolute bottom-3.5 right-4 text-muted" />}
    </label>
  )
}

function Profile() {
  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <div className="relative h-24 w-24 shrink-0 self-center md:self-start">
        <img src="https://i.pravatar.cc/200?img=47" className="h-24 w-24 rounded-full object-cover" />
        <span className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white">
          <Pencil size={13} />
        </span>
      </div>
      <div className="grid flex-1 gap-5 md:grid-cols-2">
        <Field label="Your Name" value="Charlene Reed" />
        <Field label="User Name" value="Charlene Reed" />
        <Field label="Email" value="charlenereed@gmail.com" />
        <Field label="Password" value="**********" type="password" />
        <Field label="Date of Birth" value="25 January 1990" select />
        <Field label="Present Address" value="San Jose, California, USA" />
        <Field label="Permanent Address" value="San Jose, California, USA" />
        <Field label="City" value="San Jose" />
        <Field label="Postal Code" value="45962" />
        <Field label="Country" value="USA" />
      </div>
    </div>
  )
}

function Preferences() {
  return (
    <>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Currency" value="USD" />
        <Field label="Time Zone" value="(GMT-12:00) International Date Line West" />
      </div>
      <p className="mb-4 mt-8 text-sm">Notification</p>
      <div className="space-y-4">
        <Toggle label="I send or receive digita currency" on />
        <Toggle label="I receive merchant order" />
        <Toggle label="There are recommendation for my account" on />
      </div>
    </>
  )
}

function Security() {
  return (
    <div className="max-w-[340px]">
      <p className="mb-3 text-sm">Two-factor Authentication</p>
      <Toggle label="Enable or disable two factor authentication" on />
      <p className="mb-2 mt-8 text-sm">Change Password</p>
      <div className="space-y-4">
        <Field label="Current Password" value="**********" type="password" />
        <Field label="New Password" value="**********" type="password" />
      </div>
    </div>
  )
}

export default function Settings() {
  const [tab, setTab] = useState('Edit Profile')
  const view = { 'Edit Profile': <Profile />, Preferences: <Preferences />, Security: <Security /> }
  return (
    <Panel className="!p-5 sm:!p-8">
      <div className="mb-8 flex gap-8 border-b border-slate-100 text-sm font-medium text-muted">
        {Object.keys(view).map((t) => (
          <button key={t} onClick={() => setTab(t)}
            className={`pb-3 ${tab === t ? 'border-b-2 border-primary text-primary' : ''}`}>{t}</button>
        ))}
      </div>
      {view[tab]}
      <SaveBtn />
    </Panel>
  )
}