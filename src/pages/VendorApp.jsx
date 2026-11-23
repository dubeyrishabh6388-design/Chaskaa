import { useMemo, useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { kitchenManifest, tiffinPlans } from '../data/mockData';
import { dishImage, planImages } from '../data/images';
import { useApp } from '../store/AppContext';
import { Avatar, Badge, Card, DataTable, EmptyState, Field, Icon, Modal, PageHeader, ProgressBar, Toggle, statusTone } from '../components/ui';
import LogoutButton from '../components/LogoutButton';

const inr = (n) => '₹' + Number(n).toLocaleString('en-IN');

const navGroups = [
  { label: 'Overview', items: [{ to: '/vendor', label: 'Dashboard', icon: 'LayoutDashboard', end: true }] },
  { label: 'Operations', items: [
    { to: '/vendor/orders', label: 'Live orders', icon: 'ShoppingBag' },
    { to: '/vendor/tiffin', label: 'Tiffin operations', icon: 'LunchBox' },
  ] },
  { label: 'Catalog', items: [
    { to: '/vendor/menu', label: 'Menu manager', icon: 'ClipboardList' },
    { to: '/vendor/offers', label: 'Offers', icon: 'Megaphone' },
  ] },
  { label: 'Business', items: [
    { to: '/vendor/earnings', label: 'Earnings & settlements', icon: 'Wallet' },
    { to: '/vendor/reviews', label: 'Ratings & reviews', icon: 'Star' },
    { to: '/vendor/staff', label: 'Staff & support', icon: 'Users' },
  ] },
  { label: 'Setup', items: [{ to: '/vendor/settings', label: 'Outlet settings', icon: 'Settings' }] },
];

export function VendorLayout() {
  const { toast } = useApp();
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#fef5f8] lg:flex">
      {mobileOpen && <div className="fixed inset-0 z-40 bg-black/40 lg:hidden" onClick={() => setMobileOpen(false)} />}
      <aside className={`fixed inset-y-0 left-0 z-50 flex w-[248px] flex-col bg-sidebar-wine text-white transition-transform lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center gap-2.5 border-b border-white/10 px-5 py-5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-white text-lg font-black text-chaskaa-700">C</span>
          <div><p className="text-lg font-extrabold leading-none">Chaskaa</p><p className="mt-1 text-[9px] font-bold uppercase tracking-[.2em] text-white/50">Merchant Panel</p></div>
          <button className="ml-auto text-white/60 lg:hidden" onClick={() => setMobileOpen(false)}><Icon name="X" size={18} /></button>
        </div>
        <div className="mx-4 mt-4 rounded-xl bg-white/10 p-3 ring-1 ring-white/10">
          <div className="flex items-center gap-3"><Avatar name="Bhojan Homes" tone="amber" /><div className="min-w-0"><p className="truncate text-xs font-bold">Bhojan Homes</p><p className="text-[10px] text-white/60">Gomti Nagar · OUT-1042</p></div></div>
          <div className="mt-2 flex items-center gap-1.5 text-[10px] text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Outlet open · accepting orders</div>
        </div>
        <nav className="mt-4 flex-1 space-y-4 overflow-y-auto px-3 pb-6">
          {navGroups.map((g) => (
            <div key={g.label}>
              <p className="mb-1.5 px-3 text-[9px] font-bold uppercase tracking-[.18em] text-white/40">{g.label}</p>
              {g.items.map((n) => (
                <NavLink key={n.to} to={n.to} end={n.end} onClick={() => setMobileOpen(false)}
                  className={({ isActive }) => `mb-0.5 flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-semibold transition ${isActive ? 'bg-active-nav text-white shadow-sm' : 'text-white/75 hover:bg-white/10 hover:text-white'}`}>
                  <Icon name={n.icon} size={16} /> {n.label}
                </NavLink>
              ))}
            </div>
          ))}
        </nav>
        <div className="space-y-1 border-t border-white/10 p-3">
          <NavLink to="/login?role=admin" className="flex items-center justify-center gap-2 rounded-xl bg-white/10 py-2.5 text-[11px] font-bold text-white/80 hover:bg-white/20">Switch account / Sign in ↗</NavLink>
          <LogoutButton variant="sidebar" />
        </div>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-[#efe4e4] bg-white/90 px-4 py-3 backdrop-blur-md sm:px-6 lg:px-8 2xl:px-10">
          <button className="rounded-lg p-1 text-[#6d585b] lg:hidden" onClick={() => setMobileOpen(true)}><Icon name="Menu" size={21} /></button>
          <div className="flex items-center gap-2 text-xs text-[#8a7477]"><Icon name="Store" size={15} className="text-chaskaa-600" /> <b className="text-[#2b1d20]">Bhojan Homes</b><span className="hidden sm:inline">/ Gomti Nagar, Lucknow</span></div>
          <div className="ml-auto flex items-center gap-2">
            <Badge tone="green" dot className="hidden sm:inline-flex">Verified partner</Badge>
            <LogoutButton variant="icon" />
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-chaskaa-100 text-xs font-bold text-chaskaa-700">BH</span>
          </div>
        </header>
        <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8 2xl:p-10">
          <Outlet />
          <footer className="mt-10 flex flex-wrap items-center justify-between gap-2 border-t border-[#f0e3e3] pt-5 text-center text-[11px] text-[#a89598]">
            <span>© 2026 Chaskaa · Merchant Portal · Har bite Mein Chaskaa</span>
            <LogoutButton variant="link" />
          </footer>
        </main>
      </div>
      {toast && <div className="fixed bottom-5 right-5 z-[80] flex items-center gap-3 rounded-xl bg-[#2b1d20] px-4 py-3 text-sm font-semibold text-white shadow-2xl fade-in"><span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-500"><Icon name="Check" size={14} /></span>{toast.message}</div>}
    </div>
  );
}

const initialMenu = [
  { id: 'm1', name: 'Paneer Butter Masala', category: 'Main Course', price: 199, veg: true, available: true, orders: 148 },
  { id: 'm2', name: 'Veg Thali', category: 'Thali', price: 149, veg: true, available: true, orders: 312 },
  { id: 'm3', name: 'Dal Tadka', category: 'Main Course', price: 129, veg: true, available: true, orders: 265 },
  { id: 'm4', name: 'Jeera Rice', category: 'Rice', price: 99, veg: true, available: true, orders: 198 },
  { id: 'm5', name: 'Butter Naan', category: 'Breads', price: 39, veg: true, available: false, orders: 94 },
  { id: 'm6', name: 'Gulab Jamun', category: 'Desserts', price: 69, veg: true, available: true, orders: 121 },
];

const initialOrders = [
  { id: 'CHS42912', customer: 'Ananya Verma', phone: '+91 98765 11220', items: 'Veg Thali, Paneer Butter Masala', amount: 348, status: 'New', time: '10:42 AM', slot: 'Delivery' },
  { id: 'CHS42908', customer: 'Rahul Singh', phone: '+91 98765 33441', items: 'Dal Tadka, Jeera Rice, Naan', amount: 267, status: 'New', time: '10:36 AM', slot: 'Delivery' },
  { id: 'CHS42890', customer: 'Akash Rai', phone: '+91 98765 43210', items: 'Paneer Butter Masala, Veg Thali', amount: 286, status: 'Preparing', time: '10:24 AM', slot: 'Delivery' },
  { id: 'CHS42876', customer: 'Neha Sharma', phone: '+91 91220 44556', items: 'Veg Thali × 2', amount: 298, status: 'Ready', time: '10:11 AM', slot: 'Pickup' },
  { id: 'CHS42861', customer: 'Manish Jain', phone: '+91 94450 11223', items: 'Dal Tadka, Butter Naan', amount: 168, status: 'Preparing', time: '09:58 AM', slot: 'Delivery' },
  { id: 'CHS42844', customer: 'Priya Nair', phone: '+91 93330 77665', items: 'Gulab Jamun, Jeera Rice', amount: 168, status: 'Delivered', time: '09:32 AM', slot: 'Delivery' },
];

function MiniStat({ label, value, sub, icon = 'TrendingUp', tone = 'red' }) {
  return (
    <div className="card p-4">
      <div className="flex items-start justify-between"><p className="text-[11px] font-semibold text-[#8a7477]">{label}</p><span className={`grid h-8 w-8 place-items-center rounded-lg ${tone === 'red' ? 'bg-chaskaa-50 text-chaskaa-600' : 'bg-emerald-50 text-emerald-600'}`}><Icon name={icon} size={16} /></span></div>
      <p className="mt-1 text-2xl font-extrabold text-[#2b1d20]">{value}</p>
      {sub && <p className="mt-0.5 text-[10px] text-[#a89598]">{sub}</p>}
    </div>
  );
}

/* ---------------- Dashboard ---------------- */
export function VendorDashboard() {
  const navigate = useNavigate();
  const board = [
    { title: 'New orders', status: 'New', tone: 'amber' },
    { title: 'Preparing', status: 'Preparing', tone: 'blue' },
    { title: 'Ready for pickup', status: 'Ready', tone: 'green' },
  ];
  return (
    <div className="fade-in">
      <PageHeader eyebrow="Overview" title="Good morning, Bhojan Homes 👋" subtitle="Here's how your outlet is performing today."
        actions={<button className="btn-primary" onClick={() => navigate('/vendor/orders')}><Icon name="ShoppingBag" size={15} /> Open order board</button>} />
      <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <MiniStat label="Today's orders" value="42" sub="+8 vs yesterday" icon="ShoppingBag" />
        <MiniStat label="Today's revenue" value="₹12,840" sub="+14.2% vs yesterday" icon="CircleDollarSign" />
        <MiniStat label="Avg. prep time" value="18 min" sub="Target: 20 min" icon="Clock" tone="green" />
        <MiniStat label="Pending payout" value="₹38,420" sub="Settles 22 Nov" icon="Wallet" />
      </div>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.5fr)_minmax(280px,1fr)]">
        <Card title="Live order board" subtitle="Move tickets across stages as you cook and pack" action={<button className="text-xs font-bold text-chaskaa-600" onClick={() => navigate('/vendor/orders')}>View all →</button>}>
          <div className="grid gap-3 sm:grid-cols-3">
            {board.map((col) => <div key={col.status} className="rounded-xl bg-[#fdf8f8] p-3">
              <div className="mb-3 flex items-center justify-between"><p className="text-xs font-extrabold text-[#4a3438]">{col.title}</p><Badge tone={col.tone}>{initialOrders.filter((o) => o.status === col.status).length}</Badge></div>
              <div className="space-y-2">{initialOrders.filter((o) => o.status === col.status).slice(0, 3).map((o) => (
                <div key={o.id} className="rounded-lg border border-[#f0e5e5] bg-white p-2.5 shadow-sm">
                  <p className="text-[11px] font-extrabold text-chaskaa-700">#{o.id}</p>
                  <p className="mt-0.5 truncate text-[10px] text-[#8a7477]">{o.customer}</p>
                  <div className="mt-1 flex justify-between text-[10px] font-bold"><span className="text-[#6d585b]">{o.time}</span><span>{inr(o.amount)}</span></div>
                </div>
              ))}</div>
            </div>)}
          </div>
        </Card>
        <Card title="Tiffin operations" subtitle="Tomorrow's production" action={<button className="text-xs font-bold text-chaskaa-600" onClick={() => navigate('/vendor/tiffin')}>Manage →</button>}>
          <div className="mb-4 relative overflow-hidden rounded-xl bg-gradient-to-br from-wine-800 to-chaskaa-700 p-4 text-white">
            <img src="/img/hero-tiffin.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />
            <span className="absolute inset-0 bg-gradient-to-r from-[#51010e]/90 to-[#b00528]/50" />
            <div className="relative"><p className="text-[10px] uppercase tracking-wide text-white/60">Meals to pack</p><p className="mt-1 text-3xl font-extrabold">184</p><p className="text-[10px] text-white/70">Lunch 96 · Dinner 88 · 3 zones</p></div>
          </div>
          <div className="space-y-2">{tiffinPlans.slice(0, 3).map((p) => <div key={p.id} className="flex items-center gap-2 rounded-lg bg-[#fdf8f8] p-2 text-[11px]"><img src={p.segment === 'Corporate' ? planImages.Corporate : planImages.Student} alt="" className="h-8 w-8 shrink-0 rounded-md object-cover" /><span className="min-w-0 flex-1 truncate font-bold">{p.name}</span><span className="font-extrabold text-chaskaa-600">{p.booked} packs</span></div>)}</div>
        </Card>
      </div>
      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <Card title="Top selling items" subtitle="This week">
          <div className="space-y-3">{initialMenu.slice().sort((a, b) => b.orders - a.orders).slice(0, 4).map((m) => <div key={m.id} className="flex items-center gap-3"><img src={dishImage(m.name, m.category)} alt="" className="h-9 w-9 shrink-0 rounded-lg object-cover" /><div className="min-w-0 flex-1"><div className="mb-1 flex justify-between text-[11px]"><span className="truncate font-bold">{m.name}</span><span className="text-[#8a7477]">{m.orders} orders</span></div><ProgressBar value={(m.orders / 312) * 100} /></div></div>)}</div>
        </Card>
        <Card title="Attention needed" subtitle="Resolve these to keep your ratings high">
          <div className="space-y-2">{[
            ['Clock', '3 orders nearing prep SLA', 'amber'], ['AlertCircle', 'Butter Naan is out of stock', 'red'], ['Star', '2 new reviews need a response', 'blue'],
          ].map(([icon, text, tone]) => <div key={text} className="flex items-center gap-3 rounded-xl border border-[#f2eaea] p-3"><span className={`grid h-8 w-8 place-items-center rounded-lg ${tone === 'red' ? 'bg-rose-50 text-rose-600' : tone === 'blue' ? 'bg-sky-50 text-sky-600' : 'bg-amber-50 text-amber-600'}`}><Icon name={icon} size={15} /></span><span className="flex-1 text-xs font-semibold text-[#4a3438]">{text}</span><Icon name="ChevronRight" size={14} className="text-[#b09b9d]" /></div>)}</div>
        </Card>
      </div>
    </div>
  );
}

/* ---------------- Orders board ---------------- */
export function VendorOrders() {
  const { notify } = useApp();
  const [orders, setOrders] = useState(initialOrders);
  const [tab, setTab] = useState('Live board');
  const [view, setView] = useState(null);
  const stages = ['New', 'Preparing', 'Ready', 'Delivered', 'Cancelled'];
  const advance = (id) => setOrders((prev) => prev.map((o) => o.id === id ? { ...o, status: stages[Math.min(stages.indexOf(o.status) + 1, 3)] } : o));
  const reject = (id) => { setOrders((prev) => prev.map((o) => o.id === id ? { ...o, status: 'Cancelled' } : o)); notify('Order rejected and customer notified'); };
  const rows = tab === 'Live board' ? orders.filter((o) => !['Delivered', 'Cancelled'].includes(o.status)) : tab === 'History' ? orders.filter((o) => ['Delivered', 'Cancelled'].includes(o.status)) : orders.filter((o) => o.status === tab);

  return (
    <div className="fade-in">
      <PageHeader eyebrow="Operations" title="Live Orders" subtitle="Accept, prepare and hand over orders — every status change is timestamped." />
      <div className="mb-5 flex flex-wrap gap-2">{['Live board', 'New', 'Preparing', 'Ready', 'History', 'Cancelled'].map((t) => <button key={t} onClick={() => setTab(t)} className={`rounded-xl px-3.5 py-2 text-xs font-bold ${tab === t ? 'bg-chaskaa-600 text-white shadow-card' : 'border border-[#eadddd] bg-white text-[#6d585b] hover:bg-chaskaa-50'}`}>{t}</button>)}</div>
      <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <MiniStat label="New" value={orders.filter((o) => o.status === 'New').length} icon="Bell" />
        <MiniStat label="Preparing" value={orders.filter((o) => o.status === 'Preparing').length} icon="ChefHat" />
        <MiniStat label="Ready" value={orders.filter((o) => o.status === 'Ready').length} icon="Package" tone="green" />
        <MiniStat label="Completed today" value={orders.filter((o) => o.status === 'Delivered').length} icon="CheckCircle2" tone="green" />
      </div>
      {tab === 'Live board' ? (
        <div className="grid gap-4 lg:grid-cols-3">
          {[['New', 'amber'], ['Preparing', 'blue'], ['Ready', 'green']].map(([stage, tone]) => (
            <Card key={stage} title={stage} subtitle={`${orders.filter((o) => o.status === stage).length} orders`} noPad>
              <div className="space-y-3 p-4 pt-0">
                {orders.filter((o) => o.status === stage).map((o) => (
                  <div key={o.id} className="rounded-xl border border-[#f0e5e5] bg-white p-4 shadow-sm transition hover:border-chaskaa-200">
                    <div className="flex items-center justify-between"><span className="text-xs font-extrabold text-chaskaa-700">#{o.id}</span><Badge tone={tone} dot>{o.slot}</Badge></div>
                    <p className="mt-2 text-sm font-bold text-[#2b1d20]">{o.customer}</p>
                    <p className="text-[10px] text-[#8a7477]">{o.phone}</p>
                    <div className="mt-2 flex items-center gap-2 text-[11px] text-[#6d585b]"><img src={dishImage(o.items)} alt="" className="h-7 w-7 shrink-0 rounded-md object-cover" /><span className="truncate">{o.items}</span></div>
                    <div className="mt-3 flex items-center justify-between border-t border-[#f6eae7] pt-3"><span className="text-xs font-extrabold">{inr(o.amount)}</span><span className="text-[10px] text-[#8a7477]">{o.time}</span></div>
                    <div className="mt-3 flex gap-2">
                      <button className="btn-soft flex-1 !py-2 !text-[11px]" onClick={() => setView(o)}>Details</button>
                      {stage !== 'Ready' && <button className="btn-primary flex-1 !py-2 !text-[11px]" onClick={() => advance(o.id)}>{stage === 'New' ? 'Accept' : 'Mark ready'}</button>}
                      {stage === 'Ready' && <button className="btn-primary flex-1 !py-2 !text-[11px]" onClick={() => { advance(o.id); notify('Order handed to delivery partner'); }}>Hand over</button>}
                    </div>
                    {stage === 'New' && <button className="mt-2 w-full text-[10px] font-bold text-rose-500 hover:underline" onClick={() => reject(o.id)}>Reject order</button>}
                  </div>
                ))}
                {!orders.some((o) => o.status === stage) && <div className="py-8 text-center text-[11px] text-[#a89598]">No {stage.toLowerCase()} orders</div>}
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card title={tab} subtitle="All records with full lifecycle" noPad><div className="p-5 pt-0">
          <DataTable searchPlaceholder="Search order, customer or phone…" columns={[
            { key: 'id', label: 'Order', render: (o) => <span className="font-bold text-chaskaa-700">#{o.id}</span> },
            { key: 'customer', label: 'Customer', render: (o) => <span>{o.customer}<span className="block text-[11px] text-[#968486]">{o.phone}</span></span> },
            { key: 'items', label: 'Items', render: (o) => <span className="flex items-center gap-2"><img src={dishImage(o.items)} alt="" className="h-8 w-8 shrink-0 rounded-md object-cover" /><span className="truncate">{o.items}</span></span> }, { key: 'amount', label: 'Amount', sortable: true },
            { key: 'slot', label: 'Type' }, { key: 'time', label: 'Time' },
            { key: 'status', label: 'Status', render: (o) => <Badge tone={statusTone(o.status)} dot>{o.status}</Badge> },
            { key: 'action', label: 'Action', render: (o) => <div onClick={(e) => e.stopPropagation()}><button className="btn-ghost !px-2 !py-1 !text-[11px]" onClick={() => setView(o)}>View</button></div> },
          ]} rows={rows} onRowClick={setView} />
        </div></Card>
      )}
      <Modal open={!!view} onClose={() => setView(null)} title={view ? `Order #${view.id}` : ''} subtitle={view ? `${view.time} · ${view.slot}` : ''}
        footer={<><button className="btn-ghost" onClick={() => setView(null)}>Close</button>{view && view.status === 'New' && <button className="btn-primary" onClick={() => { advance(view.id); setView(null); }}>Accept order</button>}</>}>
        {view && <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3 text-xs">{[['Customer', view.customer], ['Phone', view.phone], ['Amount', inr(view.amount)], ['Status', view.status], ['Items', view.items], ['Slot', view.time]].map(([k, v]) => <div key={k} className="rounded-xl bg-[#fdf8f8] p-3"><p className="text-[10px] uppercase tracking-wide text-[#968486]">{k}</p><p className="mt-1 font-bold">{v}</p></div>)}</div>
          <div className="rounded-xl bg-amber-50 p-3 text-[11px] text-amber-800"><b>SLA:</b> Accept within 2 min · Prep within 20 min · Hand over within 25 min.</div>
        </div>}
      </Modal>
    </div>
  );
}

/* ---------------- Menu manager ---------------- */
export function VendorMenu() {
  const { notify } = useApp();
  const [items, setItems] = useState(initialMenu);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: '', category: 'Main Course', price: '', veg: true });
  const [bulk, setBulk] = useState(false);
  const [pct, setPct] = useState('5');
  const [category, setCategory] = useState('All');
  const categories = ['All', ...new Set(items.map((m) => m.category))];
  const filtered = category === 'All' ? items : items.filter((m) => m.category === category);

  const save = () => {
    if (editing?.id) setItems((prev) => prev.map((m) => m.id === editing.id ? { ...m, ...form, price: Number(form.price) || m.price } : m));
    else setItems((prev) => [...prev, { id: `m${Date.now()}`, ...form, price: Number(form.price) || 0, available: true, orders: 0 }]);
    notify(editing?.id ? 'Item updated' : 'Item added to menu'); setEditing(null);
  };

  return (
    <div className="fade-in">
      <PageHeader eyebrow="Catalog" title="Menu Manager" subtitle="Categories, items, availability and prices for your storefront."
        actions={<><button className="btn-ghost" onClick={() => setBulk(true)}><Icon name="FileText" size={15} /> Bulk price update</button><button className="btn-primary" onClick={() => { setForm({ name: '', category: 'Main Course', price: '', veg: true }); setEditing({}); }}><Icon name="Plus" size={15} /> Add item</button></>} />
      <div className="mb-5 flex flex-wrap gap-2">{categories.map((c) => <button key={c} onClick={() => setCategory(c)} className={`rounded-full px-3.5 py-2 text-xs font-bold ${category === c ? 'bg-chaskaa-600 text-white' : 'border border-[#eadddd] bg-white text-[#6d585b]'}`}>{c}</button>)}</div>
      <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <MiniStat label="Total items" value={items.length} icon="Utensils" />
        <MiniStat label="Available" value={items.filter((i) => i.available).length} icon="CheckCircle2" tone="green" />
        <MiniStat label="Out of stock" value={items.filter((i) => !i.available).length} icon="AlertCircle" />
        <MiniStat label="Categories" value={new Set(items.map((m) => m.category)).size} icon="ClipboardList" />
      </div>
      <Card title={`Items · ${filtered.length}`} subtitle="Toggle stock instantly — unavailable items are hidden from customers" noPad><div className="p-5 pt-0">
        <DataTable searchPlaceholder="Search dish or category…" columns={[
          { key: 'name', label: 'Item', render: (m) => <span className="flex items-center gap-2"><img src={dishImage(m.name, m.category)} alt="" className="h-9 w-9 shrink-0 rounded-lg object-cover" /><span className={`h-3 w-3 shrink-0 rounded-sm border-2 ${m.veg ? 'border-emerald-600 bg-emerald-100' : 'border-rose-600 bg-rose-100'}`} /><span className="font-bold">{m.name}</span></span> },
          { key: 'category', label: 'Category' },
          { key: 'price', label: 'Price', sortable: true, render: (m) => inr(m.price) },
          { key: 'orders', label: 'Orders', sortable: true },
          { key: 'available', label: 'Available', render: (m) => <Toggle checked={m.available} onChange={(v) => { setItems((prev) => prev.map((x) => x.id === m.id ? { ...x, available: v } : x)); notify(v ? `${m.name} back in stock` : `${m.name} marked out of stock`); }} label="Availability" /> },
          { key: 'action', label: 'Action', render: (m) => <div className="flex gap-1" onClick={(e) => e.stopPropagation()}><button className="rounded-lg p-1.5 text-[#8a7477] hover:bg-chaskaa-50 hover:text-chaskaa-600" onClick={() => { setEditing(m); setForm({ name: m.name, category: m.category, price: String(m.price), veg: m.veg }); }}><Icon name="Pencil" size={15} /></button><button className="rounded-lg p-1.5 text-[#b09b9d] hover:bg-rose-50 hover:text-rose-600" onClick={() => { setItems((prev) => prev.filter((x) => x.id !== m.id)); notify('Item removed'); }}><Icon name="Trash2" size={15} /></button></div> },
        ]} rows={filtered} />
      </div></Card>
      <Modal open={!!editing} onClose={() => setEditing(null)} title={editing?.id ? 'Edit item' : 'Add new item'} subtitle="Changes appear on your storefront immediately"
        footer={<><button className="btn-ghost" onClick={() => setEditing(null)}>Cancel</button><button className="btn-primary" onClick={save}>Save item</button></>}>
        <div className="space-y-4">
          {form.name && <img src={dishImage(form.name, form.category)} alt={form.name} className="h-32 w-full rounded-xl object-cover" />}
          <Field label="Item name"><input className="input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g. Paneer Butter Masala" /></Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Category"><select className="input" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>{['Main Course', 'Thali', 'Rice', 'Breads', 'Desserts', 'Fast Food', 'Beverages'].map((c) => <option key={c}>{c}</option>)}</select></Field>
            <Field label="Price (₹)"><input className="input" type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} placeholder="199" /></Field>
          </div>
          <div className="flex items-center justify-between rounded-xl bg-[#fdf8f8] p-3"><span className="text-xs font-semibold">Vegetarian item</span><Toggle checked={form.veg} onChange={(v) => setForm({ ...form, veg: v })} label="Vegetarian" /></div>
        </div>
      </Modal>
      <Modal open={bulk} onClose={() => setBulk(false)} title="Bulk price update" subtitle="Apply a percentage change across all menu items"
        footer={<><button className="btn-ghost" onClick={() => setBulk(false)}>Cancel</button><button className="btn-primary" onClick={() => { setItems((prev) => prev.map((m) => ({ ...m, price: Math.round(m.price * (1 + Number(pct) / 100)) }))); setBulk(false); notify(`Prices updated by ${pct}%`); }}>Apply to {items.length} items</button></>}>
        <Field label="Increase / decrease percentage" hint="Use a negative value to reduce prices"><input className="input" type="number" value={pct} onChange={(e) => setPct(e.target.value)} /></Field>
        <div className="mt-4 rounded-xl bg-amber-50 p-3 text-[11px] text-amber-800"><b>Note:</b> For Excel-style uploads, map a sheet with columns <code>item_id, price</code> in the production version.</div>
      </Modal>
    </div>
  );
}

