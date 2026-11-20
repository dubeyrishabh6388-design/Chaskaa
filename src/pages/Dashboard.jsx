import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts';
import { dashboardStats, orderStates, ordersByService, platformPerformance, serviceMix, topLocations } from '../data/mockData';
import { managementModules } from '../data/navigation';
import { useApp } from '../store/AppContext';
import { Badge, Card, Icon, ProgressBar, StatCard } from '../components/ui';

const moduleTones = {
  red: 'bg-chaskaa-50 text-chaskaa-600 group-hover:bg-chaskaa-600 group-hover:text-white',
  amber: 'bg-amber-50 text-amber-600 group-hover:bg-amber-500 group-hover:text-white',
  green: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white',
  purple: 'bg-violet-50 text-violet-600 group-hover:bg-violet-600 group-hover:text-white',
  blue: 'bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white',
  slate: 'bg-slate-100 text-slate-600 group-hover:bg-slate-700 group-hover:text-white',
  orange: 'bg-orange-50 text-orange-600 group-hover:bg-orange-500 group-hover:text-white',
  rose: 'bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white',
};

function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl border border-[#f0e5e5] bg-white px-3 py-2 shadow-float">
      <p className="mb-1 text-[11px] font-bold text-[#8a7477]">{label}</p>
      {payload.map((p) => (
        <p key={p.name} className="flex items-center gap-2 text-xs font-semibold text-[#2b1d20]">
          <span className="h-2 w-2 rounded-full" style={{ background: p.color }} />
          {p.name}: {p.value}
        </p>
      ))}
    </div>
  );
}

