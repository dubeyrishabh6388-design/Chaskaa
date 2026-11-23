import { useState } from 'react';
import { auditLogs, banners, companies, coupons, payments, refunds, settlements, staffRoles, users } from '../data/mockData';
import { bannerImageFor } from '../data/images';
import { useApp } from '../store/AppContext';
import { Avatar, Badge, Card, DataTable, Field, Icon, Modal, PageHeader, ProgressBar, Toggle, statusTone } from '../components/ui';

/* ---------------- Users & Access ---------------- */
export function Users() {
  const { notify } = useApp();
  const [tab, setTab] = useState('Customers');
  return (
    <div className="fade-in">
      <PageHeader eyebrow="Business Management" title="Users & Access" subtitle="Customer accounts, corporate organizations, subsidies and account status." />
      <div className="mb-5 flex gap-2">{['Customers', 'Corporate accounts'].map((t) => <button key={t} onClick={() => setTab(t)} className={`rounded-xl px-3.5 py-2 text-xs font-bold ${tab === t ? 'bg-chaskaa-600 text-white' : 'border border-[#eadddd] bg-white text-[#6d585b] hover:bg-chaskaa-50'}`}>{t}</button>)}</div>
      {tab === 'Customers' ? <Card title="Customer accounts" subtitle="Verified users across all service cities" noPad><div className="p-5 pt-0">
        <DataTable searchPlaceholder="Search name, phone, email or ID…"
          columns={[
            { key: 'name', label: 'User', render: (u) => <div className="flex items-center gap-3"><Avatar name={u.name} /><div><p className="font-bold text-[#2b1d20]">{u.name}</p><p className="text-[11px] text-[#968486]">{u.id}</p></div></div> },
            { key: 'phone', label: 'Phone' },
            { key: 'email', label: 'Email' },
            { key: 'role', label: 'Role', render: (u) => <Badge tone={u.role === 'Corporate' || u.role === 'Corporate Manager' ? 'purple' : u.role === 'Student' ? 'amber' : 'neutral'}>{u.role}</Badge> },
            { key: 'city', label: 'City' },
            { key: 'orders', label: 'Orders', sortable: true },
            { key: 'wallet', label: 'Wallet', sortable: true },
            { key: 'status', label: 'Status', render: (u) => <Badge tone={statusTone(u.status)} dot>{u.status}</Badge> },
            { key: 'action', label: 'Action', render: (u) => <div onClick={(e) => e.stopPropagation()}><button className="btn-ghost !px-2 !py-1 !text-[11px]" onClick={() => notify(u.status === 'Active' ? 'Account blocked' : 'Account reactivated')}>{u.status === 'Active' ? 'Block' : 'Unblock'}</button></div> },
          ]} rows={users} />
      </div></Card> : <Card title="Corporate organizations" subtitle="B2B accounts, seats, billing and credit exposure" noPad><div className="p-5 pt-0">
        <DataTable searchPlaceholder="Search company, GSTIN or site…"
          columns={[
            { key: 'name', label: 'Organization', render: (c) => <span className="font-bold text-[#2b1d20]">{c.name}<span className="block text-[11px] font-normal text-[#968486]">{c.id} · {c.gst}</span></span> },
            { key: 'site', label: 'Site' },
            { key: 'seats', label: 'Seats', sortable: true },
            { key: 'active', label: 'Active employees', render: (c) => <div className="w-24"><div className="mb-1 flex justify-between text-[10px] font-semibold"><span>{c.active}/{c.seats}</span></div><ProgressBar value={(c.active / c.seats) * 100} /></div> },
            { key: 'billing', label: 'Billing mode' },
            { key: 'invoice', label: 'Outstanding', sortable: true },
            { key: 'status', label: 'Status', render: (c) => <Badge tone={statusTone(c.status)} dot>{c.status}</Badge> },
          ]} rows={companies} />
      </div></Card>}
    </div>
  );
}

