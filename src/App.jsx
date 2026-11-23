import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
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
import { useApp } from './store/AppContext';

function RequireSession({ children }) {
  const { session } = useApp();
  const location = useLocation();
  if (!session) return <Navigate to={`/login?next=${encodeURIComponent(location.pathname + location.search)}`} replace />;
  return children;
}

export default function App() {
  return (
    <Routes>
      {/* No landing/portal page — the app opens straight into the unified login. */}
      <Route path="/" element={<Login />} />
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

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
