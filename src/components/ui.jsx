import { useEffect, useMemo, useState } from 'react';
import {
  AlertCircle, ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, BadgeCheck, Banknote,
  BarChart3, Bell, Bike, CakeSlice, CalendarCheck, CalendarDays, ChefHat, Check,
  CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, CircleDollarSign, ClipboardList,
  Clock, Coffee, Cookie, CreditCard, Croissant, Download, FileText, Filter, Gift, Heart, HelpCircle, Home,
  IceCreamBowl, LayoutDashboard, LifeBuoy, LogOut, MapPin, Megaphone, Menu, MessageCircle, Minus,
  MoreHorizontal, Package, Pencil, Phone, Pizza, Plus, Receipt, RotateCcw, Salad, Sandwich,
  Search, Settings, ShieldCheck, ShoppingBag, Smartphone, Soup, Soup as LunchBox, Star, Store, Ticket,
  Trash2, TrendingUp, Truck, User, Users, Utensils, Utensils as Noodles, Wallet, X, Zap,
} from 'lucide-react';

const icons = {
  AlertCircle, ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, BadgeCheck, Banknote,
  BarChart3, Bell, Bike, CakeSlice, CalendarCheck, CalendarDays, ChefHat, Check,
  CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, CircleDollarSign, ClipboardList,
  Clock, Coffee, Cookie, CreditCard, Croissant, Download, FileText, Filter, Gift, Heart, HelpCircle, Home,
  IceCreamBowl, LayoutDashboard, LifeBuoy, LogOut, LunchBox, MapPin, Megaphone, Menu, MessageCircle, Minus,
  MoreHorizontal, Noodles, Package, Pencil, Phone, Pizza, Plus, Receipt, RotateCcw, Salad, Sandwich,
  Search, Settings, ShieldCheck, ShoppingBag, Smartphone, Soup, Star, Store, Ticket,
  Trash2, TrendingUp, Truck, User, Users, Utensils, Wallet, X, Zap,
};

export function Icon({ name, size = 18, className = '', ...props }) {
  const Cmp = icons[name] || AlertCircle;
  return <Cmp size={size} className={className} {...props} />;
}

export function Badge({ children, tone = 'neutral', dot = false, className = '' }) {
  const tones = {
    green: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
    red: 'bg-chaskaa-50 text-chaskaa-700 ring-chaskaa-200',
    amber: 'bg-amber-50 text-amber-700 ring-amber-200',
    blue: 'bg-sky-50 text-sky-700 ring-sky-200',
    purple: 'bg-violet-50 text-violet-700 ring-violet-200',
    neutral: 'bg-[#f6f1f1] text-[#6d585b] ring-[#e8dcdc]',
  };
  return (
    <span className={`chip ring-1 ring-inset ${tones[tone] || tones.neutral} ${className}`}>
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-current" />}
      {children}
    </span>
  );
}

export function statusTone(status) {
  const s = String(status || '').toLowerCase();
  if (['approved', 'delivered', 'active', 'live', 'captured', 'paid', 'completed', 'resolved', 'verified', 'success'].includes(s)) return 'green';
  if (['pending', 'preparing', 'processing', 'scheduled', 'open', 'review', 'onboarding', 'upcoming'].includes(s)) return 'amber';
  if (['suspended', 'cancelled', 'refunded', 'blocked', 'rejected', 'expired', 'failed'].includes(s)) return 'red';
  if (['in progress', 'out for delivery', 'paused'].includes(s)) return 'blue';
  return 'neutral';
}

export function Card({ children, className = '', title, subtitle, action, noPad = false }) {
  return (
    <section className={`card ${className}`}>
      {(title || action) && (
        <div className="flex flex-wrap items-start justify-between gap-3 px-5 pb-3 pt-5">
          <div>
            {title && <h3 className="text-[15px] font-bold text-[#2b1d20]">{title}</h3>}
            {subtitle && <p className="mt-0.5 text-xs text-[#968486]">{subtitle}</p>}
          </div>
          {action}
        </div>
      )}
      <div className={noPad ? '' : 'px-5 pb-5'}>{children}</div>
    </section>
  );
}

export function PageHeader({ eyebrow, title, subtitle, actions }) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4 fade-in">
      <div>
        {eyebrow && <p className="mb-1 text-[11px] font-bold uppercase tracking-[.18em] text-chaskaa-600">{eyebrow}</p>}
        <h1 className="text-2xl font-extrabold tracking-tight text-[#2b1d20] sm:text-[28px]">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-[#8a7477]">{subtitle}</p>}
      </div>
      {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
    </div>
  );
}