/* ---------------- Payments ---------------- */
export function Payments() {
  const { notify } = useApp();
  const [tab, setTab] = useState('Transactions');
  const tabs = ['Transactions', 'Refunds', 'Settlements'];
  return (
    <div className="fade-in">
      <PageHeader eyebrow="Finance" title="Payments & Wallets" subtitle="Gateway events, refunds, COD, vendor settlements and ledger reconciliation." />
      <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[['Captured today', '₹4,82,640'], ['Refunds pending', '₹8,420'], ['Settlements due', '₹3,42,680'], ['COD in hand', '₹6,180']].map(([l, v], i) => <div key={l} className="card p-4"><p className="text-[11px] font-semibold text-[#8a7477]">{l}</p><p className={`mt-1 text-xl font-extrabold ${i === 1 ? 'text-rose-600' : 'text-[#2b1d20]'}`}>{v}</p></div>)}
      </div>
      <div className="mb-5 flex gap-2">{tabs.map((t) => <button key={t} onClick={() => setTab(t)} className={`rounded-xl px-3.5 py-2 text-xs font-bold ${tab === t ? 'bg-chaskaa-600 text-white' : 'border border-[#eadddd] bg-white text-[#6d585b] hover:bg-chaskaa-50'}`}>{t}</button>)}</div>
      <Card title={tab} subtitle="Immutable ledger-backed records" noPad><div className="p-5 pt-0">
        {tab === 'Transactions' && <DataTable searchPlaceholder="Search payment ID, order or customer…" columns={[
          { key: 'id', label: 'Payment ID', render: (p) => <span className="font-bold text-chaskaa-700">{p.id}</span> },
          { key: 'ref', label: 'Reference' }, { key: 'customer', label: 'Customer' },
          { key: 'method', label: 'Method' }, { key: 'amount', label: 'Amount', sortable: true },
          { key: 'gateway', label: 'Gateway' },
          { key: 'status', label: 'Status', render: (p) => <Badge tone={statusTone(p.status)} dot>{p.status}</Badge> },
          { key: 'time', label: 'Time' },
          { key: 'action', label: 'Action', render: () => <div onClick={(e) => e.stopPropagation()}><button className="btn-ghost !px-2 !py-1 !text-[11px]" onClick={() => notify('Refund workflow started')}>Refund</button></div> },
        ]} rows={payments} />}
        {tab === 'Refunds' && <DataTable searchPlaceholder="Search refund or order…" columns={[
          { key: 'id', label: 'Refund ID', render: (r) => <span className="font-bold text-chaskaa-700">{r.id}</span> },
          { key: 'order', label: 'Order / Subscription' }, { key: 'customer', label: 'Customer' },
          { key: 'amount', label: 'Amount', sortable: true }, { key: 'reason', label: 'Reason' },
          { key: 'status', label: 'Status', render: (r) => <Badge tone={statusTone(r.status)} dot>{r.status}</Badge> },
          { key: 'initiated', label: 'Initiated' },
          { key: 'action', label: 'Action', render: (r) => <div onClick={(e) => e.stopPropagation()}><button className="btn-soft !px-2 !py-1 !text-[11px]" disabled={r.status === 'Completed'} onClick={() => notify(`Refund ${r.id} approved`)}>Approve</button></div> },
        ]} rows={refunds} />}
        {tab === 'Settlements' && <DataTable searchPlaceholder="Search vendor or UTR…" columns={[
          { key: 'id', label: 'Settlement', render: (s) => <span className="font-bold text-chaskaa-700">{s.id}</span> },
          { key: 'vendor', label: 'Vendor' }, { key: 'period', label: 'Period' },
          { key: 'gross', label: 'Gross', sortable: true }, { key: 'commission', label: 'Commission' },
          { key: 'net', label: 'Net payable', sortable: true, render: (s) => <span className="font-bold">{s.net}</span> },
          { key: 'status', label: 'Status', render: (s) => <Badge tone={statusTone(s.status)} dot>{s.status}</Badge> },
          { key: 'utr', label: 'UTR' },
          { key: 'action', label: 'Action', render: (s) => <div onClick={(e) => e.stopPropagation()}><button className="btn-soft !px-2 !py-1 !text-[11px]" disabled={s.status === 'Paid'} onClick={() => notify(`Payout initiated for ${s.vendor}`)}>Pay now</button></div> },
        ]} rows={settlements} />}
      </div></Card>
    </div>
  );
}