export default function Dashboard() {
  const navigate = useNavigate();
  const { alerts, orders, vendors, subscriptions } = useApp();
  const [range, setRange] = useState('Last 30 days');

  return (
    <div className="space-y-6 fade-in">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="mb-1 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 pulse-dot relative" />
            <span className="text-[11px] font-bold uppercase tracking-[.16em] text-emerald-600">Live operations</span>
          </div>
          <h1 className="text-[26px] font-extrabold tracking-tight text-[#2b1d20] sm:text-[30px]">Super Admin Dashboard</h1>
          <p className="mt-1 text-sm text-[#8a7477]">Manage, Monitor &amp; Grow Chaskaa</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <select value={range} onChange={(e) => setRange(e.target.value)} className="input !w-auto !py-2.5 text-xs font-semibold">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
          <button className="btn-primary" onClick={() => window.print()}><Icon name="Download" size={15} /> Export report</button>
        </div>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((s, i) => (
          <StatCard key={s.key} {...s} accent={['red', 'amber', 'purple', 'green'][i]}
            onClick={() => navigate(['/orders', '/subscriptions', '/users', '/payments'][i])} />
        ))}
      </div>

      {/* Chart + pipeline */}
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1.85fr)_minmax(300px,1fr)]">
        <Card title="Orders by Service" subtitle={`Delivery vs Tiffin · ${range}`}
          action={<div className="flex items-center gap-3 text-[11px] font-semibold">
            <span className="flex items-center gap-1.5 text-[#6d585b]"><span className="h-2.5 w-2.5 rounded-full bg-chaskaa-500" /> Delivery</span>
            <span className="flex items-center gap-1.5 text-[#6d585b]"><span className="h-2.5 w-2.5 rounded-full bg-amber-400" /> Tiffin</span>
          </div>}>
          <div className="mb-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-[#fdf7f6] p-3">
              <p className="text-[11px] font-semibold text-[#8a7477]">Total Orders</p>
              <p className="mt-1 text-xl font-extrabold text-[#2b1d20]">3,428 <span className="text-[11px] font-bold text-emerald-600">+12.4%</span></p>
            </div>
            <div className="rounded-xl bg-[#fffaf1] p-3">
              <p className="text-[11px] font-semibold text-[#8a7477]">Revenue</p>
              <p className="mt-1 text-xl font-extrabold text-[#2b1d20]">₹48,92,760 <span className="text-[11px] font-bold text-emerald-600">+15.7%</span></p>
            </div>
          </div>
          <div className="h-[245px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ordersByService} barGap={3} margin={{ top: 4, right: 4, left: -22, bottom: 0 }}>
                <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#f2e9e9" />
                <XAxis dataKey="date" tick={{ fontSize: 10, fill: '#9b888b' }} axisLine={false} tickLine={false} interval={0} />
                <YAxis tick={{ fontSize: 10, fill: '#9b888b' }} axisLine={false} tickLine={false} />
                <Tooltip content={<ChartTooltip />} cursor={{ fill: '#fdf5f5' }} />
                <Bar dataKey="delivery" name="Delivery" fill="#ec4b3f" radius={[5, 5, 0, 0]} maxBarSize={17} animationDuration={900} />
                <Bar dataKey="tiffin" name="Tiffin" fill="#f6b73c" radius={[5, 5, 0, 0]} maxBarSize={17} animationDuration={900} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-3 flex items-center justify-between rounded-xl border border-dashed border-[#f0dcdc] bg-[#fffbf9] px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-chaskaa-50 text-chaskaa-600"><Icon name="Soup" size={18} /></span>
              <div>
                <p className="text-xs font-bold text-[#2b1d20]">Chaskaa Tiffin Service</p>
                <p className="text-[11px] text-[#968486]">Daily + Weekly + Monthly Plans</p>
              </div>
            </div>
            <button onClick={() => navigate('/tiffin')} className="text-xs font-bold text-chaskaa-600 hover:underline">View plans →</button>
          </div>
        </Card>

        <div className="space-y-5">
          <Card title="Order Pipeline" subtitle="Live status breakdown"
            action={<button onClick={() => navigate('/orders')} className="text-xs font-bold text-chaskaa-600 hover:underline">View all</button>}>
            <div className="mb-4 flex items-center gap-3 rounded-xl bg-[#fdf7f6] p-3">
              <div className="relative h-16 w-16 shrink-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart><Pie data={orderStates} dataKey="count" innerRadius={21} outerRadius={30} paddingAngle={3} stroke="none">
                    {orderStates.map((s) => <Cell key={s.label} fill={s.color.replace('bg-', '') === 'emerald-500' ? '#10b981' : s.color.replace('bg-', '') === 'amber-400' ? '#fbbf24' : s.color.replace('bg-', '') === 'sky-400' ? '#38bdf8' : '#a78bfa'} />)}
                  </Pie></PieChart>
                </ResponsiveContainer>
                <span className="absolute inset-0 grid place-items-center text-[11px] font-extrabold text-[#2b1d20]">3.4k</span>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-[#2b1d20]">3,428</p>
                <p className="text-[11px] text-[#8a7477]">orders in the last 30 days</p>
              </div>
            </div>
            <div className="space-y-3">
              {orderStates.map((s) => (
                <div key={s.label}>
                  <div className="mb-1.5 flex items-center justify-between text-xs">
                    <span className="flex items-center gap-2 font-semibold text-[#4a3438]"><span className={`h-2 w-2 rounded-full ${s.color}`} /> {s.label}</span>
                    <span className="font-bold text-[#2b1d20]">{s.count.toLocaleString('en-IN')}</span>
                  </div>
                  <ProgressBar value={s.pct} tone={s.color} />
                </div>
              ))}
            </div>
          </Card>

          <Card title="Live Snapshot" subtitle="Right now on Chaskaa">
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Pending refunds', value: 3, icon: 'RotateCcw', path: '/payments' },
                { label: 'Pending vendors', value: vendors.filter((v) => v.status === 'Pending').length, icon: 'Store', path: '/vendors' },
                { label: 'Live orders', value: orders.filter((o) => !['Delivered', 'Cancelled'].includes(o.status)).length, icon: 'ShoppingBag', path: '/orders' },
                { label: 'Active plans', value: subscriptions.filter((s) => s.status === 'Active').length, icon: 'CalendarCheck', path: '/subscriptions' },
              ].map((i) => (
                <button key={i.label} onClick={() => navigate(i.path)} className="rounded-xl border border-[#f2eaea] p-3 text-left transition hover:border-chaskaa-200 hover:bg-chaskaa-50/40">
                  <Icon name={i.icon} size={16} className="text-chaskaa-500" />
                  <p className="mt-2 text-lg font-extrabold text-[#2b1d20]">{i.value}</p>
                  <p className="text-[10px] font-semibold text-[#8a7477]">{i.label}</p>
                </button>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Management modules */}
      <Card title="Management Modules" subtitle="Everything you need to run Chaskaa, one click away">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {managementModules.map((m) => (
            <button key={m.label} onClick={() => navigate(m.path)}
              className="group flex items-start gap-3 rounded-xl border border-[#f0e7e7] bg-white p-3.5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-chaskaa-200 hover:shadow-card">
              <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-colors ${moduleTones[m.tone]}`}><Icon name={m.icon} size={18} /></span>
              <div className="min-w-0">
                <p className="text-[13px] font-bold text-[#2b1d20]">{m.label}</p>
                <p className="mt-0.5 text-[10px] leading-relaxed text-[#968486]">{m.detail}</p>
              </div>
            </button>
          ))}
        </div>
      </Card>

      {/* Bottom panels */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <Card title="Platform Performance" subtitle="Last 70 days" action={<Icon name="TrendingUp" size={17} className="text-chaskaa-500" />}>
          <div className="grid grid-cols-2 gap-x-4 gap-y-5">
            {platformPerformance.map((p) => (
              <div key={p.label}>
                <p className="text-xl font-extrabold text-[#2b1d20]">{p.value}</p>
                <p className="text-[11px] font-semibold text-[#8a7477]">{p.label}</p>
                <p className="mt-1 text-[10px] font-bold text-emerald-600">{p.change} vs last period</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-xl bg-[#fdf7f6] p-3">
            <div className="mb-2 flex items-center justify-between text-[11px]">
              <span className="font-bold text-[#4a3438]">Revenue mix</span>
              <span className="font-bold text-chaskaa-600">+18.2% MoM</span>
            </div>
            <div className="flex h-2 gap-1 overflow-hidden rounded-full">
              {serviceMix.map((s) => <div key={s.name} style={{ width: `${s.value}%`, background: s.color }} />)}
            </div>
            <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
              {serviceMix.map((s) => <span key={s.name} className="flex items-center gap-1 text-[10px] text-[#8a7477]"><span className="h-1.5 w-1.5 rounded-full" style={{ background: s.color }} /> {s.name}</span>)}
            </div>
          </div>
        </Card>

        <Card title="Top Performing Locations" subtitle="By revenue this month"
          action={<button onClick={() => navigate('/reports')} className="text-xs font-bold text-chaskaa-600 hover:underline">View All →</button>}>
          <div className="space-y-1">
            {topLocations.map((l, i) => (
              <div key={l.city} className="flex items-center gap-3 rounded-xl px-2 py-2.5 transition hover:bg-[#fdf8f8]">
                <span className={`grid h-8 w-8 place-items-center rounded-lg text-xs font-extrabold ${i === 0 ? 'bg-chaskaa-600 text-white' : 'bg-[#f6f0f0] text-[#7a6265]'}`}>{i + 1}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] font-bold text-[#2b1d20]">{l.city}</p>
                  <p className="text-[10px] text-[#968486]">{l.orders.toLocaleString('en-IN')} orders</p>
                </div>
                <div className="text-right">
                  <p className="text-[13px] font-extrabold text-[#2b1d20]">{l.revenue}</p>
                  <p className="text-[10px] font-bold text-emerald-600">{l.growth}</p>
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => navigate('/reports')} className="mt-3 w-full rounded-xl border border-dashed border-[#eadddd] py-2 text-[11px] font-bold text-[#8a7477] hover:border-chaskaa-300 hover:text-chaskaa-600">View all locations</button>
        </Card>

        <Card title="Important Alerts" subtitle="Needs your attention"
          action={<button onClick={() => navigate('/support')} className="text-xs font-bold text-chaskaa-600 hover:underline">View All →</button>}>
          <div className="space-y-2.5">
            {alerts.length ? alerts.map((a) => (
              <button key={a.id} onClick={() => navigate(a.type === 'payment' ? '/payments' : a.type === 'support' ? '/support' : '/vendors')}
                className="flex w-full items-start gap-3 rounded-xl border border-[#f3eaea] p-3 text-left transition hover:border-chaskaa-200 hover:bg-[#fffbfb]">
                <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ${a.type === 'payment' ? 'bg-amber-50 text-amber-600' : a.type === 'support' ? 'bg-sky-50 text-sky-600' : 'bg-chaskaa-50 text-chaskaa-600'}`}>
                  <Icon name={a.type === 'payment' ? 'Wallet' : a.type === 'support' ? 'LifeBuoy' : 'BadgeCheck'} size={15} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[12px] font-bold text-[#2b1d20]">{a.title}</span>
                  <span className="mt-0.5 block text-[10px] text-[#968486]">{a.time}</span>
                </span>
                <Icon name="ChevronRight" size={15} className="mt-1 text-[#bcacae]" />
              </button>
            )) : <div className="py-8 text-center"><Badge tone="green">All caught up</Badge><p className="mt-2 text-xs text-[#8a7477]">No pending alerts right now.</p></div>}
          </div>
          <div className="mt-4 flex items-center justify-between rounded-xl bg-[#fdf7f6] px-3 py-2.5">
            <span className="flex items-center gap-2 text-[11px] font-semibold text-[#6d585b]"><Icon name="ShieldCheck" size={15} className="text-emerald-600" /> Platform health</span>
            <Badge tone="green" dot>Operational</Badge>
          </div>
        </Card>
      </div>
    </div>
  );
}