export function StatCard({ label, value, change, note, icon = 'TrendingUp', accent = 'red', onClick }) {
  const accents = {
    red: 'bg-chaskaa-50 text-chaskaa-600',
    amber: 'bg-amber-50 text-amber-600',
    green: 'bg-emerald-50 text-emerald-600',
    purple: 'bg-violet-50 text-violet-600',
  };
  return (
    <button
      type="button"
      onClick={onClick}
      className="card group w-full p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-chaskaa-200 hover:shadow-float"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-xs font-semibold text-[#8a7477]">{label}</p>
          <p className="mt-2 truncate text-[22px] font-extrabold tracking-tight text-[#2b1d20] sm:text-[26px]">{value}</p>
        </div>
        <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${accents[accent] || accents.red}`}>
          <Icon name={icon} size={19} />
        </span>
      </div>
      <div className="mt-3 flex items-center gap-2 text-[11px]">
        <span className="inline-flex items-center gap-0.5 font-bold text-emerald-600">
          <Icon name="ArrowUpRight" size={13} /> {change}
        </span>
        <span className="text-[#a89598]">{note}</span>
      </div>
    </button>
  );
}

export function Modal({ open, onClose, title, subtitle, children, footer, width = 'max-w-lg' }) {
  useEffect(() => {
    if (!open) return undefined;
    const fn = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', fn);
    return () => document.removeEventListener('keydown', fn);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#2b1d20]/45 p-4 backdrop-blur-sm" onMouseDown={onClose}>
      <div className={`w-full ${width} max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl fade-in`} onMouseDown={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between gap-4 border-b border-[#f1e8e8] px-6 py-4">
          <div>
            <h3 className="text-lg font-bold text-[#2b1d20]">{title}</h3>
            {subtitle && <p className="mt-0.5 text-xs text-[#8a7477]">{subtitle}</p>}
          </div>
          <button className="rounded-lg p-1.5 text-[#8a7477] hover:bg-[#f8f2f2]" onClick={onClose} aria-label="Close">
            <Icon name="X" size={18} />
          </button>
        </div>
        <div className="px-6 py-5">{children}</div>
        {footer && <div className="flex justify-end gap-2 border-t border-[#f1e8e8] bg-[#fdf9f9] px-6 py-4">{footer}</div>}
      </div>
    </div>
  );
}

export function Field({ label, children, hint }) {
  return (
    <label className="block">
      <span className="label">{label}</span>
      {children}
      {hint && <span className="mt-1 block text-[11px] text-[#a89598]">{hint}</span>}
    </label>
  );
}

export function EmptyState({ icon = 'Search', title = 'Nothing found', text }) {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-14 text-center">
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-chaskaa-50 text-chaskaa-500">
        <Icon name={icon} size={22} />
      </div>
      <p className="mt-3 font-bold text-[#2b1d20]">{title}</p>
      {text && <p className="mt-1 max-w-sm text-xs text-[#8a7477]">{text}</p>}
    </div>
  );
}

export function DataTable({ columns, rows, search = true, searchPlaceholder = 'Search records…', pageSize = 8, emptyTitle, onRowClick }) {
  const [q, setQ] = useState('');
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState(null);

  const filtered = useMemo(() => {
    let out = rows || [];
    if (q.trim()) {
      const needle = q.toLowerCase();
      out = out.filter((r) => Object.values(r).some((v) => String(v ?? '').toLowerCase().includes(needle)));
    }
    if (sort) {
      out = [...out].sort((a, b) => {
        const av = String(a[sort.key] ?? ''), bv = String(b[sort.key] ?? '');
        const n = Number(av.replace(/[^\d.-]/g, '')) - Number(bv.replace(/[^\d.-]/g, ''));
        return (Number.isNaN(n) ? av.localeCompare(bv) : n) * (sort.dir === 'asc' ? 1 : -1);
      });
    }
    return out;
  }, [rows, q, sort]);

  useEffect(() => setPage(1), [q, rows]);

  const pages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const visible = filtered.slice((page - 1) * pageSize, page * pageSize);

  const toggleSort = (key) => setSort((s) => (s?.key === key ? { key, dir: s.dir === 'asc' ? 'desc' : 'asc' } : { key, dir: 'asc' }));

  return (
    <div>
      {search && (
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <div className="relative min-w-[220px] flex-1 sm:max-w-sm">
            <Icon name="Search" size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#a89598]" />
            <input className="input pl-9" placeholder={searchPlaceholder} value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
          <span className="rounded-lg bg-[#f8f3f3] px-3 py-2 text-xs font-semibold text-[#8a7477]">{filtered.length} records</span>
        </div>
      )}
      <div className="overflow-x-auto rounded-xl border border-[#f0e7e7]">
        <table className="w-full min-w-[720px] border-collapse bg-white text-left">
          <thead className="border-b border-[#f0e7e7]">
            <tr>
              {columns.map((c) => (
                <th key={c.key || c.label} className={`table-head ${c.sortable ? 'cursor-pointer select-none hover:text-chaskaa-600' : ''}`} onClick={() => c.sortable && toggleSort(c.key)}>
                  <span className="inline-flex items-center gap-1">
                    {c.label}
                    {c.sortable && <Icon name="ChevronDown" size={12} className={sort?.key === c.key ? 'text-chaskaa-600' : 'opacity-40'} />}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f5eeee]">
            {visible.map((row, i) => (
              <tr key={row.id || i} className={`transition-colors hover:bg-[#fdf9f9] ${onRowClick ? 'cursor-pointer' : ''}`} onClick={() => onRowClick?.(row)}>
                {columns.map((c) => (
                  <td key={c.key || c.label} className="table-cell">{c.render ? c.render(row) : row[c.key]}</td>
                ))}
              </tr>
            ))}
            {visible.length === 0 && (
              <tr><td colSpan={columns.length}><EmptyState title={emptyTitle || 'No matching records'} text="Try a different search or clear the filters." /></td></tr>
            )}
          </tbody>
        </table>
      </div>
      {filtered.length > pageSize && (
        <div className="mt-4 flex items-center justify-between text-xs text-[#8a7477]">
          <span>Showing {(page - 1) * pageSize + 1}–{Math.min(page * pageSize, filtered.length)} of {filtered.length}</span>
          <div className="flex items-center gap-1">
            <button className="btn-ghost !p-2" disabled={page === 1} onClick={() => setPage((p) => p - 1)}><Icon name="ChevronLeft" size={15} /></button>
            <span className="px-2 font-semibold text-[#2b1d20]">{page} / {pages}</span>
            <button className="btn-ghost !p-2" disabled={page === pages} onClick={() => setPage((p) => p + 1)}><Icon name="ChevronRight" size={15} /></button>
          </div>
        </div>
      )}
    </div>
  );
}

