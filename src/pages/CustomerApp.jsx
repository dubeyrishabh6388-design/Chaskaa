import { useState } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { categories, customerBanners, paymentMethods, restaurants, tiffinPlansCustomer, weeklyMenu } from '../data/customerData';
import { useApp } from '../store/AppContext';
import { Badge, Icon } from '../components/ui';
import LogoutButton from '../components/LogoutButton';

const inr = (n) => '₹' + Number(n).toLocaleString('en-IN');

function Section({ title, action, children }) {
  return (
    <section className="mb-8">
      <div className="mb-3 flex items-end justify-between gap-3">
        <h2 className="text-lg font-extrabold tracking-tight text-[#2b1d20]">{title}</h2>
        {action}
      </div>
      {children}
    </section>
  );
}

/* ---------------- Login / OTP ---------------- */
export function CustomerLogin() {
  const navigate = useNavigate();
  const [step, setStep] = useState('phone');
  const [phone, setPhone] = useState('98765 43210');
  const [otp, setOtp] = useState('');
  return (
    <div className="mx-auto max-w-md py-6">
      <div className="mb-8 text-center">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-chaskaa-600 text-3xl font-black text-white shadow-float">C</span>
        <p className="mt-4 text-2xl font-extrabold text-[#5c0f18]">Chaskaa</p>
        <p className="text-xs font-semibold uppercase tracking-widest text-chaskaa-500">Har Bite Mein Chaskaa</p>
      </div>
      <div className="card p-6">
        {step === 'phone' ? (
          <>
            <h1 className="text-xl font-extrabold text-[#2b1d20]">Login to your Chaskaa Account</h1>
            <p className="mt-1 text-xs text-[#8a7477]">Order food, subscribe to tiffin plans and more, all in one place!</p>
            <label className="mt-6 block"><span className="label">Enter Mobile Number</span>
              <div className="flex items-center rounded-xl border border-[#eadddd] bg-white focus-within:border-chaskaa-400 focus-within:ring-4 focus-within:ring-chaskaa-100">
                <span className="px-3 text-sm font-bold text-[#6d585b]">+91</span>
                <input className="w-full bg-transparent py-3 pr-3 text-sm outline-none" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Mobile Number" />
              </div>
            </label>
            <button className="btn-primary mt-5 w-full !py-3" onClick={() => setStep('otp')}>Send OTP</button>
            <div className="my-5 flex items-center gap-3 text-[11px] text-[#a89598]"><span className="h-px flex-1 bg-[#eee1de]" /> OR <span className="h-px flex-1 bg-[#eee1de]" /></div>
            <button className="btn-ghost w-full" onClick={() => setStep('otp')}><Icon name="User" size={16} /> Continue with Google</button>
          </>
        ) : (
          <>
            <button className="mb-4 flex items-center gap-1 text-xs font-bold text-chaskaa-600" onClick={() => setStep('phone')}><Icon name="ArrowLeft" size={14} /> Change number</button>
            <h1 className="text-xl font-extrabold text-[#2b1d20]">Verify OTP</h1>
            <p className="mt-1 text-xs text-[#8a7477]">We've sent a 6-digit OTP to +91 {phone} · <button className="font-bold text-chaskaa-600">Edit</button></p>
            <input className="mt-6 w-full rounded-xl border border-[#eadddd] py-3 text-center text-2xl font-extrabold tracking-[.5em] outline-none focus:border-chaskaa-400 focus:ring-4 focus:ring-chaskaa-100" maxLength={6} value={otp} onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))} placeholder="••••••" />
            <p className="mt-3 text-center text-[11px] text-[#8a7477]">Resend OTP in 00:28 · Demo code 123456</p>
            <button className="btn-primary mt-5 w-full !py-3" onClick={() => navigate('/customer')}>Verify & Continue</button>
          </>
        )}
      </div>
      <p className="mt-6 text-center text-[11px] leading-relaxed text-[#a89598]">By continuing, you agree to Chaskaa's Terms, Privacy Policy and Refund Policy.</p>
    </div>
  );
}

