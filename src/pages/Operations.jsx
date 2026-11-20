import { useMemo, useState } from 'react';
import { kitchenManifest, tiffinPlans } from '../data/mockData';
import { useApp } from '../store/AppContext';
import { Avatar, Badge, Card, DataTable, Field, Icon, Modal, PageHeader, ProgressBar, statusTone } from '../components/ui';

const MiniStat = ({ label, value, tone = 'red' }) => (
  <div className="card p-4">
    <p className="text-[11px] font-semibold text-[#8a7477]">{label}</p>
    <p className={`mt-1 text-2xl font-extrabold ${tone === 'red' ? 'text-chaskaa-600' : 'text-[#2b1d20]'}`}>{value}</p>
  </div>
);

/* ---------------- Vendors ---------------- */
export function Vendors() {
  const { vendors, setVendorStatus, updateCommission, notify } = useApp();
  const [view, setView] = useState(null);
  const [commissionId, setCommissionId] = useState(null);
  const [commission, setCommission] = useState('');
  const filter = useMemo(() => ({
    total: vendors.length,
    pending: vendors.filter((v) => v.status === 'Pending').length,
    approved: vendors.filter((v) => v.status === 'Approved').length,
    suspended: vendors.filter((v) => v.status === 'Suspended').length,
  }), [vendors]);

  return (
    <div className="fade-in">
      <PageHeader eyebrow="Business Management" title="Vendors & Restaurants" subtitle="Verify documents, manage contracts, commissions and storefront status."
        actions={<button className="btn-primary" onClick={() => notify('New vendor onboarding link copied')}><Icon name="Plus" size={16} /> Onboard vendor</button>} />
      <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <MiniStat label="Total partners" value={filter.total} />
        <MiniStat label="Pending verification" value={filter.pending} tone="red" />
        <MiniStat label="Approved & live" value={filter.approved} />
        <MiniStat label="Suspended" value={filter.suspended} />
      </div>
      <Card title="All partners" subtitle="Approve KYC, set commission, suspend or reinstate vendors" noPad>
        <div className="p-5 pt-0">
          <DataTable searchPlaceholder="Search vendor, owner, city or ID…"
            columns={[
              { key: 'name', label: 'Vendor', sortable: true, render: (v) => <div className="flex items-center gap-3"><Avatar name={v.name} /><div><p className="font-bold text-[#2b1d20]">{v.name}</p><p className="text-[11px] text-[#968486]">{v.id} · {v.city}</p></div></div> },
              { key: 'type', label: 'Type' },
              { key: 'owner', label: 'Owner', render: (v) => <span>{v.owner}<span className="block text-[11px] text-[#968486]">{v.area}</span></span> },
              { key: 'rating', label: 'Rating', sortable: true, render: (v) => <span className="flex items-center gap-1 font-semibold"><Icon name="Star" size={13} className="fill-amber-400 text-amber-400" /> {v.rating}</span> },
              { key: 'orders', label: 'Orders', sortable: true, render: (v) => v.orders.toLocaleString('en-IN') },
              { key: 'commission', label: 'Commission' },
              { key: 'status', label: 'Status', render: (v) => <Badge tone={statusTone(v.status)} dot>{v.status}</Badge> },
              { key: 'actions', label: 'Actions', render: (v) => (
                <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                  <button className="rounded-lg p-1.5 text-[#8a7477] hover:bg-chaskaa-50 hover:text-chaskaa-600" title="View details" onClick={() => setView(v)}><Icon name="FileText" size={15} /></button>
                  {v.status === 'Pending' && <button className="rounded-lg p-1.5 text-emerald-600 hover:bg-emerald-50" title="Approve" onClick={() => setVendorStatus(v.id, 'Approved')}><Icon name="BadgeCheck" size={16} /></button>}
                  {v.status === 'Approved' && <button className="rounded-lg p-1.5 text-amber-600 hover:bg-amber-50" title="Suspend" onClick={() => setVendorStatus(v.id, 'Suspended')}><Icon name="Lock" size={15} /></button>}
                  {v.status === 'Suspended' && <button className="rounded-lg p-1.5 text-emerald-600 hover:bg-emerald-50" title="Reinstate" onClick={() => setVendorStatus(v.id, 'Approved')}><Icon name="Check" size={16} /></button>}
                </div>
              ) },
            ]}
            rows={vendors} onRowClick={setView} />
        </div>
      </Card>

      <Modal open={!!view} onClose={() => setView(null)} title={view?.name} subtitle={view ? `${view.id} · ${view.type} · ${view.city}` : ''}
        footer={<>
          <button className="btn-ghost" onClick={() => setView(null)}>Close</button>
          {view?.status === 'Pending' && <button className="btn-primary" onClick={() => { setVendorStatus(view.id, 'Approved'); setView(null); }}>Approve vendor</button>}
        </>}>
        {view && <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3 text-xs">
            {[['Owner', view.owner], ['Area', view.area], ['Rating', `★ ${view.rating}`], ['Total orders', view.orders], ['GSTIN', view.gst], ['FSSAI', view.fssai], ['Joined', view.joined], ['Status', view.status]].map(([k, val]) => (
              <div key={k} className="rounded-xl bg-[#fdf8f8] p-3"><p className="text-[10px] font-semibold uppercase tracking-wide text-[#968486]">{k}</p><p className="mt-1 font-bold text-[#2b1d20]">{val}</p></div>
            ))}
          </div>
          <div className="rounded-xl border border-[#f0e7e7] p-4">
            <div className="flex items-center justify-between">
              <div><p className="text-sm font-bold">Commission rate</p><p className="text-[11px] text-[#8a7477]">Applied on eligible order subtotal</p></div>
              <button className="btn-soft !py-1.5" onClick={() => { setCommissionId(view.id); setCommission(view.commission.replace('%', '')); }}>Edit</button>
            </div>
            <p className="mt-2 text-xl font-extrabold text-chaskaa-600">{view.commission}</p>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-800"><b>KYC check:</b> FSSAI license valid till 14 Mar 2028 · Bank verification complete · Hygiene audit score 92/100</div>
        </div>}
      </Modal>

      <Modal open={!!commissionId} onClose={() => setCommissionId(null)} title="Update commission" subtitle="Change applies to future orders only"
        footer={<><button className="btn-ghost" onClick={() => setCommissionId(null)}>Cancel</button><button className="btn-primary" onClick={() => { updateCommission(commissionId, `${commission}%`); setCommissionId(null); }}>Save changes</button></>}>
        <Field label="Commission percentage"><input className="input" value={commission} onChange={(e) => setCommission(e.target.value)} placeholder="e.g. 15" /></Field>
      </Modal>
    </div>
  );
}