export function Avatar({ name, size = 'md', tone = 'red' }) {
  const initials = String(name || '?').split(' ').map((p) => p[0]).slice(0, 2).join('').toUpperCase();
  const sizes = { sm: 'h-8 w-8 text-[11px]', md: 'h-10 w-10 text-xs', lg: 'h-12 w-12 text-sm' };
  const tones = { red: 'bg-chaskaa-100 text-chaskaa-700', wine: 'bg-wine-100 text-wine-700', sidebar: 'bg-white/20 text-white', amber: 'bg-amber-100 text-amber-700' };
  return <span className={`grid shrink-0 place-items-center rounded-full font-bold ${sizes[size]} ${tones[tone]}`}>{initials}</span>;
}

export function ProgressBar({ value, tone = 'bg-chaskaa-500' }) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#f1e8e8]">
      <div className={`h-full rounded-full ${tone} transition-all duration-700`} style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
    </div>
  );
}

export function Toggle({ checked, onChange, label }) {
  return (
    <button type="button" role="switch" aria-checked={checked} aria-label={label} onClick={() => onChange(!checked)}
      className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${checked ? 'bg-chaskaa-600' : 'bg-[#ddd1d1]'}`}>
      <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${checked ? 'translate-x-[22px]' : 'translate-x-0.5'}`} />
    </button>
  );
}

export function Toast({ toast }) {
  if (!toast) return null;
  return (
    <div className="fixed bottom-[calc(150px+var(--safe-b))] left-3 right-3 z-[80] flex items-center gap-3 rounded-xl bg-[#2b1d20] px-4 py-3 text-sm font-semibold text-white shadow-2xl fade-in lg:bottom-5 lg:left-auto lg:right-5">
      <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-500"><Icon name="Check" size={14} /></span>
      {toast.message}
    </div>
  );
}
