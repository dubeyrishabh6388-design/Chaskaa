import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useApp } from '../store/AppContext';
import { Icon, Toast } from './ui';
import LogoutButton from './LogoutButton';

function CustomerLogo() {
  return (
    <Link to="/customer" className="flex items-center gap-2">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-chaskaa-600 text-base font-black text-white shadow-sm">C</span>
      <span className="text-xl font-extrabold tracking-tight text-[#51010e]">Chaskaa</span>
    </Link>
  );
}

const navItems = [
  { to: '/customer', label: 'Home', icon: 'Home', end: true },
  { to: '/customer/tiffin', label: 'Tiffin', icon: 'Soup' },
  { to: '/customer/restaurants', label: 'Food', icon: 'Utensils' },
  { to: '/customer/orders', label: 'Orders', icon: 'ShoppingBag' },
  { to: '/customer/profile', label: 'Profile', icon: 'User' },
];

export default function CustomerLayout() {
  const { cart, address, toast } = useApp();
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState('');
  const cartCount = cart.reduce((a, c) => a + c.qty, 0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const submitSearch = (e) => {
    e.preventDefault();
    navigate(query.trim() ? `/customer/restaurants?q=${encodeURIComponent(query.trim())}` : '/customer/restaurants');
  };

  return (
    <div className="min-h-screen bg-[#fff9f6] pb-20 lg:pb-0">
      <div className="h-1 bg-active-nav" />

      <header className="sticky top-0 z-40 border-b border-[#f4e3e0] bg-white/95 backdrop-blur-md">
        <div className="flex w-full items-center gap-3 px-4 py-3 sm:px-6 lg:px-8 2xl:px-10">
          <button className="rounded-lg p-1 text-[#6d585b] lg:hidden" onClick={() => navigate(-1)} aria-label="Back"><Icon name="ArrowLeft" size={20} /></button>
          <CustomerLogo />
          <button onClick={() => navigate('/customer/profile')} className="ml-2 hidden min-w-0 text-left sm:block">
            <p className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-chaskaa-600"><Icon name="MapPin" size={12} /> Deliver to</p>
            <p className="max-w-[230px] truncate text-xs font-bold text-[#4a3438]">{address.line}, {address.pincode} <Icon name="ChevronDown" size={12} className="inline" /></p>
          </button>

          <form onSubmit={submitSearch} className="relative ml-auto hidden w-full max-w-xs md:block">
            <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#b09b9d]" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} className="w-full rounded-xl border border-[#f0dfdc] bg-[#fffaf8] py-2 pl-9 pr-3 text-xs outline-none focus:border-chaskaa-400 focus:ring-4 focus:ring-chaskaa-100" placeholder="Search food, tiffin, restaurants..." />
          </form>

          <nav className="ml-auto hidden items-center gap-1 lg:flex">
            {navItems.slice(0, 4).map((n) => (
              <NavLink key={n.to} to={n.to} end={n.end} className={({ isActive }) => `rounded-lg px-3 py-2 text-xs font-bold ${isActive ? 'bg-chaskaa-50 text-chaskaa-700' : 'text-[#6d585b] hover:bg-chaskaa-50'}`}>{n.label}</NavLink>
            ))}
          </nav>

          <button onClick={() => navigate('/customer/cart')} className="relative rounded-xl bg-chaskaa-50 p-2.5 text-chaskaa-700 transition hover:bg-chaskaa-100" aria-label="Cart">
            <Icon name="ShoppingBag" size={18} />
            {cartCount > 0 && <span className="absolute -right-1 -top-1 grid h-4 min-w-4 place-items-center rounded-full bg-chaskaa-600 px-1 text-[9px] font-bold text-white ring-2 ring-white">{cartCount}</span>}
          </button>
          <LogoutButton variant="text" />
          <button onClick={() => navigate('/dashboard')} className="hidden rounded-xl border border-[#f0dfdc] px-3 py-2 text-[11px] font-bold text-[#8a7477] hover:border-chaskaa-300 hover:text-chaskaa-600 xl:block">Admin console ↗</button>
        </div>

        <div className="w-full px-4 pb-3 sm:px-6 lg:px-8 2xl:px-10">
          <form onSubmit={submitSearch} className="relative md:hidden">
            <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#b09b9d]" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} className="w-full rounded-xl border border-[#f0dfdc] bg-[#fffaf8] py-2.5 pl-9 pr-3 text-xs outline-none focus:border-chaskaa-400" placeholder="Search food, tiffin, restaurants..." />
          </form>
        </div>
      </header>

      <main className="w-full px-4 py-5 sm:px-6 sm:py-7 lg:px-8 2xl:px-10">
        <Outlet />
        <footer className="mt-12 border-t border-[#f0e0dc] pt-6 text-center text-[11px] text-[#a89598]">
          <p className="font-extrabold text-chaskaa-600">Chaskaa · Har bite Mein Chaskaa</p>
          <p className="mt-1">Fresh food, daily tiffin and corporate meals — delivered with care.</p>
          <div className="mt-3 flex justify-center"><LogoutButton variant="link" /></div>
        </footer>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-5 border-t border-[#f1e1de] bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-lg lg:hidden">
        {navItems.map((n) => (
          <NavLink key={n.to} to={n.to} end={n.end} className={({ isActive }) => `flex flex-col items-center gap-1 py-2.5 text-[10px] font-bold ${isActive ? 'text-chaskaa-600' : 'text-[#9b888b]'}`}>
            <span className={`grid h-8 w-8 place-items-center rounded-xl ${location.pathname === n.to ? 'bg-chaskaa-50' : ''}`}><Icon name={n.icon} size={18} /></span>
            {n.label}
          </NavLink>
        ))}
      </nav>

      <Toast toast={toast} />
    </div>
  );
}
