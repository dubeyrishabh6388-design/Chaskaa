import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import CustomerLayout from './components/CustomerLayout';
import Dashboard from './pages/Dashboard';
import { Orders, Subscriptions, Tiffin, Vendors } from './pages/Operations';
import { Marketing, Payments, Roles, Settings, Support, Users } from './pages/Business';
import Reports from './pages/Reports';
import Login from './pages/Login';
import {
  Cart, Checkout, CustomerHome, CustomerOrders, CustomerProfile,
  CustomerSubscriptions, OrderSuccess, PlanDetail, Restaurants, RestaurantDetail,
  TiffinService, TrackOrder, Wallet,
} from './pages/CustomerApp';
import {
  VendorDashboard, VendorEarnings, VendorLayout, VendorMenu, VendorOffers,
  VendorOrders, VendorReviews, VendorSettings, VendorStaff, VendorTiffin,
} from './pages/VendorApp';
import { Icon } from './components/ui';
import { useApp } from './store/AppContext';

function RequireSession({ children }) {
  const { session } = useApp();
  const location = useLocation();
  if (!session) return <Navigate to={`/login?next=${encodeURIComponent(location.pathname + location.search)}`} replace />;
  return children;
}

function Portal() {
  const { session } = useApp();
  const apps = [
    { to: session ? '/dashboard' : '/login?role=admin', title: 'Admin Console', desc: 'Manage vendors, orders, tiffin, payments, growth & reports.', icon: 'LayoutDashboard', tone: 'from-wine-800 to-chaskaa-700', badge: 'Super Admin' },
    { to: session ? '/customer' : '/login?role=customer', title: 'Customer App', desc: 'Food delivery, tiffin subscriptions, cart, checkout & tracking.', icon: 'ShoppingBag', tone: 'from-chaskaa-600 to-chaskaa-800', badge: 'Web App' },
    { to: session ? '/vendor' : '/login?role=merchant', title: 'Merchant Panel', desc: 'Kitchen order board, menu manager, tiffin operations & earnings.', icon: 'Store', tone: 'from-amber-600 to-chaskaa-700', badge: 'Vendor' },
  ];
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-[#fef5f8] via-[#fff8f9] to-[#fdf2f4]">
      <div className="h-1.5 bg-gradient-to-r from-chaskaa-700 via-chaskaa-500 to-amber-400" />
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-6 sm:px-8">
        <div className="flex items-center gap-2.5"><span className="grid h-10 w-10 place-items-center rounded-xl bg-chaskaa-600 text-xl font-black text-white shadow-card">C</span><div><p className="text-xl font-extrabold leading-none text-[#5c0f18]">Chaskaa</p><p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-chaskaa-500">Har bite Mein Chaskaa</p></div></div>
        <Link to="/login" className="btn-ghost !py-2 !text-xs">{session ? 'Switch account' : 'Sign in to all apps'} →</Link>
      </header>
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 py-10 sm:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-[.2em] text-chaskaa-600">Chaskaa Platform</p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-[#2b1d20] sm:text-5xl">One platform. <span className="text-chaskaa-600">Every bite.</span></h1>
          <p className="mt-4 text-sm leading-relaxed text-[#6d585b]">Fresh food delivery, daily tiffin and corporate meals — with dedicated workspaces for customers, merchants and administrators. Choose a console to explore.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {apps.map((a) => (
            <Link key={a.to} to={a.to} className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${a.tone} p-6 text-white shadow-float transition hover:-translate-y-1`}>
              <span className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/10" />
              <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-white/15 ring-1 ring-white/20"><Icon name={a.icon} size={22} /></span>
              <p className="relative mt-5 text-xl font-extrabold">{a.title}</p>
              <p className="relative mt-2 min-h-[48px] text-xs leading-relaxed text-white/75">{a.desc}</p>
              <div className="relative mt-5 flex items-center justify-between"><span className="rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold">{a.badge}</span><span className="flex items-center gap-1 text-xs font-extrabold group-hover:gap-2">Open <Icon name="ArrowRight" size={14} /></span></div>
            </Link>
          ))}
        </div>
        <p className="mt-12 text-center text-[11px] text-[#a89598]">© 2026 Chaskaa · Demo application · All data is illustrative mock data</p>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Portal />} />
      <Route path="/login" element={<Login />} />

      {/* Admin console */}
      <Route element={<RequireSession><Layout /></RequireSession>}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/tiffin" element={<Tiffin />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/users" element={<Users />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/support" element={<Support />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      {/* Customer web app */}
      <Route path="/customer/login" element={<Navigate to="/login?role=customer" replace />} />
      <Route path="/customer" element={<RequireSession><CustomerLayout /></RequireSession>}>
        <Route index element={<CustomerHome />} />
        <Route path="tiffin" element={<TiffinService />} />
        <Route path="plans/:id" element={<PlanDetail />} />
        <Route path="restaurants" element={<Restaurants />} />
        <Route path="restaurants/:id" element={<RestaurantDetail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="success/:id" element={<OrderSuccess />} />
        <Route path="track/:id" element={<TrackOrder />} />
        <Route path="orders" element={<CustomerOrders />} />
        <Route path="subscriptions" element={<CustomerSubscriptions />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="profile" element={<CustomerProfile />} />
      </Route>

      {/* Merchant / vendor panel */}
      <Route path="/vendor" element={<RequireSession><VendorLayout /></RequireSession>}>
        <Route index element={<VendorDashboard />} />
        <Route path="orders" element={<VendorOrders />} />
        <Route path="tiffin" element={<VendorTiffin />} />
        <Route path="menu" element={<VendorMenu />} />
        <Route path="offers" element={<VendorOffers />} />
        <Route path="earnings" element={<VendorEarnings />} />
        <Route path="reviews" element={<VendorReviews />} />
        <Route path="staff" element={<VendorStaff />} />
        <Route path="settings" element={<VendorSettings />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