/* ---------------- Orders ---------------- */
export function Orders() {
  const { orders, riders, assignRider, setOrderStatus } = useApp();
  const [tab, setTab] = useState('All');
  const [assignId, setAssignId] = useState(null);
  const [rider, setRider] = useState('');
  const [view, setView] = useState(null);
  const tabs = ['All', 'Delivered', 'Out for delivery', 'Preparing', 'Confirmed', 'Cancelled'];
  const rows = tab === 'All' ? orders : orders.filter((o) => o.status === tab);

  return (
    <div className="fade-in">
      <PageHeader eyebrow="Orders & Delivery" title="Orders & Deliveries" subtitle="Monitor live orders, assign riders, resolve exceptions and track SLAs." />
      <div className="mb-5 flex flex-wrap gap-2">
        {tabs.map((t) => <button key={t} onClick={() => setTab(t)} className={`rounded-xl px-3.5 py-2 text-xs font-bold transition ${tab === t ? 'bg-chaskaa-600 text-white shadow-card' : 'border border-[#eadddd] bg-white text-[#6d585b] hover:bg-chaskaa-50'}`}>
          {t} <span className="ml-1 opacity-70">{t === 'All' ? orders.length : orders.filter((o) => o.status === t).length}</span>
        </button>)}
      </div>
      <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <MiniStat label="Live orders" value={orders.filter((o) => !['Delivered', 'Cancelled'].includes(o.status)).length} tone="red" />
        <MiniStat label="Awaiting rider" value={orders.filter((o) => o.rider === '—' && !['Delivered', 'Cancelled'].includes(o.status)).length} />
        <MiniStat label="Delivered today" value={orders.filter((o) => o.status === 'Delivered').length} />
        <MiniStat label="SLA breaches" value={2} />
      </div>
      <Card title="Order book" subtitle="Click a row to view the full lifecycle and status history" noPad>
        <div className="p-5 pt-0">
          <DataTable searchPlaceholder="Search order ID, customer, vendor or phone…"
            columns={[
              { key: 'id', label: 'Order', sortable: true, render: (o) => <span className="font-bold text-chaskaa-700">#{o.id}</span> },
              { key: 'customer', label: 'Customer', render: (o) => <span>{o.customer}<span className="block text-[11px] text-[#968486]">{o.phone}</span></span> },
              { key: 'vendor', label: 'Vendor' },
              { key: 'type', label: 'Service', render: (o) => <Badge tone={o.type === 'Food' ? 'red' : o.type === 'Corporate' ? 'purple' : 'amber'}>{o.type}</Badge> },
              { key: 'amount', label: 'Amount', sortable: true },
              { key: 'status', label: 'Status', render: (o) => <Badge tone={statusTone(o.status)} dot>{o.status}</Badge> },
              { key: 'rider', label: 'Rider' },
              { key: 'age', label: 'Age', render: (o) => <span className={o.age.includes('hr') ? 'font-bold text-rose-600' : ''}>{o.age}</span> },
              { key: 'action', label: 'Action', render: (o) => <div onClick={(e) => e.stopPropagation()}><button className="btn-soft !px-2.5 !py-1.5 !text-[11px]" disabled={['Delivered', 'Cancelled'].includes(o.status)} onClick={() => { setAssignId(o.id); setRider(o.rider === '—' ? '' : o.rider); }}><Icon name="Bike" size={13} /> {o.rider === '—' ? 'Assign' : 'Reassign'}</button></div> },
            ]} rows={rows} onRowClick={setView} />
        </div>
      </Card>

      <Modal open={!!assignId} onClose={() => setAssignId(null)} title="Assign delivery partner" subtitle={`Order #${assignId}`}
        footer={<><button className="btn-ghost" onClick={() => setAssignId(null)}>Cancel</button><button className="btn-primary" onClick={() => { assignRider(assignId, rider); setAssignId(null); }}>Assign rider</button></>}>
        <Field label="Select rider">
          <select className="input" value={rider} onChange={(e) => setRider(e.target.value)}>
            <option value="">— Unassigned —</option>
            {riders.filter((r) => r.online && r.kyc === 'Verified').map((r) => <option key={r.id} value={r.name}>{r.name} · {r.zone} · ★ {r.rating}</option>)}
          </select>
        </Field>
        <p className="mt-3 text-[11px] text-[#8a7477]">Only online riders with verified KYC are eligible for dispatch.</p>
      </Modal>

      <Modal open={!!view} onClose={() => setView(null)} title={view ? `Order #${view.id}` : ''} subtitle={view ? `${view.customer} · ${view.time}` : ''}
        footer={<><button className="btn-ghost" onClick={() => setView(null)}>Close</button>{view && !['Delivered', 'Cancelled'].includes(view.status) && <button className="btn-primary" onClick={() => { setOrderStatus(view.id, 'Delivered'); setView(null); }}>Mark delivered</button>}</>}>
        {view && <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3 text-xs">
            {[['Vendor', view.vendor], ['Items', view.items], ['Amount', view.amount], ['Payment', view.payment], ['Zone', view.zone], ['Rider', view.rider]].map(([k, v]) => <div key={k} className="rounded-xl bg-[#fdf8f8] p-3"><p className="text-[10px] uppercase tracking-wide text-[#968486]">{k}</p><p className="mt-1 font-bold text-[#2b1d20]">{v}</p></div>)}
          </div>
          <div>
            <p className="mb-3 text-sm font-bold">Status timeline</p>
            {['Placed', 'Accepted', 'Preparing', 'Ready for pickup', 'Out for delivery', 'Delivered'].map((s, i) => {
              const done = ['Placed', 'Accepted', 'Preparing', 'Ready for pickup', 'Out for delivery', 'Delivered'].indexOf(view.status) >= i || view.status === 'Delivered';
              return <div key={s} className="flex gap-3 pb-3 last:pb-0"><div className="flex flex-col items-center"><span className={`grid h-5 w-5 place-items-center rounded-full ${done ? 'bg-emerald-500 text-white' : 'bg-[#efe6e6] text-[#a89598]'}`}>{done ? <Icon name="Check" size={11} /> : <span className="h-1.5 w-1.5 rounded-full bg-current" />}</span>{i < 5 && <span className="w-px flex-1 bg-[#eee3e3]" />}</div><p className={`pt-0.5 text-xs font-semibold ${done ? 'text-[#2b1d20]' : 'text-[#a89598]'}`}>{s}</p></div>;
            })}
          </div>
        </div>}
      </Modal>
    </div>
  );
}

/* ---------------- Subscriptions ---------------- */
export function Subscriptions() {
  const { subscriptions, setSubscriptionStatus } = useApp();
  const [segment, setSegment] = useState('All');
  const rows = segment === 'All' ? subscriptions : subscriptions.filter((s) => s.segment === segment);
  return (
    <div className="fade-in">
      <PageHeader eyebrow="Orders & Delivery" title="Subscriptions & Plans" subtitle="Manage student and corporate monthly plans, pauses, credits and renewals." />
      <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <MiniStat label="Active subscriptions" value={subscriptions.filter((s) => s.status === 'Active').length} tone="red" />
        <MiniStat label="Student plans" value={subscriptions.filter((s) => s.segment === 'Student').length} />
        <MiniStat label="Corporate seats" value={subscriptions.filter((s) => s.segment === 'Corporate').length * 22} />
        <MiniStat label="Meals delivered today" value="392" />
      </div>
      <Card title="Subscriptions" subtitle="All recurring tiffin plans across segments" noPad>
        <div className="p-5 pt-0">
          <div className="mb-4 flex gap-2">{['All', 'Student', 'Corporate'].map((s) => <button key={s} onClick={() => setSegment(s)} className={`rounded-lg px-3 py-1.5 text-xs font-bold ${segment === s ? 'bg-chaskaa-50 text-chaskaa-700 ring-1 ring-chaskaa-200' : 'text-[#8a7477] hover:bg-[#faf5f5]'}`}>{s}</button>)}</div>
          <DataTable searchPlaceholder="Search subscription, customer or plan…"
            columns={[
              { key: 'id', label: 'Subscription', render: (s) => <span className="font-bold text-chaskaa-700">{s.id}</span> },
              { key: 'customer', label: 'Customer' },
              { key: 'plan', label: 'Plan', render: (s) => <span>{s.plan}<span className="block text-[11px] text-[#968486]">{s.vendor}</span></span> },
              { key: 'segment', label: 'Segment', render: (s) => <Badge tone={s.segment === 'Student' ? 'amber' : 'purple'}>{s.segment}</Badge> },
              { key: 'duration', label: 'Duration' },
              { key: 'amount', label: 'Amount', sortable: true },
              { key: 'skipped', label: 'Skips', render: (s) => `${s.skipped} used` },
              { key: 'status', label: 'Status', render: (s) => <Badge tone={statusTone(s.status)} dot>{s.status}</Badge> },
              { key: 'action', label: 'Action', render: (s) => <div onClick={(e) => e.stopPropagation()} className="flex gap-1">
                {s.status === 'Active' ? <button className="btn-soft !px-2 !py-1 !text-[11px]" onClick={() => setSubscriptionStatus(s.id, 'Paused')}>Pause</button> : s.status === 'Paused' ? <button className="btn-soft !px-2 !py-1 !text-[11px]" onClick={() => setSubscriptionStatus(s.id, 'Active')}>Resume</button> : <button className="btn-ghost !px-2 !py-1 !text-[11px]" onClick={() => setSubscriptionStatus(s.id, 'Active')}>Renew</button>}
              </div> },
            ]} rows={rows} />
        </div>
      </Card>
    </div>
  );
}

/* ---------------- Tiffin ---------------- */
export function Tiffin() {
  const { notify } = useApp();
  const [tab, setTab] = useState('Plans');
  return (
    <div className="fade-in">
      <PageHeader eyebrow="Business Management" title="Tiffin Service" subtitle="Plans, kitchen capacity, tomorrow's manifest, blackout days and meal exceptions."
        actions={<button className="btn-primary" onClick={() => notify('New plan draft created')}><Icon name="Plus" size={16} /> Create plan</button>} />
      <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <MiniStat label="Live plans" value={tiffinPlans.filter((p) => p.status === 'Live').length} tone="red" />
        <MiniStat label="Meals tomorrow" value="392" />
        <MiniStat label="Avg. capacity fill" value="78%" />
        <MiniStat label="Skip requests" value="14" />
      </div>
      <div className="mb-5 flex flex-wrap gap-2">{['Plans', 'Kitchen manifest', 'Capacity', 'Holidays'].map((t) => <button key={t} onClick={() => setTab(t)} className={`rounded-xl px-3.5 py-2 text-xs font-bold transition ${tab === t ? 'bg-chaskaa-600 text-white shadow-card' : 'border border-[#eadddd] bg-white text-[#6d585b] hover:bg-chaskaa-50'}`}>{t}</button>)}</div>

      {tab === 'Plans' && <Card title="Tiffin plans" subtitle="Audience, price versions, capacity and cutoffs" noPad><div className="p-5 pt-0">
        <DataTable searchPlaceholder="Search plans, vendors or segment…"
          columns={[
            { key: 'name', label: 'Plan', render: (p) => <span className="font-bold text-[#2b1d20]">{p.name}<span className="block text-[11px] font-normal text-[#968486]">{p.id} · {p.vendor}</span></span> },
            { key: 'segment', label: 'Segment', render: (p) => <Badge tone={p.segment === 'Student' ? 'amber' : 'purple'}>{p.segment}</Badge> },
            { key: 'meal', label: 'Meals' },
            { key: 'price', label: 'Price', sortable: true },
            { key: 'meals', label: 'Duration', render: (p) => `${p.meals} meals` },
            { key: 'cutoff', label: 'Cutoff' },
            { key: 'capacity', label: 'Capacity', render: (p) => <div className="w-28"><div className="mb-1 flex justify-between text-[10px] font-semibold"><span>{p.booked}/{p.capacity}</span></div><ProgressBar value={(p.booked / p.capacity) * 100} tone={p.booked / p.capacity > 0.9 ? 'bg-rose-500' : 'bg-chaskaa-500'} /></div> },
            { key: 'status', label: 'Status', render: (p) => <Badge tone={statusTone(p.status)} dot>{p.status}</Badge> },
          ]} rows={tiffinPlans} />
      </div></Card>}

      {tab === 'Kitchen manifest' && <Card title="Tomorrow's production manifest" subtitle="Grouped by vendor, slot and delivery zone" noPad><div className="p-5 pt-0">
        <DataTable searchPlaceholder="Search vendor, slot or rider…"
          columns={[
            { key: 'vendor', label: 'Kitchen', render: (m) => <span className="font-bold">{m.vendor}</span> },
            { key: 'slot', label: 'Slot' },
            { key: 'veg', label: 'Veg', sortable: true },
            { key: 'nonveg', label: 'Non-veg', sortable: true },
            { key: 'total', label: 'Total packs', sortable: true, render: (m) => <span className="font-extrabold text-chaskaa-600">{m.total}</span> },
            { key: 'rider', label: 'Rider' },
            { key: 'status', label: 'Status', render: (m) => <Badge tone={m.status === 'Unassigned' || m.status === 'Pending' ? 'amber' : statusTone(m.status)} dot>{m.rider === 'Unassigned' ? 'Unassigned' : m.status}</Badge> },
          ]} rows={kitchenManifest} />
      </div></Card>}

      {tab === 'Capacity' && <div className="grid gap-4 md:grid-cols-2">{tiffinPlans.map((p) => <Card key={p.id} title={p.name} subtitle={`${p.vendor} · ${p.meal}`}>
        <div className="mb-2 flex items-end justify-between"><p className="text-2xl font-extrabold text-[#2b1d20]">{p.booked}<span className="text-sm font-semibold text-[#968486]"> / {p.capacity}</span></p><Badge tone={p.booked / p.capacity > 0.9 ? 'red' : 'green'}>{Math.round((p.booked / p.capacity) * 100)}% full</Badge></div>
        <ProgressBar value={(p.booked / p.capacity) * 100} tone={p.booked / p.capacity > 0.9 ? 'bg-rose-500' : 'bg-chaskaa-500'} />
        <p className="mt-3 text-[11px] text-[#8a7477]">Cutoff {p.cutoff} · {p.meals} meal plan · {p.price}</p>
      </Card>)}</div>}

      {tab === 'Holidays' && <Card title="Kitchen & platform holidays" subtitle="Blackout days stop subscription meal generation and extend validity">
        <div className="space-y-2">{[
          { date: '22 Nov 2026', label: 'Kittee puja — all kitchens closed', type: 'Platform' },
          { date: '25 Nov 2026', label: 'Corporate office shutdown — Acme Corp', type: 'Corporate' },
          { date: '02 Dec 2026', label: 'Ghar Ka Khana — maintenance', type: 'Vendor' },
        ].map((h) => <div key={h.date} className="flex items-center gap-3 rounded-xl border border-[#f2eaea] p-3"><span className="grid h-9 w-9 place-items-center rounded-lg bg-amber-50 text-amber-600"><Icon name="CalendarDays" size={16} /></span><div className="flex-1"><p className="text-sm font-bold">{h.label}</p><p className="text-[11px] text-[#8a7477]">{h.date}</p></div><Badge tone={h.type === 'Platform' ? 'red' : 'amber'}>{h.type}</Badge><button className="btn-ghost !px-2 !py-1 !text-[11px]" onClick={() => notify('Holiday removed')}>Remove</button></div>)}</div>
        <button className="btn-soft mt-4" onClick={() => notify('Holiday calendar updated')}><Icon name="Plus" size={15} /> Add holiday</button>
      </Card>}
    </div>
  );
}
