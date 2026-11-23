import { useEffect, useMemo, useRef, useState } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { navGroups, quickActions } from '../data/navigation';
import { useApp } from '../store/AppContext';
import { Avatar, Badge, Icon, Toast } from './ui';
import LogoutButton from './LogoutButton';

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-white/15 ring-1 ring-white/25 backdrop-blur">
        <span className="text-lg font-black text-white">C</span>
        <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-amber-400 ring-2 ring-[#5c0110]" />
      </span>
      <span className="text-[21px] font-extrabold tracking-tight text-white">Chaskaa</span>
    </div>
  );
}

function Sidebar({ open, onClose }) {
  const { alerts } = useApp();
  const location = useLocation();

  useEffect(() => onClose(), [location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {open && <div className="fixed inset-0 z-30 bg-black/40 lg:hidden" onClick={onClose} />}
      <aside className={`fixed inset-y-0 left-0 z-40 flex w-[258px] flex-col bg-sidebar-wine text-white transition-transform duration-300 lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex h-[74px] shrink-0 items-center justify-between px-5">
          <Logo />
          <button className="rounded-lg p-1.5 text-white/70 hover:bg-white/10 lg:hidden" onClick={onClose} aria-label="Close menu"><Icon name="X" size={18} /></button>
        </div>

        <div className="px-5 pb-3">
          <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-white/55">Har bite Mein Chaskaa</p>
        </div>

        <div className="mx-4 mb-4 rounded-xl bg-white/[0.07] p-3 ring-1 ring-white/10 backdrop-blur-sm">
          <div className="flex items-center gap-2.5">
            <Avatar name="Akash Rai" tone="sidebar" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold">Akash Rai</p>
              <p className="text-[11px] text-white/60">Super Admin</p>
            </div>
            <Icon name="ChevronDown" size={14} className="text-white/60" />
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 pb-4">
          {navGroups.map((group, gi) => (
            <div key={gi} className={gi ? 'mt-5' : ''}>
              {group.label && <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[.16em] text-white/45">{group.label}</p>}
              <div className="space-y-0.5">
                {group.items.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) => `group flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-semibold transition-all ${isActive ? 'bg-active-nav text-white shadow-sm' : 'text-white/75 hover:bg-white/10 hover:text-white'}`}
                  >
                    {({ isActive }) => (
                      <>
                        <Icon name={item.icon} size={17} className={isActive ? 'text-white' : 'text-white/60 group-hover:text-white'} />
                        <span className="flex-1">{item.label}</span>
                        {item.path === '/support' && alerts.length > 0 && (
                          <span className="rounded-full bg-chaskaa-500 px-1.5 py-0.5 text-[10px] font-bold text-white">{alerts.length}</span>
                        )}
                      </>
                    )}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="m-4 rounded-xl bg-white/10 p-3.5 ring-1 ring-white/15">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/15"><Icon name="LifeBuoy" size={16} /></span>
            <div>
              <p className="text-[13px] font-bold">Need Help?</p>
              <p className="text-[10px] text-white/60">24×7 support for you</p>
            </div>
          </div>
          <button onClick={() => (window.location.href = 'mailto:support@chaskaa.in')} className="mt-3 w-full rounded-lg bg-white/15 py-1.5 text-[11px] font-bold transition hover:bg-white/25">Contact support →</button>
        </div>

        <div className="border-t border-white/10 px-3 py-2.5">
          <LogoutButton variant="sidebar" />
        </div>
      </aside>
    </>
  );
}

function GlobalSearch() {
  const { vendors, orders, users, subscriptions } = useApp();
  const navigate = useNavigate();
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const box = useRef(null);

  useEffect(() => {
    const fn = (e) => { if (box.current && !box.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);

  const results = useMemo(() => {
    if (q.trim().length < 2) return [];
    const n = q.toLowerCase();
    return [
      ...orders.filter((o) => `${o.id} ${o.customer} ${o.vendor} ${o.phone}`.toLowerCase().includes(n)).slice(0, 3).map((o) => ({ label: `Order ${o.id}`, sub: `${o.customer} · ${o.status}`, path: '/orders', icon: 'ShoppingBag' })),
      ...vendors.filter((v) => `${v.name} ${v.id} ${v.owner} ${v.city}`.toLowerCase().includes(n)).slice(0, 3).map((v) => ({ label: v.name, sub: `${v.id} · ${v.city} · ${v.status}`, path: '/vendors', icon: 'Store' })),
      ...users.filter((u) => `${u.name} ${u.phone} ${u.id}`.toLowerCase().includes(n)).slice(0, 3).map((u) => ({ label: u.name, sub: `${u.id} · ${u.role}`, path: '/users', icon: 'Users' })),
      ...subscriptions.filter((s) => `${s.id} ${s.customer} ${s.plan}`.toLowerCase().includes(n)).slice(0, 3).map((s) => ({ label: s.id, sub: `${s.customer} · ${s.plan}`, path: '/subscriptions', icon: 'CalendarCheck' })),
    ].slice(0, 8);
  }, [q, vendors, orders, users, subscriptions]);

  return (
    <div className="relative w-full max-w-[380px]" ref={box}>
      <Icon name="Search" size={17} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#a89598]" />
      <input
        value={q}
        onChange={(e) => { setQ(e.target.value); setOpen(true); }}
        onFocus={() => setOpen(true)}
        onKeyDown={(e) => { if (e.key === 'Enter' && results[0]) { navigate(results[0].path); setOpen(false); setQ(''); } }}
        placeholder="Search orders, vendors, users…"
        className="w-full rounded-xl border border-[#efe4e4] bg-[#fdf9f9] py-2.5 pl-10 pr-16 text-sm outline-none transition focus:border-chaskaa-300 focus:bg-white focus:ring-4 focus:ring-chaskaa-100"
      />
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rounded-md border border-[#eadddd] bg-white px-1.5 py-0.5 text-[10px] font-semibold text-[#a89598]">⌘ K</span>
      {open && q.trim().length >= 2 && (
        <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 overflow-hidden rounded-xl border border-[#f0e5e5] bg-white shadow-float fade-in">
          {results.length ? results.map((r, i) => (
            <button key={i} onClick={() => { navigate(r.path); setOpen(false); setQ(''); }} className="flex w-full items-center gap-3 px-4 py-2.5 text-left hover:bg-chaskaa-50">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-chaskaa-50 text-chaskaa-600"><Icon name={r.icon} size={15} /></span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold text-[#2b1d20]">{r.label}</span>
                <span className="block truncate text-[11px] text-[#968486]">{r.sub}</span>
              </span>
            </button>
          )) : <p className="px-4 py-5 text-center text-xs text-[#8a7477]">No results for “{q}”</p>}
        </div>
      )}
    </div>
  );
}

function Topbar({ onMenu }) {
  const { alerts, dismissAlert, signOut } = useApp();
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();
  const wrap = useRef(null);

  useEffect(() => {
    const fn = (e) => { if (wrap.current && !wrap.current.contains(e.target)) { setNotifOpen(false); setProfileOpen(false); } };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);

  return (
    <header className="sticky top-0 z-20 flex h-[74px] shrink-0 items-center gap-3 border-b border-[#f4e3e9] bg-[#fdf7f7]/95 px-4 backdrop-blur-md sm:px-6 lg:px-8 2xl:px-10" ref={wrap}>
      <button className="btn-ghost !p-2 lg:hidden" onClick={onMenu} aria-label="Open menu"><Icon name="Menu" size={19} /></button>
      <div className="hidden min-w-[230px] md:block">
        <p className="text-[15px] font-bold text-[#2b1d20]">Welcome Back, <span className="text-chaskaa-600">Akash Rai</span> <span className="align-middle">👋</span></p>
        <p className="text-[11px] text-[#9b888b]">Here's what's happening with Chaskaa today</p>
      </div>
      <div className="ml-auto hidden flex-1 justify-center md:flex lg:justify-end"><GlobalSearch /></div>

      <div className="relative">
        <button onClick={() => { setNotifOpen((v) => !v); setProfileOpen(false); }} className="relative rounded-xl border border-[#efe4e4] bg-white p-2.5 text-[#6d585b] transition hover:border-chaskaa-200 hover:text-chaskaa-600" aria-label="Notifications">
          <Icon name="Bell" size={18} />
          {alerts.length > 0 && <span className="absolute -right-1 -top-1 grid h-4 min-w-4 place-items-center rounded-full bg-chaskaa-600 px-1 text-[9px] font-bold text-white ring-2 ring-[#fdf9f9]">{alerts.length}</span>}
        </button>
        {notifOpen && (
          <div className="absolute right-0 top-[calc(100%+10px)] z-50 w-[330px] overflow-hidden rounded-xl border border-[#f0e5e5] bg-white shadow-float fade-in">
            <div className="flex items-center justify-between border-b border-[#f3eaea] px-4 py-3">
              <p className="text-sm font-bold">Important alerts</p>
              <Badge tone="red">{alerts.length} new</Badge>
            </div>
            <div className="max-h-80 overflow-y-auto">
              {alerts.length ? alerts.map((a) => (
                <div key={a.id} className="group flex gap-3 border-b border-[#f7f1f1] px-4 py-3 last:border-0">
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-chaskaa-50 text-chaskaa-600">
                    <Icon name={a.type === 'payment' ? 'Wallet' : a.type === 'support' ? 'LifeBuoy' : 'BadgeCheck'} size={15} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-[#2b1d20]">{a.title}</p>
                    <p className="mt-0.5 text-[11px] text-[#968486]">{a.detail}</p>
                    <p className="mt-1 text-[10px] text-chaskaa-500">{a.time}</p>
                  </div>
                  <button onClick={() => dismissAlert(a.id)} className="self-start text-[#b9a9ab] opacity-0 transition group-hover:opacity-100" aria-label="Dismiss"><Icon name="X" size={14} /></button>
                </div>
              )) : <p className="px-4 py-8 text-center text-xs text-[#8a7477]">You're all caught up 🎉</p>}
            </div>
          </div>
        )}
      </div>

      <button onClick={() => navigate('/settings')} className="hidden rounded-xl border border-[#efe4e4] bg-white p-2.5 text-[#6d585b] transition hover:border-chaskaa-200 hover:text-chaskaa-600 sm:block" aria-label="Settings"><Icon name="Settings" size={18} /></button>
      <LogoutButton variant="icon" />

      <div className="relative">
        <button onClick={() => { setProfileOpen((v) => !v); setNotifOpen(false); }} className="flex items-center gap-2 rounded-xl p-1 pr-2 transition hover:bg-white">
          <Avatar name="Akash Rai" size="sm" />
          <Icon name="ChevronDown" size={14} className="hidden text-[#8a7477] sm:block" />
        </button>
        {profileOpen && (
          <div className="absolute right-0 top-[calc(100%+10px)] z-50 w-56 overflow-hidden rounded-xl border border-[#f0e5e5] bg-white p-1.5 shadow-float fade-in">
            <div className="border-b border-[#f5eded] px-3 py-2">
              <p className="text-sm font-bold">Akash Rai</p>
              <p className="text-[11px] text-[#8a7477]">akash@chaskaa.in</p>
            </div>
            {[
              { label: 'Roles & Access', path: '/roles', icon: 'ShieldCheck' },
              { label: 'Settings', path: '/settings', icon: 'Settings' },
              { label: 'Sign out', path: '/login', icon: 'LogOut' },
            ].map((i) => (
              <button key={i.path} onClick={() => { if (i.label === 'Sign out') signOut(); navigate(i.path); setProfileOpen(false); }} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs font-semibold text-[#4a3438] hover:bg-chaskaa-50 hover:text-chaskaa-700">
                <Icon name={i.icon} size={15} /> {i.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

function QuickRail() {
  const navigate = useNavigate();
  return (
    <div className="mb-6 hidden items-center gap-2 overflow-x-auto pb-1 xl:flex">
      {quickActions.map((a) => (
        <button key={a.label} onClick={() => navigate(a.path)} className="flex shrink-0 items-center gap-2 rounded-xl border border-[#f0e5e5] bg-white px-3 py-2 text-xs font-semibold text-[#5b4548] shadow-card transition hover:border-chaskaa-200 hover:text-chaskaa-700">
          <Icon name={a.icon} size={14} className="text-chaskaa-500" />
          {a.label}
          <span className="rounded-full bg-chaskaa-50 px-1.5 py-0.5 text-[10px] text-chaskaa-700">{a.count}</span>
        </button>
      ))}
    </div>
  );
}

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { toast } = useApp();
  useEffect(() => {
    const fn = (e) => { if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); document.querySelector('input[placeholder="Search orders, vendors, users…"]')?.focus(); } };
    document.addEventListener('keydown', fn);
    return () => document.removeEventListener('keydown', fn);
  }, []);
  return (
    <div className="min-h-screen bg-[#fef5f8]">
      <Sidebar open={menuOpen} onClose={setMenuOpen} />
      <div className="lg:pl-[258px]">
        <Topbar onMenu={() => setMenuOpen(true)} />
        <main className="w-full p-4 sm:p-6 lg:p-8 2xl:p-10">
          <QuickRail />
          <Outlet />
          <footer className="mt-10 flex flex-wrap items-center justify-between gap-2 border-t border-[#f0e7e7] pt-5 text-[11px] text-[#a89598]">
            <span>© 2026 Chaskaa · Har bite Mein Chaskaa</span>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <span>Super Admin Console v1.0 · All systems operational</span>
              <LogoutButton variant="link" />
            </div>
          </footer>
        </main>
      </div>
      <Toast toast={toast} />
    </div>
  );
}
