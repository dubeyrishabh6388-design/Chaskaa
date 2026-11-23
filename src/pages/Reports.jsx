import { useState } from 'react';
import {
  Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart,
  ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts';
import { revenueSeries, serviceMix, topLocations, zonePerformance } from '../data/mockData';
import { useApp } from '../store/AppContext';
import { Badge, Card, DataTable, Icon, PageHeader, ProgressBar } from '../components/ui';

const tooltipStyle = { borderRadius: 12, border: '1px solid #f0e5e5', fontSize: 12, boxShadow: '0 12px 30px rgba(58,8,17,.12)' };

export default function Reports() {
  const { notify } = useApp();
  const [metric, setMetric] = useState('GMV');
  return (
    <div className="fade-in">
      <PageHeader eyebrow="Insights" title="Reports & Analytics" subtitle="Business performance, unit economics, retention and operational health."
        actions={<><select className="input !w-auto !py-2.5 text-xs font-semibold" value={metric} onChange={(e) => setMetric(e.target.value)}><option>GMV</option><option>Net revenue</option><option>Orders</option></select>
          <button className="btn-primary" onClick={() => notify('Report exported as CSV')}><Icon name="Download" size={15} /> Export</button></>} />

      <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[['Gross merchandise value', '₹1,24,86,300', '+18.4%'], ['Net platform revenue', '₹22,41,540', '+15.9%'], ['Avg. order value', '₹364', '+4.2%'], ['Contribution margin', '₹1.82 / order', '+12.1%']].map(([l, v, c]) => (
          <div key={l} className="card p-4"><p className="text-[11px] font-semibold text-[#8a7477]">{l}</p><p className="mt-1 text-xl font-extrabold text-[#2b1d20]">{v}</p><p className="mt-1 text-[10px] font-bold text-emerald-600">{c} vs last month</p></div>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.7fr)_minmax(280px,1fr)]">
        <Card title={`${metric} trend`} subtitle="Monthly performance · Jan–Nov 2026">
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueSeries} margin={{ left: -18, right: 8 }}>
                <defs><linearGradient id="gmv" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#b00528" stopOpacity={0.35} /><stop offset="100%" stopColor="#b00528" stopOpacity={0.02} /></linearGradient></defs>
                <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#f2e9e9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9b888b' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9b888b' }} />
                <Tooltip contentStyle={tooltipStyle} />
                <Area type="monotone" dataKey="gmv" name="GMV (₹ lakh)" stroke="#b00528" strokeWidth={2.5} fill="url(#gmv)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card title="Service mix" subtitle="Share of total volume">
          <div className="h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart><Pie data={serviceMix} dataKey="value" nameKey="name" innerRadius={55} outerRadius={82} paddingAngle={3} stroke="none">
                {serviceMix.map((s) => <Cell key={s.name} fill={s.color} />)}
              </Pie><Tooltip contentStyle={tooltipStyle} /></PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2">{serviceMix.map((s) => <div key={s.name} className="flex items-center justify-between text-xs"><span className="flex items-center gap-2 text-[#6d585b]"><span className="h-2.5 w-2.5 rounded-full" style={{ background: s.color }} /> {s.name}</span><b>{s.value}%</b></div>)}</div>
        </Card>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <Card title="Revenue vs platform share" subtitle="₹ lakh per month">
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueSeries} barGap={2} margin={{ left: -18 }}>
                <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#f2e9e9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9b888b' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9b888b' }} />
                <Tooltip contentStyle={tooltipStyle} /><Legend wrapperStyle={{ fontSize: 11 }} />
                <Bar dataKey="gmv" name="GMV" fill="#f6b73c" radius={[4, 4, 0, 0]} maxBarSize={20} />
                <Bar dataKey="revenue" name="Net revenue" fill="#b00528" radius={[4, 4, 0, 0]} maxBarSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card title="Unit economics" subtitle="Illustrative per-order contribution before overheads">
          <div className="space-y-2">
            {[['Food subtotal', 200, 'bg-slate-400'], ['Commission 18%', 36, 'bg-emerald-500'], ['Delivery fee', 25, 'bg-emerald-500'], ['Rider payout', -40, 'bg-rose-400'], ['Payment fee', -5, 'bg-rose-400'], ['Promo + support', -14, 'bg-rose-400']].map(([label, value, tone]) => (
              <div key={label}><div className="mb-1 flex justify-between text-[11px]"><span className="font-semibold text-[#6d585b]">{label}</span><b className={value < 0 ? 'text-rose-600' : 'text-emerald-600'}>{value > 0 ? '+' : ''}₹{Math.abs(value)}</b></div><ProgressBar value={Math.abs(value) * 2} tone={tone} /></div>
            ))}
            <div className="mt-4 flex items-center justify-between rounded-xl bg-[#fdf7f6] p-3"><span className="text-xs font-bold">Contribution / order</span><span className="text-lg font-extrabold text-emerald-600">₹2.00</span></div>
          </div>
        </Card>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <Card title="Zone performance" subtitle="Orders, on-time rate and revenue by cluster" noPad><div className="p-5 pt-0">
          <DataTable search={false} columns={[
            { key: 'zone', label: 'Zone', render: (z) => <span className="font-bold">{z.zone}</span> },
            { key: 'orders', label: 'Orders', sortable: true },
            { key: 'onTime', label: 'On-time', render: (z) => <div className="w-24"><div className="mb-1 flex justify-between text-[10px] font-semibold"><span>{z.onTime}%</span></div><ProgressBar value={z.onTime} tone={z.onTime >= 92 ? 'bg-emerald-500' : 'bg-amber-400'} /></div> },
            { key: 'revenue', label: 'Revenue' },
          ]} rows={zonePerformance} />
        </div></Card>
        <Card title="Top locations" subtitle="Revenue leaders this month">
          <div className="space-y-3">{topLocations.map((l, i) => <div key={l.city} className="flex items-center gap-3 rounded-xl border border-[#f2eaea] p-3">
            <span className={`grid h-9 w-9 place-items-center rounded-lg text-xs font-extrabold ${i === 0 ? 'bg-chaskaa-600 text-white' : 'bg-[#f6f0f0]'}`}>{i + 1}</span>
            <div className="flex-1"><p className="text-sm font-bold">{l.city}</p><p className="text-[11px] text-[#8a7477]">{l.orders.toLocaleString('en-IN')} orders</p></div>
            <div className="text-right"><p className="text-sm font-extrabold">{l.revenue}</p><Badge tone="green">{l.growth}</Badge></div>
          </div>)}</div>
          <p className="mt-4 text-[11px] leading-relaxed text-[#8a7477]">Targets and unit economics are illustrative hypotheses for the Lucknow pilot — not industry benchmarks. Validate with actual vendor quotes and observed delivery costs.</p>
        </Card>
      </div>
    </div>
  );
}