/* ---------------- Marketing ---------------- */
export function Marketing() {
  const { coupons, banners, addCoupon, toggleCoupon, addBanner } = useApp();
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState({ code: '', value: '', min: '', applicable: 'Food · All users', valid: '' });
  const [bannerTitle, setBannerTitle] = useState('');
  const [tab, setTab] = useState('Coupons');

  const saveCoupon = () => {
    addCoupon({ id: `COUP-${Date.now()}`, code: form.code.toUpperCase(), type: 'Custom offer', value: form.value, min: form.min, usage: '0 / 1,000', applicable: form.applicable, valid: form.valid || '01 Dec – 31 Dec 2026', status: 'Active' });
    setModal(null); setForm({ code: '', value: '', min: '', applicable: 'Food · All users', valid: '' });
  };

  return (
    <div className="fade-in">
      <PageHeader eyebrow="Growth" title="Marketing & Promotions" subtitle="Coupons, banners, referral rules and broadcast campaigns."
        actions={<button className="btn-primary" onClick={() => setModal(tab === 'Coupons' ? 'coupon' : 'banner')}><Icon name="Plus" size={16} /> Create {tab === 'Coupons' ? 'coupon' : 'banner'}</button>} />
      <div className="mb-5 flex gap-2">{['Coupons', 'Banners', 'Broadcast'].map((t) => <button key={t} onClick={() => setTab(t)} className={`rounded-xl px-3.5 py-2 text-xs font-bold ${tab === t ? 'bg-chaskaa-600 text-white' : 'border border-[#eadddd] bg-white text-[#6d585b] hover:bg-chaskaa-50'}`}>{t}</button>)}</div>
      {tab === 'Coupons' && <Card title="Coupons" subtitle="Rules, usage limits and validity windows" noPad><div className="p-5 pt-0">
        <DataTable searchPlaceholder="Search coupon code or applicability…" columns={[
          { key: 'code', label: 'Code', render: (c) => <span className="rounded-lg bg-chaskaa-50 px-2 py-1 font-mono text-xs font-extrabold text-chaskaa-700">{c.code}</span> },
          { key: 'type', label: 'Type' }, { key: 'value', label: 'Value', sortable: true }, { key: 'min', label: 'Min order' },
          { key: 'usage', label: 'Usage' }, { key: 'applicable', label: 'Applicable to' }, { key: 'valid', label: 'Validity' },
          { key: 'status', label: 'Status', render: (c) => <Badge tone={statusTone(c.status)} dot>{c.status}</Badge> },
          { key: 'action', label: 'Action', render: (c) => <div onClick={(e) => e.stopPropagation()}><button className="btn-ghost !px-2 !py-1 !text-[11px]" onClick={() => toggleCoupon(c.id, c.status === 'Active' ? 'Expired' : 'Active')}>{c.status === 'Active' ? 'Disable' : 'Enable'}</button></div> },
        ]} rows={coupons} />
      </div></Card>}
      {tab === 'Banners' && <Card title="Banner campaigns" subtitle="Home and Tiffin placement inventory" noPad><div className="p-5 pt-0">
        <DataTable searchPlaceholder="Search banners…" columns={[
          { key: 'id', label: 'ID' }, { key: 'title', label: 'Banner', render: (b) => <span className="flex items-center gap-2"><img src={bannerImageFor(b)} alt="" className="h-9 w-16 shrink-0 rounded-md object-cover" /><span className="font-bold">{b.title}</span></span> },
          { key: 'position', label: 'Position' }, { key: 'zone', label: 'Zone' },
          { key: 'clicks', label: 'Clicks', sortable: true, render: (b) => b.clicks.toLocaleString('en-IN') },
          { key: 'status', label: 'Status', render: (b) => <Badge tone={statusTone(b.status)} dot>{b.status}</Badge> },
        ]} rows={banners} />
      </div></Card>}
      {tab === 'Broadcast' && <div className="grid gap-5 lg:grid-cols-2">
        <Card title="Send broadcast notification" subtitle="Push + in-app to a targeted audience">
          <div className="space-y-4">
            <Field label="Title"><input className="input" placeholder="e.g. Tiffin cutoff extended tonight" /></Field>
            <Field label="Message"><textarea rows={4} className="input" placeholder="Write a short, clear message…" /></Field>
            <Field label="Audience"><select className="input"><option>All users</option><option>Students</option><option>Corporate employees</option><option>Vendors</option><option>Riders</option></select></Field>
            <button className="btn-primary w-full" onClick={() => notify('Broadcast queued for delivery')}>Send notification</button>
          </div>
        </Card>
        <Card title="Referral rules" subtitle="Student word-of-mouth programme">
          <div className="space-y-3">{[['Referrer reward', '1 free tiffin'], ['Friend reward', '₹50 off first plan'], ['Min. plan value', '₹400'], ['Max. referrals / month', '10'], ['Fraud check', 'Phone + device + UPI match']].map(([k, v]) => <div key={k} className="flex items-center justify-between rounded-xl bg-[#fdf8f8] px-4 py-3 text-xs"><span className="font-semibold text-[#6d585b]">{k}</span><span className="font-extrabold text-[#2b1d20]">{v}</span></div>)}</div>
        </Card>
      </div>}

      <Modal open={modal === 'coupon'} onClose={() => setModal(null)} title="Create coupon" subtitle="Rules are validated server-side before going live"
        footer={<><button className="btn-ghost" onClick={() => setModal(null)}>Cancel</button><button className="btn-primary" onClick={saveCoupon}>Create coupon</button></>}>
        <div className="space-y-4">
          <Field label="Coupon code"><input className="input uppercase" value={form.code} onChange={(e) => setForm({ ...form, code: e.target.value })} placeholder="MONSOON50" /></Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Discount value"><input className="input" value={form.value} onChange={(e) => setForm({ ...form, value: e.target.value })} placeholder="₹50 or 10%" /></Field>
            <Field label="Min. order"><input className="input" value={form.min} onChange={(e) => setForm({ ...form, min: e.target.value })} placeholder="₹199" /></Field>
          </div>
          <Field label="Applicable to"><select className="input" value={form.applicable} onChange={(e) => setForm({ ...form, applicable: e.target.value })}><option>Food · All users</option><option>Tiffin · Students</option><option>Corporate · B2B</option><option>All services</option></select></Field>
          <Field label="Validity"><input className="input" value={form.valid} onChange={(e) => setForm({ ...form, valid: e.target.value })} placeholder="01 Dec – 31 Dec 2026" /></Field>
        </div>
      </Modal>
      <Modal open={modal === 'banner'} onClose={() => setModal(null)} title="Create banner campaign"
        footer={<><button className="btn-ghost" onClick={() => setModal(null)}>Cancel</button><button className="btn-primary" onClick={() => { addBanner({ id: `BAN-${Date.now()}`, title: bannerTitle || 'New campaign', position: 'Home · Top', zone: 'All zones', clicks: 0, status: 'Scheduled' }); setModal(null); setBannerTitle(''); }}>Create banner</button></>}>
        <Field label="Banner headline"><input className="input" value={bannerTitle} onChange={(e) => setBannerTitle(e.target.value)} placeholder="Har bite Mein Chaskaa" /></Field>
      </Modal>
    </div>
  );
}

