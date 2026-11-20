import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { accountByRole, demoAccounts } from '../data/accounts';
import { useApp } from '../store/AppContext';
import { Icon } from '../components/ui';

export default function Login() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const { signIn, session } = useApp();

  const requestedRole = params.get('role');
  const requestedNext = params.get('next');
  const initialAccount = accountByRole(requestedRole);

  const [role, setRole] = useState(initialAccount.role);
  const [step, setStep] = useState('credentials');
  const [email, setEmail] = useState(initialAccount.email);
  const [password, setPassword] = useState(initialAccount.password);
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const a = accountByRole(role);
    setEmail(a.email);
    setPassword(a.password);
    setError('');
  }, [role]);

  const safeNext = requestedNext && requestedNext.startsWith('/') && !requestedNext.startsWith('//') ? requestedNext : null;

  const enterDemo = (account, respectNext = false) => {
    signIn(account);
    navigate(respectNext && safeNext ? safeNext : account.home, { replace: true });
  };

  const submit = (e) => {
    e.preventDefault();
    if (!email || !password) { setError('Email and password are required'); return; }
    setError('');
    setStep('mfa');
  };

  const verify = () => {
    if (otp.length !== 6) { setError('Enter the 6-digit demo code (123456)'); return; }
    signIn(accountByRole(role));
    navigate(safeNext || accountByRole(role).home, { replace: true });
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
      {/* Brand panel */}
      <div className="relative hidden flex-col justify-between overflow-hidden bg-sidebar-wine p-12 text-white lg:flex">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/5" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-white/5" />
        <div className="relative">
          <p className="text-2xl font-extrabold">Chaskaa</p>
          <p className="mt-1 text-sm text-white/60">Har bite Mein Chaskaa</p>
        </div>
        <div className="relative max-w-md">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-white/50">One login · Every workspace</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight">Command center for<br />everything Chaskaa.</h1>
          <p className="mt-4 text-sm leading-relaxed text-white/70">Admin console, customer app aur merchant panel — ek hi secure login se sab access karo.</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {[['3', 'workspaces'], ['3,428', 'orders tracked'], ['24,890', 'users']].map(([v, l]) => (
              <div key={l} className="rounded-xl bg-white/10 px-4 py-3 ring-1 ring-white/15"><p className="text-lg font-extrabold">{v}</p><p className="text-[10px] text-white/60">{l}</p></div>
            ))}
          </div>
        </div>
        <p className="relative text-[11px] text-white/40">© 2026 Chaskaa · Unified Login</p>
      </div>

      {/* Login panel */}
      <div className="flex items-center justify-center bg-[#fbf8f7] px-4 py-10 sm:px-8">
        <div className="w-full max-w-lg">
          <div className="mb-7 lg:hidden">
            <p className="text-2xl font-extrabold text-chaskaa-600">Chaskaa</p>
            <p className="text-xs text-[#8a7477]">Har bite Mein Chaskaa</p>
          </div>

          <h2 className="text-2xl font-extrabold text-[#2b1d20]">{step === 'credentials' ? 'Welcome back 👋' : 'Two-factor verification'}</h2>
          <p className="mt-1 text-sm text-[#8a7477]">
            {step === 'credentials' ? 'Ek login — Admin, Customer aur Merchant sab ke liye.' : 'Demo code 123456 daalo ya koi bhi 6-digit code chalega.'}
          </p>

          {session && step === 'credentials' && (
            <div className="mt-5 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-xs text-emerald-800">
              <Icon name="CheckCircle2" size={16} />
              <span className="flex-1">Abhi <b>{session.title}</b> ke roop me signed in ho. Kisi demo card par click karke switch kar sakte ho.</span>
            </div>
          )}

          {step === 'credentials' ? (
            <>
              {/* One-click demo */}
              <div className="mt-7">
                <div className="mb-3 flex items-center gap-2">
                  <span className="grid h-6 w-6 place-items-center rounded-lg bg-chaskaa-100 text-chaskaa-700"><Icon name="Zap" size={14} /></span>
                  <p className="text-xs font-extrabold uppercase tracking-wide text-[#6d585b]">One-click demo login</p>
                </div>
                <button
                  onClick={() => enterDemo(demoAccounts[0], true)}
                  className="group flex w-full items-center gap-4 rounded-2xl bg-gradient-to-r from-wine-800 via-wine-700 to-chaskaa-700 p-4 text-left text-white shadow-float transition hover:-translate-y-0.5"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/15 ring-1 ring-white/20"><Icon name="Zap" size={20} /></span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-extrabold">Demo ID se enter karo — sab workspaces unlock</span>
                    <span className="mt-0.5 block text-[11px] text-white/70">admin@chaskaa.in · password: chaskaa123 · MFA: 123456</span>
                  </span>
                  <Icon name="ArrowRight" size={18} className="shrink-0 transition group-hover:translate-x-1" />
                </button>

                <div className="mt-3 grid gap-2 sm:grid-cols-3">
                  {demoAccounts.map((a) => (
                    <button key={a.role} onClick={() => enterDemo(a)}
                      className={`rounded-xl border-2 bg-white p-3 text-left transition hover:-translate-y-0.5 hover:shadow-card ${role === a.role ? 'border-chaskaa-300' : 'border-[#f0e2df]'}`}>
                      <span className={`grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br ${a.tone} text-white`}><Icon name={a.icon} size={16} /></span>
                      <p className="mt-2 text-xs font-extrabold text-[#2b1d20]">{a.title}</p>
                      <p className="mt-0.5 text-[10px] leading-tight text-[#8a7477]">{a.label} ↗</p>
                    </button>
                  ))}
                </div>
                <p className="mt-2 text-center text-[10px] text-[#a89598]">Tip: kisi bhi role ka demo card dabao — usi workspace me chale jaoge.</p>
              </div>

              <div className="my-6 flex items-center gap-3 text-[11px] text-[#a89598]">
                <span className="h-px flex-1 bg-[#eee1de]" /> ya apne account se sign in karo <span className="h-px flex-1 bg-[#eee1de]" />
              </div>

              <form onSubmit={submit} className="space-y-4">
                <div>
                  <span className="label">Account type</span>
                  <div className="grid grid-cols-3 gap-1 rounded-xl bg-[#f6efef] p-1">
                    {demoAccounts.map((a) => (
                      <button type="button" key={a.role} onClick={() => setRole(a.role)}
                        className={`rounded-lg py-2 text-[11px] font-bold transition ${role === a.role ? 'bg-white text-chaskaa-700 shadow-sm' : 'text-[#8a7477] hover:text-[#4a3438]'}`}>
                        {a.title}
                      </button>
                    ))}
                  </div>
                </div>
                <label className="block"><span className="label">Email address</span><input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
                <label className="block"><span className="label">Password</span><input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></label>
                {error && <p className="text-xs font-semibold text-rose-600">{error}</p>}
                <button type="submit" className="btn-primary w-full !py-3">Continue securely <Icon name="ArrowUpRight" size={16} /></button>
                <p className="rounded-xl bg-[#fdf4f3] p-3 text-center text-[11px] text-[#8a7477]">Demo mode — koi bhi email/password chalega. MFA code: <b>123456</b></p>
              </form>
            </>
          ) : (
            <div className="mt-8 space-y-5">
              <button className="flex items-center gap-1 text-xs font-bold text-chaskaa-600" onClick={() => { setStep('credentials'); setOtp(''); setError(''); }}><Icon name="ArrowLeft" size={14} /> Back to sign in</button>
              <div className="flex items-center gap-3 rounded-xl bg-chaskaa-50 p-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-white text-chaskaa-600"><Icon name="ShieldCheck" size={17} /></span>
                <div><p className="text-xs font-bold text-[#2b1d20]">Signing in as {accountByRole(role).title}</p><p className="text-[10px] text-[#8a7477]">{email}</p></div>
              </div>
              <label className="block">
                <span className="label">Verification code</span>
                <input className="input text-center text-2xl font-extrabold tracking-[.4em]" maxLength={6} value={otp} onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))} placeholder="000000" />
              </label>
              {error && <p className="text-xs font-semibold text-rose-600">{error}</p>}
              <button className="btn-primary w-full !py-3" onClick={verify}>Verify & sign in</button>
              <button className="btn-ghost w-full" onClick={() => { signIn(accountByRole(role)); navigate(accountByRole(role).home, { replace: true }); }}>Skip MFA (demo shortcut)</button>
            </div>
          )}

          <p className="mt-8 text-center text-[11px] leading-relaxed text-[#a89598]">Protected by MFA, RBAC and an immutable audit log.<br />Demo access unlocks all three workspaces.</p>
        </div>
      </div>
    </div>
  );
}