/* ---------------- Home ---------------- */
export function CustomerHome() {
  const navigate = useNavigate();
  const [segment, setSegment] = useState('Student');
  const plans = tiffinPlansCustomer.filter((p) => p.segment === segment);
  return (
    <div className="fade-in">
      <div className="mb-5 flex items-center gap-2 rounded-2xl border border-[#f3e1de] bg-white p-3 shadow-card sm:p-4">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-chaskaa-50 text-chaskaa-600"><Icon name="MapPin" size={19} /></span>
        <div className="min-w-0 flex-1"><p className="text-[10px] font-bold uppercase tracking-wide text-chaskaa-600">Deliver to</p><p className="truncate text-sm font-bold text-[#4a3438]">Sushant Golf City, Lucknow – 226030</p></div>
        <button onClick={() => navigate('/customer/profile')} className="shrink-0 text-xs font-bold text-chaskaa-600">Change</button>
      </div>

      <div className="mb-8 grid gap-3 sm:grid-cols-3">
        {customerBanners.map((b) => (
          <button key={b.id} onClick={() => navigate(b.id === 1 ? '/customer/restaurants' : '/customer/tiffin')}
            className={`relative overflow-hidden rounded-2xl p-5 text-left text-white shadow-card ${b.tone === 'amber' ? 'bg-gradient-to-br from-amber-500 to-amber-700' : b.tone === 'wine' ? 'bg-gradient-to-br from-wine-700 to-wine-900' : 'bg-gradient-to-br from-chaskaa-500 to-chaskaa-700'}`}>
            <span className="absolute -right-6 -top-8 h-28 w-28 rounded-full bg-white/10" />
            <p className="relative text-lg font-extrabold leading-tight">{b.title}</p>
            <p className="relative mt-1 text-[11px] text-white/80">{b.sub}</p>
            <span className="relative mt-4 inline-flex items-center gap-1 text-[11px] font-bold">Explore <Icon name="ArrowRight" size={13} /></span>
          </button>
        ))}
      </div>

      <Section title="What's on your mind?" action={<button className="text-xs font-bold text-chaskaa-600" onClick={() => navigate('/customer/restaurants')}>See all →</button>}>
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-7">
          {categories.map((c) => (
            <button key={c.name} onClick={() => navigate('/customer/restaurants')} className="flex flex-col items-center gap-2 rounded-2xl border border-[#f2e1de] bg-white p-3 transition hover:-translate-y-0.5 hover:border-chaskaa-200 hover:shadow-card">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-chaskaa-50 text-chaskaa-600"><Icon name={c.icon} size={20} /></span>
              <span className="text-[10px] font-bold text-[#6d585b]">{c.name}</span>
            </button>
          ))}
        </div>
      </Section>

      <section className="mb-8 overflow-hidden rounded-2xl bg-gradient-to-br from-wine-800 via-wine-700 to-chaskaa-700 p-6 text-white shadow-float">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <Badge className="!bg-white/15 !text-white">TIFFIN SERVICE</Badge>
            <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">Healthy. Home Style. On Time.</h2>
            <p className="mt-1 max-w-lg text-xs text-white/75">Daily, weekly & monthly tiffin plans for students and corporate teams. Fresh meals, zero hassle.</p>
            <div className="mt-5 flex flex-wrap gap-4">{[['25-30 min', 'Delivery'], ['4.8 ★', 'Rating'], ['₹89', 'Starting / meal']].map(([v, l]) => <div key={l}><p className="text-lg font-extrabold">{v}</p><p className="text-[10px] text-white/60">{l}</p></div>)}</div>
          </div>
          <button onClick={() => navigate('/customer/tiffin')} className="rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-chaskaa-700 shadow-lg transition hover:-translate-y-0.5">Subscribe Now →</button>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {['Student — Affordable & Nutritious Meal Plans', 'Corporate — Premium & Hygienic Meal Plans'].map((t, i) => (
            <button key={t} onClick={() => { setSegment(i ? 'Corporate' : 'Student'); navigate('/customer/tiffin'); }} className="flex items-center gap-3 rounded-xl bg-white/10 p-4 text-left ring-1 ring-white/15 backdrop-blur transition hover:bg-white/20">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/15"><Icon name={i ? 'Store' : 'LunchBox'} size={19} /></span>
              <span className="flex-1 text-xs font-bold">{t}</span><Icon name="ArrowRight" size={15} />
            </button>
          ))}
        </div>
      </section>

      <Section title="Popular tiffin plans" action={<button className="text-xs font-bold text-chaskaa-600" onClick={() => navigate('/customer/tiffin')}>View All →</button>}>
        <div className="grid gap-3 md:grid-cols-3">
          {plans.slice(0, 3).map((p) => <PlanCard key={p.id} plan={p} />)}
        </div>
      </Section>

      <Section title="Order Food Online" action={<button className="text-xs font-bold text-chaskaa-600" onClick={() => navigate('/customer/restaurants')}>See All →</button>}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {restaurants.map((r) => <RestaurantCard key={r.id} r={r} />)}
        </div>
      </Section>
    </div>
  );
}

function PlanCard({ plan }) {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(`/customer/plans/${plan.id}`)} className="group rounded-2xl border border-[#f6e4ea] bg-white p-4 text-left shadow-card transition hover:-translate-y-0.5 hover:border-chaskaa-300 hover:shadow-float">
      <div className="flex items-start justify-between"><span className={`chip ${plan.segment === 'Student' ? 'bg-amber-50 text-amber-700' : 'bg-violet-50 text-violet-700'}`}>{plan.segment}</span><span className="chip bg-chaskaa-50 text-chaskaa-700">{plan.badge}</span></div>
      <p className="mt-4 text-base font-extrabold text-[#2b1d20]">{plan.name}</p>
      <p className="text-xs text-[#8a7477]">{plan.duration} · {plan.meals}</p>
      <p className="mt-3 text-2xl font-extrabold text-chaskaa-600">₹{plan.price}<span className="text-[11px] font-semibold text-[#8a7477]"> {plan.unit}</span></p>
      <div className="mt-3 flex flex-wrap gap-1.5">{plan.highlights.slice(0, 2).map((h) => <span key={h} className="rounded-full bg-[#fdf2f4] px-2 py-1 text-[10px] font-semibold text-[#8a7477]">{h}</span>)}</div>
      <span className="mt-4 inline-flex items-center gap-1 text-xs font-extrabold text-chaskaa-600 group-hover:gap-2">View details <Icon name="ArrowRight" size={13} /></span>
    </button>
  );
}

function RestaurantCard({ r }) {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(`/customer/restaurants/${r.id}`)} className="overflow-hidden rounded-2xl border border-[#f6e4ea] bg-white text-left shadow-card transition hover:-translate-y-0.5 hover:shadow-float">
      <div className={`relative flex h-32 items-center justify-center bg-gradient-to-br ${r.color} text-white`}>
        <span className="text-4xl font-black opacity-90">{r.logo}</span>
        <span className="absolute bottom-2 right-2 rounded-lg bg-white/95 px-2 py-1 text-[10px] font-extrabold text-[#2b1d20]">{r.eta}</span>
      </div>
      <div className="p-3.5">
        <div className="flex items-center justify-between"><p className="text-sm font-extrabold text-[#2b1d20]">{r.name}</p><span className="flex items-center gap-0.5 text-[11px] font-bold text-emerald-700"><Icon name="Star" size={12} className="fill-emerald-500 text-emerald-500" />{r.rating}</span></div>
        <p className="mt-0.5 truncate text-[10px] text-[#9b888b]">{r.tags}</p>
        <p className="mt-2 text-[10px] font-bold text-chaskaa-600">{r.offer}</p>
        <div className="mt-2 flex items-center justify-between text-[10px] text-[#8a7477]"><span>{r.distance}</span><span>{r.price}</span></div>
      </div>
    </button>
  );
}