/* ---------------- Support ---------------- */
export function Support() {
  const { tickets, resolveTicket } = useApp();
  const [tab, setTab] = useState('Open');
  const rows = tab === 'All' ? tickets : tickets.filter((t) => (tab === 'Resolved' ? t.status === 'Resolved' : t.status !== 'Resolved'));
  return (
    <div className="fade-in">
      <PageHeader eyebrow="Trust & Safety" title="Support & Disputes" subtitle="Tickets, food-safety escalations, refunds and rider complaints with full audit trails." />
      <div className="mb-5 flex gap-2">{['Open', 'Resolved', 'All'].map((t) => <button key={t} onClick={() => setTab(t)} className={`rounded-xl px-3.5 py-2 text-xs font-bold ${tab === t ? 'bg-chaskaa-600 text-white' : 'border border-[#eadddd] bg-white text-[#6d585b] hover:bg-chaskaa-50'}`}>{t}</button>)}</div>
      <Card title="Support queue" subtitle="Sorted by priority and SLA risk" noPad><div className="p-5 pt-0">
        <DataTable searchPlaceholder="Search ticket, customer or category…" columns={[
          { key: 'id', label: 'Ticket', render: (t) => <span className="font-bold text-chaskaa-700">{t.id}</span> },
          { key: 'subject', label: 'Subject', render: (t) => <span className="font-semibold">{t.subject}</span> },
          { key: 'customer', label: 'Customer' }, { key: 'type', label: 'Category' },
          { key: 'priority', label: 'Priority', render: (t) => <Badge tone={t.priority === 'Critical' ? 'red' : t.priority === 'High' ? 'amber' : 'neutral'}>{t.priority}</Badge> },
          { key: 'status', label: 'Status', render: (t) => <Badge tone={statusTone(t.status)} dot>{t.status}</Badge> },
          { key: 'assigned', label: 'Assigned to' }, { key: 'time', label: 'Opened' },
          { key: 'action', label: 'Action', render: (t) => <div onClick={(e) => e.stopPropagation()}><button className="btn-soft !px-2 !py-1 !text-[11px]" disabled={t.status === 'Resolved'} onClick={() => resolveTicket(t.id)}>Resolve</button></div> },
        ]} rows={rows} />
      </div></Card>
    </div>
  );
}