/* ---------------- Tiffin operations ---------------- */
export function VendorTiffin() {
  const { notify } = useApp();
  const [tab, setTab] = useState('Plans');
  const [ready, setReady] = useState(false);
  return (
    <div className="fade-in">
      <PageHeader eyebrow="Operations" title="Tiffin Operations" subtitle="Plans, tomorrow's counts, packing lists, labels, subscribers and holidays."
        actions={<button className="btn-primary" onClick={() => { setReady(true); notify("Tomorrow's batch marked ready"); }}><Icon name="CheckCircle2" size={15} /> Mark batch ready</button>} />
      <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <MiniStat label="Meals tomorrow" value="184" icon="LunchBox" />
        <MiniStat label="Veg packs" value="142" icon="CheckCircle2" tone="green" />
        <MiniStat label="Non-veg packs" value="42" icon="Utensils" />
        <MiniStat label="Skips today" value="6" icon="RotateCcw" />
      </div>
      <div className="mb-5 flex flex-wrap gap-2">{['Plans', 'Tomorrow count', 'Packing list', 'Subscribers', 'Holidays'].map((t) => <button key={t} onClick={() => setTab(t)} className={`rounded-xl px-3.5 py-2 text-xs font-bold ${tab === t ? 'bg-chaskaa-600 text-white' : 'border border-[#eadddd] bg-white text-[#6d585b]'}`}>{t}</button>)}</div>
      {ready && <div className="mb-5 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-xs font-semibold text-emerald-800"><Icon name="CheckCircle2" size={17} /> Tomorrow's batch marked ready. Kitchen and dispatch teams have been notified.</div>}

      {tab === 'Plans' && <Card title="Your tiffin plans" subtitle="Prices, capacity and cutoffs synced with the platform" noPad><div className="p-5 pt-0">
        <DataTable searchPlaceholder="Search plans…" columns={[
          { key: 'name', label: 'Plan', render: (p) => <span className="flex items-center gap-2"><img src={p.segment === 'Corporate' ? planImages.Corporate : planImages.Student} alt="" className="h-9 w-9 shrink-0 rounded-lg object-cover" /><span className="font-bold">{p.name}<span className="block text-[11px] font-normal text-[#968486]">{p.id}</span></span></span> },
          { key: 'segment', label: 'Segment', render: (p) => <Badge tone={p.segment === 'Student' ? 'amber' : 'purple'}>{p.segment}</Badge> },
          { key: 'price', label: 'Price', sortable: true }, { key: 'meal', label: 'Meal' },
          { key: 'capacity', label: 'Capacity', render: (p) => <div className="w-28"><div className="mb-1 text-[10px] font-semibold">{p.booked}/{p.capacity}</div><ProgressBar value={(p.booked / p.capacity) * 100} /></div> },
          { key: 'status', label: 'Status', render: (p) => <Badge tone={statusTone(p.status)} dot>{p.status}</Badge> },
        ]} rows={tiffinPlans} />
      </div></Card>}

      {tab === 'Tomorrow count' && <Card title="Production count · 21 Nov 2026" subtitle="Aggregated by meal slot and plan">
        <div className="grid gap-3 sm:grid-cols-3">{[['Lunch', 96, 'bg-chaskaa-500'], ['Dinner', 88, 'bg-wine-600'], ['Both slots', 184, 'bg-emerald-500']].map(([l, v, tone]) => <div key={l} className="rounded-xl border border-[#f2eaea] p-4"><p className="text-[11px] font-semibold text-[#8a7477]">{l}</p><p className="mt-1 text-3xl font-extrabold text-[#2b1d20]">{v}</p><div className="mt-2"><ProgressBar value={(v / 184) * 100} tone={tone} /></div></div>)}</div>
        <div className="mt-5 space-y-2">{tiffinPlans.map((p) => <div key={p.id} className="flex items-center gap-3 rounded-xl bg-[#fdf8f8] p-3 text-xs"><img src={p.segment === 'Corporate' ? planImages.Corporate : planImages.Student} alt="" className="h-9 w-9 shrink-0 rounded-lg object-cover" /><span className="flex-1 font-bold">{p.name}</span><span className="font-extrabold text-chaskaa-600">{Math.round(p.booked / 3)} packs</span></div>)}</div>
      </Card>}

      {tab === 'Packing list' && <Card title="Today's packing list" subtitle="Print labels with customer name, slot and meal type" action={<button className="btn-soft !py-2 !text-xs" onClick={() => notify('Labels sent to printer')}><Icon name="FileText" size={14} /> Print labels</button>} noPad><div className="p-5 pt-0">
        <DataTable searchPlaceholder="Search kitchen, slot or rider…" columns={[
          { key: 'vendor', label: 'Kitchen' }, { key: 'slot', label: 'Slot' },
          { key: 'veg', label: 'Veg', sortable: true }, { key: 'nonveg', label: 'Non-veg', sortable: true },
          { key: 'total', label: 'Total', sortable: true, render: (m) => <b className="text-chaskaa-600">{m.total}</b> },
          { key: 'rider', label: 'Rider' },
          { key: 'status', label: 'Status', render: (m) => <Badge tone={statusTone(m.status)} dot>{m.status}</Badge> },
        ]} rows={kitchenManifest} />
      </div></Card>}

      {tab === 'Subscribers' && <Card title="Active subscribers" subtitle="Students and corporate employees on your plans" noPad><div className="p-5 pt-0">
        <DataTable searchPlaceholder="Search subscriber or plan…" columns={[
          { key: 'name', label: 'Subscriber', render: (s) => <div className="flex items-center gap-2"><Avatar name={s.name} size="sm" /><span className="font-bold">{s.name}</span></div> },
          { key: 'plan', label: 'Plan' }, { key: 'meals', label: 'Meals' }, { key: 'valid', label: 'Valid till' },
          { key: 'skips', label: 'Skips left' }, { key: 'status', label: 'Status', render: (s) => <Badge tone={statusTone(s.status)} dot>{s.status}</Badge> },
        ]} rows={[
          { id: 's1', name: 'Akash Rai', plan: 'Student Monthly', meals: 'Lunch & Dinner', valid: '17 Dec 2026', skips: 4, status: 'Active' },
          { id: 's2', name: 'Ananya Verma', plan: 'Student Weekly', meals: 'Lunch', valid: '28 Nov 2026', skips: 2, status: 'Active' },
          { id: 's3', name: 'Rahul Singh', plan: 'Corporate Monthly', meals: 'Lunch', valid: '30 Nov 2026', skips: 3, status: 'Paused' },
          { id: 's4', name: 'Neha Sharma', plan: 'Student Monthly', meals: 'Dinner', valid: '09 Dec 2026', skips: 1, status: 'Active' },
        ]} />
      </div></Card>}

      {tab === 'Holidays' && <Card title="Holiday calendar" subtitle="Blackout days pause meal generation and extend plan validity">
        <div className="space-y-2">{[['22 Nov 2026', 'Kittee puja — kitchen closed'], ['02 Dec 2026', 'Maintenance — deep cleaning'], ['25 Dec 2026', 'Christmas — limited menu']].map(([d, t]) => <div key={d} className="flex items-center gap-3 rounded-xl border border-[#f2eaea] p-3"><span className="grid h-9 w-9 place-items-center rounded-lg bg-amber-50 text-amber-600"><Icon name="CalendarDays" size={16} /></span><div className="flex-1"><p className="text-xs font-bold">{t}</p><p className="text-[10px] text-[#8a7477]">{d}</p></div><button className="btn-ghost !px-2 !py-1 !text-[11px]" onClick={() => notify('Holiday removed')}>Remove</button></div>)}</div>
        <button className="btn-soft mt-4" onClick={() => notify('Holiday added')}><Icon name="Plus" size={15} /> Add holiday</button>
      </Card>}
    </div>
  );
}

/* ---------------- Offers ---------------- */
export function VendorOffers() {
  const { notify } = useApp();
  const [offers, setOffers] = useState([
    { id: 'o1', code: 'BHOMES20', title: '20% OFF up to ₹50', type: 'Percentage', min: '₹199', valid: 'Till 30 Nov 2026', status: 'Active' },
    { id: 'o2', code: 'FREESIDE', title: 'Free Gulab Jamun', type: 'Free item', min: '₹299', valid: 'Till 15 Dec 2026', status: 'Active' },
    { id: 'o3', code: 'WELCOME50', title: '₹50 OFF first order', type: 'Flat', min: '₹249', valid: 'Expired', status: 'Expired' },
  ]);
  return (
    <div className="fade-in">
      <PageHeader eyebrow="Catalog" title="Offers & Discounts" subtitle="Storefront promotions that auto-apply at checkout."
        actions={<button className="btn-primary" onClick={() => { setOffers((o) => [...o, { id: `o${Date.now()}`, code: 'NEW' + Math.floor(100 + Math.random() * 900), title: 'New store offer', type: 'Flat', min: '₹199', valid: 'Till 31 Dec 2026', status: 'Active' }]); notify('Offer created'); }}><Icon name="Plus" size={15} /> Create offer</button>} />
      <Card title="Your offers" subtitle="Coordinate with platform coupons — stacked discounts are validated server-side" noPad><div className="p-5 pt-0">
        <DataTable searchPlaceholder="Search offers…" columns={[
          { key: 'code', label: 'Code', render: (o) => <span className="rounded-lg bg-chaskaa-50 px-2 py-1 font-mono text-xs font-extrabold text-chaskaa-700">{o.code}</span> },
          { key: 'title', label: 'Offer', render: (o) => <span className="flex items-center gap-2"><img src={dishImage(o.title)} alt="" className="h-9 w-9 shrink-0 rounded-lg object-cover" /><b>{o.title}</b></span> }, { key: 'type', label: 'Type' }, { key: 'min', label: 'Min order' }, { key: 'valid', label: 'Validity' },
          { key: 'status', label: 'Status', render: (o) => <Badge tone={statusTone(o.status)} dot>{o.status}</Badge> },
          { key: 'action', label: 'Action', render: (o) => <div onClick={(e) => e.stopPropagation()}><button className="btn-ghost !px-2 !py-1 !text-[11px]" onClick={() => { setOffers((prev) => prev.map((x) => x.id === o.id ? { ...x, status: x.status === 'Active' ? 'Expired' : 'Active' } : x)); notify(o.status === 'Active' ? 'Offer paused' : 'Offer enabled'); }}>{o.status === 'Active' ? 'Pause' : 'Enable'}</button></div> },
        ]} rows={offers} />
      </div></Card>
    </div>
  );
}

/* ---------------- Earnings ---------------- */
export function VendorEarnings() {
  const { notify } = useApp();
  const settlements = [
    { id: 'STL-2041', period: '01–15 Nov 2026', gross: '₹84,620', commission: '− ₹15,232', net: '₹69,388', status: 'Paid', utr: 'UTI268422901' },
    { id: 'STL-2042', period: '16–30 Nov 2026', gross: '₹46,820', commission: '− ₹8,428', net: '₹38,392', status: 'Processing', utr: '—' },
    { id: 'STL-2039', period: '01–15 Oct 2026', gross: '₹78,340', commission: '− ₹14,101', net: '₹64,239', status: 'Paid', utr: 'UTI268411220' },
  ];
  return (
    <div className="fade-in">
      <PageHeader eyebrow="Business" title="Earnings & Settlements" subtitle="Gross sales, commission, taxes and payout statements." />
      <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <MiniStat label="This month gross" value="₹1,31,440" sub="+12.4% vs last month" icon="TrendingUp" />
        <MiniStat label="Platform commission" value="₹23,660" sub="18% of eligible subtotal" icon="CircleDollarSign" />
        <MiniStat label="Net earnings" value="₹1,07,780" icon="Wallet" tone="green" />
        <MiniStat label="Next settlement" value="₹38,392" sub="22 Nov 2026" icon="CalendarCheck" />
      </div>
      <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <Card title="Settlements" subtitle="Payout history and upcoming transfers" noPad><div className="p-5 pt-0">
          <DataTable search={false} columns={[
            { key: 'id', label: 'Settlement', render: (s) => <b className="text-chaskaa-700">{s.id}</b> },
            { key: 'period', label: 'Period' }, { key: 'gross', label: 'Gross', sortable: true },
            { key: 'commission', label: 'Commission' }, { key: 'net', label: 'Net', sortable: true },
            { key: 'status', label: 'Status', render: (s) => <Badge tone={statusTone(s.status)} dot>{s.status}</Badge> },
          ]} rows={settlements} />
        </div></Card>
        <Card title="Invoice & tax" subtitle="GST-ready statements">
          <div className="space-y-2">{[['GSTIN', '09AABCU1234F1Z5'], ['Tax rate', '5% on food'], ['Invoice series', 'BH/INV/26-27'], ['TDS', 'As applicable']].map(([k, v]) => <div key={k} className="flex justify-between rounded-xl bg-[#fdf8f8] p-3 text-xs"><span className="text-[#8a7477]">{k}</span><b>{v}</b></div>)}</div>
          <button className="btn-soft mt-4 w-full" onClick={() => notify('Invoice downloaded')}><Icon name="Download" size={15} /> Download November invoice</button>
        </Card>
      </div>
    </div>
  );
}

/* ---------------- Reviews ---------------- */
export function VendorReviews() {
  const reviews = [
    { id: 'r1', name: 'Ananya Verma', rating: 5, text: 'Paneer butter masala was delicious and packed hot. Delivery on time!', date: '19 Nov 2026', reply: '' },
    { id: 'r2', name: 'Vikram Yadav', rating: 4, text: 'Good taste, thali portion could be slightly bigger.', date: '18 Nov 2026', reply: 'Thanks for the feedback, Vikram!' },
    { id: 'r3', name: 'Sneha Kapoor', rating: 5, text: 'Daily tiffin is fresh and truly home-style. Highly recommended.', date: '17 Nov 2026', reply: '' },
    { id: 'r4', name: 'Deepak Jain', rating: 3, text: 'Order arrived 8 minutes late. Food was okay.', date: '16 Nov 2026', reply: '' },
  ];
  return (
    <div className="fade-in">
      <PageHeader eyebrow="Business" title="Ratings & Reviews" subtitle="Customer feedback across food orders and tiffin subscriptions." />
      <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <MiniStat label="Overall rating" value="★ 4.6" sub="2,104 ratings" icon="Star" />
        <MiniStat label="5-star reviews" value="68%" icon="CheckCircle2" tone="green" />
        <MiniStat label="Needs reply" value={reviews.filter((r) => !r.reply).length} icon="MessageCircle" />
        <MiniStat label="This month" value="312" icon="Users" />
      </div>
      <Card title="Recent reviews" subtitle="Reply publicly to build trust" noPad><div className="p-5 pt-0">
        <DataTable searchPlaceholder="Search reviews…" columns={[
          { key: 'name', label: 'Customer', render: (r) => <div className="flex items-center gap-2"><Avatar name={r.name} size="sm" /><b>{r.name}</b></div> },
          { key: 'rating', label: 'Rating', render: (r) => <span className="flex gap-0.5 text-amber-500">{Array.from({ length: r.rating }, (_, i) => <Icon key={i} name="Star" size={12} className="fill-amber-400 text-amber-400" />)}</span> },
          { key: 'text', label: 'Review' }, { key: 'date', label: 'Date' },
          { key: 'reply', label: 'Reply', render: (r) => r.reply ? <span className="text-emerald-600">Replied</span> : <Badge tone="amber">Pending</Badge> },
        ]} rows={reviews} />
      </div></Card>
    </div>
  );
}

/* ---------------- Staff & support ---------------- */
export function VendorStaff() {
  const { notify } = useApp();
  const staff = [
    { id: 'st1', name: 'Sunita Mishra', role: 'Kitchen Manager', phone: '+91 98765 00112', access: 'Full access', status: 'Active' },
    { id: 'st2', name: 'Ramesh Yadav', role: 'Head Chef', phone: '+91 98765 00113', access: 'Kitchen only', status: 'Active' },
    { id: 'st3', name: 'Pooja Singh', role: 'Packing Staff', phone: '+91 98765 00114', access: 'Packing only', status: 'Active' },
  ];
  const [tickets, setTickets] = useState([
    { id: 'SUP-811', subject: 'Customer says tiffin was missing salad', status: 'Open', priority: 'High' },
    { id: 'SUP-806', subject: 'Invoice for October corporate orders', status: 'Open', priority: 'Medium' },
    { id: 'SUP-799', subject: 'Menu item price update request', status: 'Resolved', priority: 'Low' },
  ]);
  return (
    <div className="fade-in">
      <PageHeader eyebrow="Business" title="Staff & Support" subtitle="Manage outlet staff permissions and resolve support tickets." />
      <div className="grid gap-5 lg:grid-cols-2">
        <Card title="Staff users" subtitle="Kitchen staff cannot change bank or contract details" action={<button className="btn-soft !py-2 !text-xs" onClick={() => notify('Staff invitation sent')}><Icon name="Plus" size={14} /> Add staff</button>} noPad><div className="p-5 pt-0">
          <DataTable search={false} columns={[
            { key: 'name', label: 'Name', render: (s) => <div className="flex items-center gap-2"><Avatar name={s.name} size="sm" /><b>{s.name}</b></div> },
            { key: 'role', label: 'Role' }, { key: 'access', label: 'Access' },
            { key: 'status', label: 'Status', render: (s) => <Badge tone={statusTone(s.status)} dot>{s.status}</Badge> },
          ]} rows={staff} />
        </div></Card>
        <Card title="Support tickets" subtitle="Escalate unresolved issues to Chaskaa support" noPad><div className="p-5 pt-0">
          <DataTable search={false} columns={[
            { key: 'id', label: 'Ticket', render: (t) => <b className="text-chaskaa-700">{t.id}</b> },
            { key: 'subject', label: 'Subject' }, { key: 'priority', label: 'Priority', render: (t) => <Badge tone={t.priority === 'High' ? 'red' : t.priority === 'Medium' ? 'amber' : 'neutral'}>{t.priority}</Badge> },
            { key: 'status', label: 'Status', render: (t) => <Badge tone={statusTone(t.status)} dot>{t.status}</Badge> },
            { key: 'action', label: 'Action', render: (t) => <div onClick={(e) => e.stopPropagation()}><button className="btn-ghost !px-2 !py-1 !text-[11px]" disabled={t.status === 'Resolved'} onClick={() => { setTickets((prev) => prev.map((x) => x.id === t.id ? { ...x, status: 'Resolved' } : x)); notify('Ticket resolved'); }}>Resolve</button></div> },
          ]} rows={tickets} />
        </div></Card>
      </div>
    </div>
  );
}

/* ---------------- Outlet settings ---------------- */
export function VendorSettings() {
  const { notify } = useApp();
  const [form, setForm] = useState({ name: 'Bhojan Homes', phone: '+91 98765 00100', fssai: '11422983000172', gst: '09AABCU1234F1Z5', prep: '20', radius: '5', open: true, hours: '09:00 AM – 10:00 PM' });
  const [kyc, setKyc] = useState({ fssai: 'Verified', bank: 'Verified',gstCert: 'Pending' });
  return (
    <div className="fade-in">
      <PageHeader eyebrow="Setup" title="Outlet Settings" subtitle="Shop profile, KYC documents, bank, timings and delivery radius." />
      <div className="grid gap-5 lg:grid-cols-2">
        <Card title="Shop profile" subtitle="Shown to customers on your storefront">
          <div className="space-y-4">
            <Field label="Outlet name"><input className="input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></Field>
            <Field label="Contact number"><input className="input" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></Field>
            <div className="grid grid-cols-2 gap-3">
              <Field label="FSSAI number"><input className="input" value={form.fssai} onChange={(e) => setForm({ ...form, fssai: e.target.value })} /></Field>
              <Field label="GSTIN"><input className="input" value={form.gst} onChange={(e) => setForm({ ...form, gst: e.target.value })} /></Field>
            </div>
            <button className="btn-primary" onClick={() => notify('Outlet profile saved')}>Save profile</button>
          </div>
        </Card>
        <Card title="Operations" subtitle="Preparation time, delivery radius and opening hours">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <Field label="Prep time (min)"><input className="input" type="number" value={form.prep} onChange={(e) => setForm({ ...form, prep: e.target.value })} /></Field>
              <Field label="Delivery radius (km)"><input className="input" type="number" value={form.radius} onChange={(e) => setForm({ ...form, radius: e.target.value })} /></Field>
            </div>
            <Field label="Opening hours"><input className="input" value={form.hours} onChange={(e) => setForm({ ...form, hours: e.target.value })} /></Field>
            <div className="flex items-center justify-between rounded-xl bg-[#fdf8f8] p-3"><span className="text-xs font-semibold">Accepting orders</span><Toggle checked={form.open} onChange={(v) => setForm({ ...form, open: v })} label="Accepting orders" /></div>
            <button className="btn-primary" onClick={() => notify('Operations settings saved')}>Save settings</button>
          </div>
        </Card>
        <Card title="KYC documents" subtitle="Verification status managed by Chaskaa admin">
          <div className="space-y-2">{[['FSSAI license', kyc.fssai], ['Bank account', kyc.bank], ['GST certificate', kyc.gstCert]].map(([k, v]) => <div key={k} className="flex items-center justify-between rounded-xl border border-[#f2eaea] p-3 text-xs"><span className="font-bold">{k}</span><Badge tone={statusTone(v)} dot>{v}</Badge></div>)}</div>
          <button className="btn-soft mt-4" onClick={() => notify('Document upload opened')}><Icon name="Plus" size={15} /> Upload document</button>
        </Card>
        <Card title="Bank details" subtitle="Settlements are credited to this account">
          <div className="space-y-2">{[['Account holder', 'Bhojan Homes Pvt Ltd'], ['Bank', 'State Bank of India'], ['Account number', '•••• •••• 4821'], ['IFSC', 'SBIN0001234'], ['UPI ID', 'bhojan@upi']].map(([k, v]) => <div key={k} className="flex justify-between rounded-xl bg-[#fdf8f8] p-3 text-xs"><span className="text-[#8a7477]">{k}</span><b>{v}</b></div>)}</div>
          <button className="btn-soft mt-4" onClick={() => notify('Bank update requires admin approval')}><Icon name="Pencil" size={14} /> Request bank update</button>
        </Card>
      </div>
    </div>
  );
}