/* ---------------- Tiffin Service ---------------- */
export function TiffinService() {
  const [segment, setSegment] = useState('Student');
  const plans = tiffinPlansCustomer.filter((p) => p.segment === segment);
  return (
    <div className="fade-in">
      <div className="mb-6 overflow-hidden rounded-2xl bg-gradient-to-r from-wine-800 to-chaskaa-700 p-6 text-white">
        <p className="text-[11px] font-bold uppercase tracking-widest text-white/60">Tiffin Service</p>
        <h1 className="mt-1 text-2xl font-extrabold sm:text-3xl">Healthy Hygienic · Homemade</h1>
        <p className="mt-1 text-xs text-white/75">Fresh & pocket-friendly meal plans for every day.</p>
      </div>
      <div className="mb-6 grid grid-cols-2 gap-3">
        {[['Student', 'Affordable & Nutritious Meal Plans', 'LunchBox'], ['Corporate', 'Premium & Hygienic Meal Plans', 'Store']].map(([name, desc, icon]) => (
          <button key={name} onClick={() => setSegment(name)} className={`rounded-2xl border-2 p-4 text-left transition ${segment === name ? 'border-chaskaa-500 bg-chaskaa-50 shadow-card' : 'border-[#f6e4ea] bg-white hover:border-chaskaa-200'}`}>
            <span className={`grid h-10 w-10 place-items-center rounded-xl ${segment === name ? 'bg-chaskaa-600 text-white' : 'bg-[#fdf2f4] text-chaskaa-600'}`}><Icon name={icon} size={19} /></span>
            <p className="mt-3 text-sm font-extrabold text-[#2b1d20]">{name}</p>
            <p className="mt-0.5 text-[10px] text-[#8a7477]">{desc}</p>
          </button>
        ))}
      </div>

      <Section title={`${segment} Tiffin Plans`}>
        <div className="grid gap-4 md:grid-cols-3">{plans.map((p) => <PlanCard key={p.id} plan={p} />)}</div>
      </Section>

      <Section title="How It Works">
        <div className="grid gap-3 sm:grid-cols-4">
          {[['Choose Your Plan', 'LunchBox'], ['Select Duration', 'CalendarDays'], ['Make Payment', 'CreditCard'], ['Get Daily Tiffin', 'Package']].map(([t, icon], i) => (
            <div key={t} className="rounded-2xl border border-[#f6e4ea] bg-white p-4 text-center">
              <span className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-chaskaa-50 text-chaskaa-600"><Icon name={icon} size={19} /></span>
              <p className="mt-3 text-xs font-extrabold text-[#2b1d20]">{i + 1}. {t}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Sample Weekly Menu">
        <div className="overflow-x-auto rounded-2xl border border-[#f6e4ea] bg-white">
          <table className="w-full min-w-[640px] text-left text-xs">
            <thead className="bg-[#fdf2f4] text-[#8a7477]"><tr><th className="p-3">Day</th><th className="p-3">Lunch</th><th className="p-3">Dinner</th></tr></thead>
            <tbody className="divide-y divide-[#f6eae7]">{weeklyMenu.map((m) => <tr key={m.day}><td className="p-3 font-extrabold text-chaskaa-700">{m.day}</td><td className="p-3 text-[#4a3438]">{m.lunch}</td><td className="p-3 text-[#4a3438]">{m.dinner}</td></tr>)}</tbody>
          </table>
        </div>
      </Section>
    </div>
  );
}

/* ---------------- Plan Detail ---------------- */
export function PlanDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { subscribeToPlan, address } = useApp();
  const plan = tiffinPlansCustomer.find((p) => p.id === id) || tiffinPlansCustomer[2];
  const [team, setTeam] = useState(10);
  const [start, setStart] = useState('18 Nov 2026');
  const subscribe = () => {
    subscribeToPlan({ id: `SUB-${Date.now()}`, plan: plan.name, vendor: plan.segment === 'Student' ? 'Bhojan Homes' : 'Corporate Meals Co.', duration: plan.duration, meals: plan.meals, price: plan.price * (plan.segment === 'Corporate' ? team : 1), start, end: '17 Dec 2026', status: 'Active', paused: 0 });
    navigate('/customer/subscriptions');
  };
  return (
    <div className="fade-in">
      <button className="mb-4 flex items-center gap-1 text-xs font-bold text-chaskaa-600" onClick={() => navigate('/customer/tiffin')}><Icon name="ArrowLeft" size={14} /> All plans</button>
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="rounded-2xl bg-gradient-to-br from-wine-800 to-chaskaa-700 p-6 text-white">
            <div className="flex flex-wrap items-center gap-2"><Badge className="!bg-white/15 !text-white">{plan.segment} TIFFIN</Badge><Badge className="!bg-white/15 !text-white">{plan.badge}</Badge></div>
            <h1 className="mt-4 text-3xl font-extrabold">{plan.name} Tiffin Plan</h1>
            <p className="mt-1 text-sm text-white/75">{plan.duration} · {plan.meals}</p>
            <p className="mt-5 text-4xl font-extrabold">₹{plan.price.toLocaleString('en-IN')} <span className="text-sm font-semibold text-white/70">{plan.unit}</span></p>
          </div>
          <Section title="Plan Inclusions"><div className="grid gap-3 sm:grid-cols-2">{plan.highlights.map((h) => <div key={h} className="flex items-center gap-3 rounded-xl border border-[#f6e4ea] bg-white p-4"><span className="grid h-9 w-9 place-items-center rounded-lg bg-emerald-50 text-emerald-600"><Icon name="Check" size={16} /></span><span className="text-xs font-bold text-[#4a3438]">{h}</span></div>)}</div></Section>
          <Section title="Sample Weekly Menu">
            <div className="grid gap-2 sm:grid-cols-2">{plan.menu.map((m) => <div key={m} className="flex items-center gap-2 rounded-xl bg-white p-3 text-xs font-semibold text-[#4a3438] shadow-card"><Icon name="CheckCircle2" size={15} className="text-chaskaa-500" /> {m}</div>)}</div>
          </Section>
        </div>
        <div className="space-y-4">
          <div className="card p-5">
            <p className="mb-4 text-sm font-extrabold text-[#2b1d20]">Customize your plan</p>
            <label className="block"><span className="label">Delivery address</span><div className="rounded-xl border border-[#eadddd] p-3 text-xs text-[#4a3438]">{address.line}, {address.city} – {address.pincode}</div></label>
            <label className="mt-4 block"><span className="label">Start date</span><input className="input" value={start} onChange={(e) => setStart(e.target.value)} /></label>
            {plan.segment === 'Corporate' && <label className="mt-4 block"><span className="label">Team size</span><input className="input" type="number" min="5" value={team} onChange={(e) => setTeam(Number(e.target.value))} /><span className="mt-1 block text-[10px] text-[#8a7477]">Minimum 5 members for corporate plans</span></label>}
            <div className="mt-5 space-y-2 rounded-xl bg-[#fdf2f4] p-3 text-xs">
              <div className="flex justify-between"><span className="text-[#8a7477]">Plan price</span><b>{inr(plan.price * (plan.segment === 'Corporate' ? team : 1))}</b></div>
              <div className="flex justify-between"><span className="text-[#8a7477]">Delivery</span><b className="text-emerald-600">FREE</b></div>
              <div className="flex justify-between border-t border-[#eddcd8] pt-2 text-sm"><span className="font-bold">Total</span><b className="text-chaskaa-600">{inr(plan.price * (plan.segment === 'Corporate' ? team : 1))}</b></div>
            </div>
            <button className="btn-primary mt-5 w-full !py-3" onClick={subscribe}>Subscribe Now · {inr(plan.price * (plan.segment === 'Corporate' ? team : 1))}</button>
          </div>
          <div className="card p-5 text-xs text-[#8a7477]"><p className="font-extrabold text-[#2b1d20]">Flexible & safe</p><p className="mt-2">Pause or resume anytime before cutoff. Clean kitchens, sealed packs and on-time delivery guaranteed.</p></div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Restaurants ---------------- */
export function Restaurants() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [q, setQ] = useState(params.get('q') || '');
  const [filter, setFilter] = useState('All');
  const list = restaurants.filter((r) => `${r.name} ${r.tags} ${r.menu.map((m) => m.name).join(' ')}`.toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="fade-in">
      <div className="mb-5"><h1 className="text-2xl font-extrabold text-[#2b1d20]">Restaurants near you</h1><p className="text-xs text-[#8a7477]">Sushant Golf City, Lucknow · {list.length} places delivering</p></div>
      <div className="mb-5 flex flex-wrap gap-2">{['All', 'Tiffin', 'Veg', 'Fast Food', 'Offers'].map((f) => <button key={f} onClick={() => setFilter(f)} className={`rounded-full px-3.5 py-2 text-xs font-bold ${filter === f ? 'bg-chaskaa-600 text-white' : 'border border-[#eadddd] bg-white text-[#6d585b]'}`}>{f}</button>)}</div>
      <div className="relative mb-6"><Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#b09b9d]" /><input className="input pl-9" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search restaurants or dishes..." /></div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{list.map((r) => <RestaurantCard key={r.id} r={r} />)}</div>
      {!list.length && <div className="card mt-6 p-10 text-center text-sm text-[#8a7477]">No restaurants found for “{q}”. Try another search.</div>}
      <button onClick={() => navigate('/customer/tiffin')} className="mt-8 w-full rounded-2xl bg-gradient-to-r from-wine-800 to-chaskaa-700 p-5 text-left text-white shadow-float"><p className="text-lg font-extrabold">Looking for daily tiffin?</p><p className="mt-1 text-xs text-white/75">Explore student and corporate meal plans →</p></button>
    </div>
  );
}

/* ---------------- Restaurant Detail ---------------- */
export function RestaurantDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, cart } = useApp();
  const r = restaurants.find((x) => x.id === id) || restaurants[0];
  const [tab, setTab] = useState('Menu');
  const cartCount = cart.reduce((a, c) => a + c.qty, 0);
  return (
    <div className="fade-in">
      <div className="mb-5 flex items-center gap-2 text-xs font-bold text-chaskaa-600"><button onClick={() => navigate('/customer/restaurants')}><Icon name="ArrowLeft" size={14} /></button> All restaurants</div>
      <div className={`mb-6 overflow-hidden rounded-2xl bg-gradient-to-br ${r.color} p-6 text-white shadow-float`}>
        <div className="flex items-center gap-4"><span className="grid h-16 w-16 place-items-center rounded-2xl bg-white/20 text-2xl font-black">{r.logo}</span><div><h1 className="text-2xl font-extrabold">{r.name}</h1><p className="text-xs text-white/80">{r.tags}</p><p className="mt-1 text-xs">{r.eta} · {r.distance} · ★ {r.rating} ({r.ratings})</p></div></div>
      </div>
      <div className="mb-5 flex gap-2">{['Menu', 'Offers', 'Tiffin Plans', 'About'].map((t) => <button key={t} onClick={() => setTab(t === 'Tiffin Plans' ? navigate('/customer/tiffin') : setTab(t))} className={`rounded-full px-4 py-2 text-xs font-bold ${tab === t ? 'bg-chaskaa-600 text-white' : 'border border-[#eadddd] bg-white text-[#6d585b]'}`}>{t}</button>)}</div>
      {tab === 'Offers' && <div className="card mb-5 p-5"><p className="font-extrabold">{r.offer}</p><p className="mt-1 text-xs text-[#8a7477]">Auto-applied at checkout where eligible.</p></div>}
      {tab === 'About' && <div className="card mb-5 p-5 text-xs leading-relaxed text-[#6d585b]">{r.name} is a trusted Chaskaa partner known for {r.tags.toLowerCase()}. All orders are packed hygienically and delivered fresh.</div>}
      {tab === 'Menu' && <Section title={`Menu (${r.menu.length})`}>
        <div className="grid gap-3 md:grid-cols-2">{r.menu.map((m) => (
          <div key={m.id} className="flex gap-4 rounded-2xl border border-[#f6e4ea] bg-white p-4 shadow-card">
            <div className="min-w-0 flex-1">
              <span className={`mb-1 inline-block h-3 w-3 rounded-sm border-2 ${m.veg ? 'border-emerald-600 bg-emerald-100' : 'border-rose-600 bg-rose-100'}`} />
              <p className="text-sm font-extrabold text-[#2b1d20]">{m.name}</p>
              <p className="mt-0.5 text-[11px] text-[#8a7477]">{m.desc}</p>
              <p className="mt-2 text-sm font-extrabold text-chaskaa-600">{inr(m.price)}</p>
            </div>
            <button onClick={() => addToCart({ ...m, vendor: r.name })} className="h-9 shrink-0 self-end rounded-xl border border-chaskaa-300 bg-chaskaa-50 px-4 text-xs font-extrabold text-chaskaa-700 transition hover:bg-chaskaa-600 hover:text-white">ADD +</button>
          </div>
        ))}</div>
      </Section>}
      {cartCount > 0 && <button onClick={() => navigate('/customer/cart')} className="fixed bottom-20 left-1/2 z-30 flex w-[calc(100%-2rem)] max-w-md -translate-x-1/2 items-center justify-between rounded-xl bg-chaskaa-600 px-5 py-3.5 text-sm font-extrabold text-white shadow-float lg:bottom-6"><span>{cartCount} item{cartCount > 1 ? 's' : ''} in cart</span><span className="flex items-center gap-1">View Cart <Icon name="ArrowRight" size={15} /></span></button>}
    </div>
  );
}

/* ---------------- Cart / Checkout ---------------- */
function Bill(items) {
  const subtotal = items.reduce((a, i) => a + i.price * i.qty, 0);
  const packing = items.length * 20;
  const delivery = 30;
  const discount = Math.min(100, Math.round(subtotal * 0.3));
  const tax = Math.round((subtotal - discount) * 0.05);
  const total = subtotal + packing + delivery + tax - discount;
  return { subtotal, packing, delivery, discount, tax, total };
}

export function Cart() {
  const navigate = useNavigate();
  const { cart, updateCartQty, removeFromCart } = useApp();
  const b = Bill(cart);
  return (
    <div className="fade-in">
      <h1 className="mb-5 text-2xl font-extrabold text-[#2b1d20]">My Cart ({cart.reduce((a, c) => a + c.qty, 0)})</h1>
      {!cart.length ? <div className="card p-12 text-center"><span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-chaskaa-50 text-chaskaa-600"><Icon name="ShoppingBag" size={24} /></span><p className="mt-4 font-extrabold">Your cart is empty</p><p className="mt-1 text-xs text-[#8a7477]">Add items from a restaurant to get started.</p><button className="btn-primary mt-5" onClick={() => navigate('/customer/restaurants')}>Browse restaurants</button></div> : (
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="card p-5">
            <p className="mb-4 text-xs font-bold text-[#8a7477]">Items from {cart[0]?.vendor}</p>
            <div className="space-y-4">{cart.map((i) => (
              <div key={i.id} className="flex items-center gap-4 border-b border-[#f6eae7] pb-4 last:border-0">
                <div className="min-w-0 flex-1"><p className="text-sm font-extrabold">{i.name}</p><p className="text-[11px] text-[#8a7477]">{inr(i.price)} each</p></div>
                <div className="flex items-center gap-2 rounded-lg border border-[#eadddd] p-1"><button className="grid h-7 w-7 place-items-center rounded-md text-chaskaa-600 hover:bg-chaskaa-50" onClick={() => updateCartQty(i.id, i.qty - 1)}><Icon name="Minus" size={14} /></button><span className="w-5 text-center text-xs font-extrabold">{i.qty}</span><button className="grid h-7 w-7 place-items-center rounded-md text-chaskaa-600 hover:bg-chaskaa-50" onClick={() => updateCartQty(i.id, i.qty + 1)}><Icon name="Plus" size={14} /></button></div>
                <p className="w-16 text-right text-sm font-extrabold">{inr(i.price * i.qty)}</p>
                <button className="text-[#b09b9d] hover:text-rose-600" onClick={() => removeFromCart(i.id)}><Icon name="Trash2" size={15} /></button>
              </div>
            ))}</div>
            <button className="mt-4 text-xs font-bold text-chaskaa-600" onClick={() => navigate('/customer/restaurants')}>+ Add more items from this restaurant</button>
          </div>
          <div className="card h-fit p-5">
            <p className="mb-4 text-sm font-extrabold">Bill Details</p>
            <div className="space-y-2 text-xs">{[['Items Total', b.subtotal], ['Packing Charges', b.packing], ['Delivery Fee', b.delivery], ['Offer Discount (CHASKAA30)', -b.discount], ['Taxes (GST 5%)', b.tax]].map(([l, v]) => <div key={l} className="flex justify-between"><span className="text-[#8a7477]">{l}</span><b className={v < 0 ? 'text-emerald-600' : ''}>{v < 0 ? '−' : ''}{inr(Math.abs(v))}</b></div>)}</div>
            <div className="mt-4 flex justify-between border-t border-dashed border-[#eadddd] pt-4 text-sm font-extrabold"><span>Total Payable</span><span className="text-chaskaa-600">{inr(b.total)}</span></div>
            <div className="mt-3 rounded-lg bg-emerald-50 p-2 text-center text-[11px] font-bold text-emerald-700">You saved {inr(b.discount)} on this order 🎉</div>
            <button className="btn-primary mt-5 w-full !py-3" onClick={() => navigate('/customer/checkout')}>Proceed to Checkout →</button>
          </div>
        </div>
      )}
    </div>
  );
}

export function Checkout() {
  const navigate = useNavigate();
  const { cart, address, walletBalance, placeCustomerOrder } = useApp();
  const [method, setMethod] = useState('upi');
  const [offer, setOffer] = useState('CHASKAA30');
  const b = Bill(cart);
  if (!cart.length) return <div className="card p-12 text-center"><p className="font-extrabold">Nothing to checkout</p><button className="btn-primary mt-4" onClick={() => navigate('/customer/restaurants')}>Browse food</button></div>;
  const pay = () => {
    const id = 'CHS' + Math.floor(10000 + Math.random() * 89999);
    placeCustomerOrder({ id, type: 'Food Delivery', vendor: cart[0].vendor, items: cart.map((i) => `${i.name} × ${i.qty}`).join(', '), total: b.total, status: 'Placed', placed: 'Just now', eta: '25–30 min', rider: 'Assigning...' });
    navigate(`/customer/success/${id}`);
  };
  return (
    <div className="fade-in">
      <button className="mb-4 flex items-center gap-1 text-xs font-bold text-chaskaa-600" onClick={() => navigate('/customer/cart')}><Icon name="ArrowLeft" size={14} /> Back to cart</button>
      <h1 className="mb-5 text-2xl font-extrabold text-[#2b1d20]">Checkout</h1>
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4">
          <div className="card p-5"><div className="flex items-start gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-chaskaa-50 text-chaskaa-600"><Icon name="MapPin" size={18} /></span><div className="flex-1"><p className="text-sm font-extrabold">Delivery Address</p><p className="mt-1 text-xs text-[#6d585b]">{address.line}, {address.city} – {address.pincode}</p><p className="mt-1 text-[11px] text-emerald-600">25–30 mins · 2.4 km</p></div><button className="text-xs font-bold text-chaskaa-600" onClick={() => navigate('/customer/profile')}>Change</button></div></div>
          <div className="card p-5"><p className="text-sm font-extrabold">Apply Offers</p><div className="mt-3 flex items-center gap-3 rounded-xl border border-dashed border-chaskaa-300 bg-chaskaa-50/50 p-3"><span className="grid h-9 w-9 place-items-center rounded-lg bg-chaskaa-100 text-chaskaa-700"><Icon name="Gift" size={17} /></span><div className="flex-1"><p className="text-xs font-extrabold text-chaskaa-700">30% OFF up to ₹100</p><p className="text-[10px] text-[#8a7477]">Use code CHASKAA30</p></div><span className="text-[11px] font-extrabold text-emerald-600">Applied ✓</span></div></div>
          <div className="card p-5"><p className="mb-3 text-sm font-extrabold">Choose Payment Method</p><div className="space-y-2">{paymentMethods.map((m) => (
            <button key={m.id} onClick={() => setMethod(m.id)} className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left transition ${method === m.id ? 'border-chaskaa-400 bg-chaskaa-50' : 'border-[#f0e2df] hover:border-chaskaa-200'}`}>
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-white text-chaskaa-600 shadow-sm"><Icon name={m.icon} size={17} /></span>
              <span className="flex-1"><span className="block text-xs font-extrabold">{m.name}{m.id === 'wallet' ? ` (₹${walletBalance})` : ''}</span><span className="block text-[10px] text-[#8a7477]">{m.sub}</span></span>
              <span className={`h-4 w-4 rounded-full border-4 ${method === m.id ? 'border-chaskaa-600 bg-white' : 'border-[#e5d7d4] bg-white'}`} />
            </button>
          ))}</div></div>
        </div>
        <div className="card h-fit p-5">
          <p className="mb-4 text-sm font-extrabold">Payment Summary</p>
          <div className="space-y-2 text-xs">{[['Items Total', b.subtotal], ['Packing Charges', b.packing], ['Delivery Fee', b.delivery], [`Offer Discount (${offer})`, -b.discount], ['Taxes (GST 5%)', b.tax]].map(([l, v]) => <div key={l} className="flex justify-between"><span className="text-[#8a7477]">{l}</span><b className={v < 0 ? 'text-emerald-600' : ''}>{v < 0 ? '−' : ''}{inr(Math.abs(v))}</b></div>)}</div>
          <div className="mt-4 flex justify-between border-t border-dashed border-[#eadddd] pt-4 text-base font-extrabold"><span>Total Payable</span><span className="text-chaskaa-600">{inr(b.total)}</span></div>
          <button className="btn-primary mt-5 w-full !py-3" onClick={pay}>Pay {inr(b.total)} Now →</button>
          <p className="mt-3 text-center text-[10px] text-[#a89598]">🔒 Secure payments via Razorpay · UPI · Cards · Wallet</p>
        </div>
      </div>
    </div>
  );
}

export function OrderSuccess() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="mx-auto max-w-lg py-10 text-center fade-in">
      <span className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-emerald-50 text-emerald-600"><Icon name="CheckCircle2" size={52} /></span>
      <h1 className="mt-6 text-2xl font-extrabold text-[#2b1d20]">Order Placed Successfully!</h1>
      <p className="mt-2 text-sm text-[#8a7477]">Your order <b className="text-chaskaa-600">#{id}</b> has been placed. We're getting it ready fresh for you.</p>
      <div className="card mt-7 p-5 text-left">
        <div className="flex justify-between text-xs"><span className="text-[#8a7477]">Order Type</span><b>Food Delivery</b></div>
        <div className="mt-3 flex justify-between text-xs"><span className="text-[#8a7477]">Estimated Delivery</span><b className="text-emerald-600">25–30 mins</b></div>
      </div>
      <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center">
        <button className="btn-primary" onClick={() => navigate(`/customer/track/${id}`)}>Track Order Live →</button>
        <button className="btn-ghost" onClick={() => navigate('/customer')}>Back to Home</button>
      </div>
    </div>
  );
}

export function TrackOrder() {
  const { id } = useParams();
  const navigate = useNavigate();
  const steps = [['Order Placed', '10:24 AM', true], ['Preparing', '10:41 AM', true], ['Out for Delivery', 'On the way', true], ['Delivered', 'Expected 10:55 AM', false]];
  return (
    <div className="fade-in">
      <button className="mb-4 flex items-center gap-1 text-xs font-bold text-chaskaa-600" onClick={() => navigate('/customer/orders')}><Icon name="ArrowLeft" size={14} /> My orders</button>
      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <div className="card p-6">
          <Badge tone="amber" dot>Out for delivery</Badge>
          <h1 className="mt-3 text-xl font-extrabold">Track Order #{id}</h1>
          <p className="mt-1 text-xs text-[#8a7477]">Bhojan Homes · 2 items · ETA 25–30 min</p>
          <div className="mt-8 space-y-0">{steps.map(([label, time, done], i) => (
            <div key={label} className="flex gap-4 pb-7 last:pb-0"><div className="flex flex-col items-center"><span className={`grid h-6 w-6 place-items-center rounded-full ${done ? 'bg-emerald-500 text-white' : 'bg-[#eee1de] text-[#a89598]'}`}>{done ? <Icon name="Check" size={12} /> : <span className="h-1.5 w-1.5 rounded-full bg-current" />}</span>{i < steps.length - 1 && <span className="w-px flex-1 bg-[#eee1de]" />}</div><div><p className={`text-sm font-extrabold ${done ? 'text-[#2b1d20]' : 'text-[#a89598]'}`}>{label}</p><p className="text-[11px] text-[#8a7477]">{time}</p></div></div>
          ))}</div>
        </div>
        <div className="space-y-4">
          <div className="card p-5"><p className="text-sm font-extrabold">Delivery partner</p><div className="mt-4 flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-full bg-chaskaa-100 text-sm font-extrabold text-chaskaa-700">RK</span><div><p className="text-sm font-extrabold">Rohit Kumar</p><p className="text-[11px] text-[#8a7477]">★ 4.8 · 1,240+ deliveries</p></div><button className="ml-auto rounded-lg bg-emerald-50 p-2 text-emerald-600"><Icon name="Phone" size={16} /></button></div></div>
          <div className="card overflow-hidden"><div className="flex h-40 items-center justify-center bg-gradient-to-br from-[#f6e8d8] to-[#e8d9c8] text-[#8a7477]"><div className="text-center"><Icon name="MapPin" size={26} className="mx-auto text-chaskaa-600" /><p className="mt-2 text-xs font-bold">Live tracking map</p><p className="text-[10px]">Rider is 1.2 km away</p></div></div><div className="p-4 text-xs text-[#8a7477]">Your order is on the way! Rider has picked up your food.</div></div>
          <button className="btn-ghost w-full" onClick={() => navigate('/customer/orders')}>View order details</button>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Orders / Subscriptions / Wallet / Profile ---------------- */
export function CustomerOrders() {
  const navigate = useNavigate();
  const { customerOrders } = useApp();
  const [type, setType] = useState('Food Orders');
  const [status, setStatus] = useState('Ongoing');
  const rows = customerOrders.filter((o) => (type === 'Tiffin Plans' ? o.type === 'Tiffin' : o.type !== 'Tiffin') && (status === 'All' || o.status === status));
  return (
    <div className="fade-in">
      <h1 className="mb-5 text-2xl font-extrabold text-[#2b1d20]">My Orders</h1>
      <div className="mb-4 grid grid-cols-2 gap-2 rounded-xl bg-white p-1 shadow-card">{['Food Orders', 'Tiffin Plans'].map((t) => <button key={t} onClick={() => setType(t)} className={`rounded-lg py-2.5 text-xs font-extrabold ${type === t ? 'bg-chaskaa-600 text-white' : 'text-[#8a7477]'}`}>{t}</button>)}</div>
      <div className="mb-5 flex gap-2">{['Ongoing', 'Completed', 'Cancelled', 'All'].map((s) => <button key={s} onClick={() => setStatus(s)} className={`rounded-full px-3 py-1.5 text-[11px] font-bold ${status === s ? 'bg-chaskaa-50 text-chaskaa-700 ring-1 ring-chaskaa-200' : 'text-[#8a7477]'}`}>{s}</button>)}</div>
      <div className="space-y-3">{rows.length ? rows.map((o) => (
        <div key={o.id} className="card p-5">
          <div className="flex items-start justify-between gap-3"><div><p className="text-sm font-extrabold">{o.vendor}</p><p className="mt-0.5 text-[11px] text-[#8a7477]">Order #{o.id} · {o.placed}</p></div><Badge tone={o.status === 'Delivered' ? 'green' : o.status === 'Cancelled' ? 'red' : 'amber'} dot>{o.status}</Badge></div>
          <p className="mt-3 text-xs text-[#6d585b]">{o.items}</p>
          <div className="mt-4 flex items-center justify-between border-t border-[#f6eae7] pt-3"><p className="text-sm font-extrabold">{inr(o.total)}</p><button className="text-xs font-extrabold text-chaskaa-600" onClick={() => navigate(`/customer/track/${o.id}`)}>{o.status === 'Delivered' ? 'View Details →' : 'Track Order →'}</button></div>
        </div>
      )) : <div className="card p-10 text-center text-sm text-[#8a7477]">No {status.toLowerCase()} orders here yet.</div>}</div>
    </div>
  );
}

export function CustomerSubscriptions() {
  const { mySubscriptions, toggleMySubscription } = useApp();
  const navigate = useNavigate();
  return (
    <div className="fade-in">
      <div className="mb-5 flex items-center justify-between"><h1 className="text-2xl font-extrabold text-[#2b1d20]">My Subscriptions</h1><button className="btn-primary !py-2 !text-xs" onClick={() => navigate('/customer/tiffin')}>Browse plans</button></div>
      <div className="space-y-4">{mySubscriptions.map((s) => (
        <div key={s.id} className="card p-5">
          <div className="flex flex-wrap items-start justify-between gap-3"><div><p className="text-base font-extrabold">{s.plan}</p><p className="text-[11px] text-[#8a7477]">{s.vendor} · {s.id}</p></div><Badge tone={s.status === 'Active' ? 'green' : 'amber'} dot>{s.status}</Badge></div>
          <div className="mt-4 grid grid-cols-2 gap-3 text-xs sm:grid-cols-4">{[['Duration', s.duration], ['Meals', s.meals], ['Start', s.start], ['Valid till', s.end]].map(([k, v]) => <div key={k} className="rounded-xl bg-[#fdf2f4] p-3"><p className="text-[10px] font-semibold text-[#8a7477]">{k}</p><p className="mt-0.5 font-extrabold">{v}</p></div>)}</div>
          <div className="mt-4 flex flex-wrap items-center gap-2"><button className="btn-soft !py-2 !text-xs" onClick={() => toggleMySubscription(s.id)}>{s.status === 'Paused' ? 'Resume plan' : 'Pause plan'}</button><button className="btn-ghost !py-2 !text-xs" onClick={() => navigate('/customer/tiffin')}>Change plan</button><span className="ml-auto text-sm font-extrabold text-chaskaa-600">{inr(s.price)}</span></div>
        </div>
      ))}</div>
    </div>
  );
}

export function Wallet() {
  const { walletBalance, topUpWallet } = useApp();
  const txns = [['Refund · CHS42883', '+ ₹320', true], ['Cashback · CHASKAA30', '+ ₹50', true], ['Order · CHS42871', '− ₹1,999', false], ['Referral reward', '+ ₹100', true]];
  return (
    <div className="fade-in">
      <h1 className="mb-5 text-2xl font-extrabold text-[#2b1d20]">Chaskaa Wallet</h1>
      <div className="rounded-2xl bg-gradient-to-br from-wine-800 to-chaskaa-700 p-6 text-white shadow-float">
        <p className="text-xs text-white/70">Available balance</p>
        <p className="mt-1 text-4xl font-extrabold">{inr(walletBalance)}</p>
        <p className="mt-2 text-[11px] text-white/70">Use your wallet balance on food orders and tiffin plans.</p>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">{[100, 500, 1000].map((a) => <button key={a} className="btn-soft" onClick={() => topUpWallet(a)}>+ Add ₹{a}</button>)}</div>
      <Section title="Recent transactions"><div className="card divide-y divide-[#f6eae7]">{txns.map(([t, a, credit]) => <div key={t} className="flex items-center justify-between p-4"><div className="flex items-center gap-3"><span className={`grid h-9 w-9 place-items-center rounded-lg ${credit ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}><Icon name={credit ? 'ArrowDownRight' : 'ArrowUpRight'} size={16} /></span><span className="text-xs font-bold">{t}</span></div><b className={credit ? 'text-emerald-600' : 'text-rose-600'}>{a}</b></div>)}</div></Section>
    </div>
  );
}

export function CustomerProfile() {
  const navigate = useNavigate();
  const { address } = useApp();
  const links = [
    ['Saved Addresses', 'MapPin', '/customer/profile'], ['Payment Methods', 'CreditCard', '/customer/checkout'],
    ['My Wallet', 'Wallet', '/customer/wallet'], ['My Subscriptions', 'CalendarCheck', '/customer/subscriptions'],
    ['Refer & Earn', 'Gift', '/customer/profile'], ['Help & Support', 'HelpCircle', '/customer/profile'],
    ['Settings', 'Settings', '/customer/profile'],
  ];
  return (
    <div className="fade-in">
      <div className="flex items-center gap-4 rounded-2xl border border-[#f6e4ea] bg-white p-5 shadow-card">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-chaskaa-100 text-xl font-extrabold text-chaskaa-700">AR</span>
        <div><p className="text-lg font-extrabold text-[#2b1d20]">Akash Rai</p><p className="text-xs text-[#8a7477]">+91 98765 43210 · akash.rai@example.com</p><Badge tone="green" className="mt-2">Student verified</Badge></div>
        <button className="ml-auto text-chaskaa-600"><Icon name="Pencil" size={16} /></button>
      </div>
      <div className="mt-5 card p-5"><p className="text-xs font-bold text-[#8a7477]">Delivery address</p><p className="mt-1 text-sm font-bold">{address.line}</p><p className="text-xs text-[#8a7477]">{address.city} – {address.pincode}</p></div>
      <div className="mt-5 grid gap-2 sm:grid-cols-2">{links.map(([label, icon, path]) => <button key={label} onClick={() => navigate(path)} className="flex items-center gap-3 rounded-xl border border-[#f6e4ea] bg-white p-4 text-left transition hover:border-chaskaa-200 hover:shadow-card"><span className="grid h-9 w-9 place-items-center rounded-lg bg-chaskaa-50 text-chaskaa-600"><Icon name={icon} size={17} /></span><span className="flex-1 text-xs font-extrabold text-[#4a3438]">{label}</span><Icon name="ChevronRight" size={15} className="text-[#b09b9d]" /></button>)}</div>
      <button onClick={() => navigate('/')} className="mt-6 w-full rounded-xl border border-dashed border-chaskaa-300 bg-chaskaa-50/50 py-3 text-xs font-extrabold text-chaskaa-700">Switch workspace / All apps ↗</button>
      <div className="mt-3 flex w-full items-center justify-center rounded-xl border border-[#f0e2df] bg-white py-3 text-xs font-extrabold text-rose-600 hover:bg-rose-50">
        <LogoutButton variant="link" className="!text-rose-600" />
      </div>
    </div>
  );
}
