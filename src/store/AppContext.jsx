import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import * as seed from '../data/mockData';

const AppContext = createContext(null);

const STORAGE_KEY = 'chaskaa-admin-state-v1';

const initialState = {
  vendors: seed.vendors,
  riders: seed.riders,
  orders: seed.orders,
  subscriptions: seed.subscriptions,
  tickets: seed.tickets,
  coupons: seed.coupons,
  banners: seed.banners,
  alerts: seed.initialAlerts,
  session: null,
  cart: [],
  customerOrders: seed.customerOrders,
  mySubscriptions: seed.mySubscriptions,
  walletBalance: 350,
  address: {
    label: 'Home',
    line: 'Flat 302, A-Block, Sushant Golf City, Bhojan Homes',
    city: 'Lucknow',
    pincode: '226030',
  },
};

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialState;
    const saved = JSON.parse(raw);
    return { ...initialState, ...saved };
  } catch {
    return initialState;
  }
}

export function AppProvider({ children }) {
  const [state, setState] = useState(load);
  const [toast, setToast] = useState(null);
  const timer = useRef(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const notify = (message, type = 'success') => {
    setToast({ message, type, id: Date.now() });
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(null), 3200);
  };

  const updateRow = (key, id, patch, message) => {
    setState((s) => ({
      ...s,
      [key]: s[key].map((row) => (row.id === id ? { ...row, ...patch } : row)),
    }));
    if (message) notify(message);
  };

  const addRow = (key, row, message) => {
    setState((s) => ({ ...s, [key]: [row, ...s[key]] }));
    if (message) notify(message);
  };

  const dismissAlert = (id) => {
    setState((s) => ({ ...s, alerts: s.alerts.filter((a) => a.id !== id) }));
  };

  const actions = {
    signIn: (account) => {
      setState((s) => ({ ...s, session: { role: account.role, name: account.name, email: account.email, title: account.title, at: Date.now() } }));
      notify(`Signed in as ${account.title}`);
    },
    signOut: () => {
      setState((s) => ({ ...s, session: null }));
      notify('Signed out successfully');
    },
    setVendorStatus: (id, status) =>
      updateRow('vendors', id, { status }, `Vendor ${status.toLowerCase()} successfully`),
    updateCommission: (id, commission) =>
      updateRow('vendors', id, { commission }, `Commission updated to ${commission}`),
    setRiderKyc: (id, kyc) => updateRow('riders', id, { kyc }, `KYC ${kyc.toLowerCase()}`),
    toggleRiderOnline: (id, online) =>
      updateRow('riders', id, { online }, online ? 'Rider is now online' : 'Rider is now offline'),
    updateRiderZone: (id, zone) => updateRow('riders', id, { zone }, `Zone updated to ${zone}`),
    assignRider: (orderId, rider) =>
      updateRow('orders', orderId, { rider, status: rider ? 'Out for delivery' : 'Confirmed' },
        rider ? `Rider ${rider} assigned` : 'Rider unassigned'),
    setOrderStatus: (orderId, status) =>
      updateRow('orders', orderId, { status }, `Order marked ${status.toLowerCase()}`),
    setSubscriptionStatus: (id, status) =>
      updateRow('subscriptions', id, { status }, `Subscription ${status.toLowerCase()}`),
    resolveTicket: (id) => updateRow('tickets', id, { status: 'Resolved' }, 'Ticket resolved'),
    addCoupon: (coupon) => addRow('coupons', coupon, `Coupon ${coupon.code} created`),
    toggleCoupon: (id, status) => updateRow('coupons', id, { status }, `Coupon ${status.toLowerCase()}`),
    addBanner: (banner) => addRow('banners', banner, 'Banner campaign created'),

    // Customer web app
    addToCart: (item) => {
      setState((s) => {
        const found = s.cart.find((c) => c.id === item.id);
        return {
          ...s,
          cart: found
            ? s.cart.map((c) => (c.id === item.id ? { ...c, qty: c.qty + 1 } : c))
            : [...s.cart, { ...item, qty: 1 }],
        };
      });
      notify(`${item.name} added to cart`);
    },
    updateCartQty: (id, qty) => setState((s) => ({
      ...s,
      cart: qty <= 0 ? s.cart.filter((c) => c.id !== id) : s.cart.map((c) => (c.id === id ? { ...c, qty } : c)),
    })),
    removeFromCart: (id) => setState((s) => ({ ...s, cart: s.cart.filter((c) => c.id !== id) })),
    clearCart: () => setState((s) => ({ ...s, cart: [] })),
    placeCustomerOrder: (order) => {
      setState((s) => ({ ...s, customerOrders: [order, ...s.customerOrders], cart: [] }));
      notify('Order placed successfully!');
    },
    subscribeToPlan: (sub) => {
      setState((s) => ({ ...s, mySubscriptions: [sub, ...s.mySubscriptions] }));
      notify('Subscription activated!');
    },
    toggleMySubscription: (id) => setState((s) => ({
      ...s,
      mySubscriptions: s.mySubscriptions.map((x) => x.id === id ? { ...x, status: x.status === 'Paused' ? 'Active' : 'Paused' } : x),
    })),
    topUpWallet: (amount) => {
      setState((s) => ({ ...s, walletBalance: s.walletBalance + amount }));
      notify(`₹${amount} added to wallet`);
    },
    dismissAlert,
    notify,
  };

  const value = useMemo(() => ({ ...state, ...actions }), [state]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