/* ---------------- Roles ---------------- */
export function Roles() {
  return (
    <div className="fade-in">
      <PageHeader eyebrow="System" title="Roles & Access" subtitle="RBAC, permission boundaries and immutable audit log for sensitive actions." />
      <Card title="Staff roles" subtitle="Backend enforces every permission — UI hiding is not security" noPad><div className="p-5 pt-0">
        <DataTable searchPlaceholder="Search role or permission…" columns={[
          { key: 'role', label: 'Role', render: (r) => <span className="font-bold">{r.role}</span> },
          { key: 'members', label: 'Members', sortable: true },
          { key: 'permissions', label: 'Permissions' }, { key: 'scope', label: 'Scope' },
          { key: 'status', label: 'Status', render: (r) => <Badge tone={r.status === 'System' ? 'purple' : 'green'} dot>{r.status}</Badge> },
        ]} rows={staffRoles} />
      </div></Card>
      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <Card title="Audit log" subtitle="Who changed what, when and from where">
          <div className="space-y-2">{auditLogs.map((l) => <div key={l.id} className="flex gap-3 rounded-xl border border-[#f2eaea] p-3"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-chaskaa-50 text-chaskaa-600"><Icon name="ShieldCheck" size={15} /></span><div className="min-w-0 flex-1"><p className="text-xs font-bold text-[#2b1d20]">{l.action}</p><p className="text-[11px] text-[#8a7477]">{l.entity} · {l.time}</p></div><span className="text-[10px] text-[#a89598]">{l.actor}<br />{l.ip}</span></div>)}</div>
        </Card>
        <Card title="Security controls" subtitle="Sensitive actions require a second approver">
          {[['Admin MFA', true], ['Immutable audit log', true], ['Two-person approval for refunds > ₹5,000', true], ['IP allowlist for finance desk', false], ['Session timeout after 30 min', true]].map(([label, on]) => <SecurityRow key={label} label={label} initial={on} />)}
        </Card>
      </div>
    </div>
  );
}

/* ---------------- Settings ---------------- */
export function Settings() {
  const { notify } = useApp();
  const [fees, setFees] = useState({ base: '20', perKm: '7', platform: '4', tiffinCutoff: '21:00' });
  return (
    <div className="fade-in">
      <PageHeader eyebrow="System" title="Settings & Configuration" subtitle="Platform fees, delivery rules, cutoffs, zones and feature flags." />
      <div className="grid gap-5 lg:grid-cols-2">
        <Card title="Delivery & platform fees" subtitle="Server-side config — changes apply to new quotes only">
          <div className="grid grid-cols-2 gap-4">
            <Field label="Base delivery fee (₹)"><input className="input" value={fees.base} onChange={(e) => setFees({ ...fees, base: e.target.value })} /></Field>
            <Field label="Per extra km (₹)"><input className="input" value={fees.perKm} onChange={(e) => setFees({ ...fees, perKm: e.target.value })} /></Field>
            <Field label="Platform fee (₹/order)"><input className="input" value={fees.platform} onChange={(e) => setFees({ ...fees, platform: e.target.value })} /></Field>
            <Field label="Tiffin skip cutoff (IST)"><input className="input" type="time" value={fees.tiffinCutoff} onChange={(e) => setFees({ ...fees, tiffinCutoff: e.target.value })} /></Field>
          </div>
          <button className="btn-primary mt-5" onClick={() => notify('Configuration saved')}>Save configuration</button>
        </Card>
        <Card title="Feature flags" subtitle="Kill switches for risky capabilities">
          {[['On-demand COD', false], ['Corporate postpaid invoices', true], ['Auto-renew subscriptions (opt-in)', false], ['Rain surge pricing', false], ['WhatsApp tiffin reminders', true]].map(([label, on]) => <FlagRow key={label} label={label} initial={on} />)}
        </Card>
        <Card title="Service zones" subtitle="Polygonal clusters used for serviceability and dispatch">
          <div className="space-y-2">{['Lucknow · Gomti Nagar (active)', 'Lucknow · Hazratganj (active)', 'Lucknow · Telibagh (active)', 'Noida · Sector 62 (active)', 'Ghaziabad · Indirapuram (active)'].map((z) => <div key={z} className="flex items-center gap-2 rounded-xl bg-[#fdf8f8] px-3 py-2.5 text-xs font-semibold text-[#4a3438]"><Icon name="MapPin" size={14} className="text-chaskaa-500" /> {z}</div>)}</div>
          <button className="btn-soft mt-4" onClick={() => notify('Zone editor opened')}><Icon name="Plus" size={15} /> Add zone</button>
        </Card>
        <Card title="App version control" subtitle="Minimum supported versions and maintenance mode">
          <div className="space-y-4">
            <Field label="Min. customer app version"><input className="input" defaultValue="1.4.0" /></Field>
            <Field label="Min. rider app version"><input className="input" defaultValue="1.2.6" /></Field>
            <div className="flex items-center justify-between rounded-xl border border-[#f2eaea] p-3"><span className="text-xs font-semibold">Maintenance mode</span><Toggle checked={false} onChange={() => notify('Maintenance mode toggled')} label="Maintenance mode" /></div>
            <button className="btn-primary" onClick={() => notify('Version policy saved')}>Save policy</button>
          </div>
        </Card>
      </div>
    </div>
  );
}

function FlagRow({ label, initial }) {
  const [on, setOn] = useState(initial);
  return <div className="flex items-center justify-between border-b border-[#f5eeee] py-3 last:border-0"><span className="text-xs font-semibold text-[#4a3438]">{label}</span><Toggle checked={on} onChange={setOn} label={label} /></div>;
}

function SecurityRow({ label, initial }) {
  const [on, setOn] = useState(initial);
  return <div className="flex items-center justify-between border-b border-[#f5eeee] py-3 last:border-0"><span className="text-xs font-semibold text-[#4a3438]">{label}</span><Toggle checked={on} onChange={setOn} label={label} /></div>;
}
