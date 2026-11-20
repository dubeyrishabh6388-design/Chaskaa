export const navGroups = [
  {
    label: null,
    items: [{ label: 'Dashboard', path: '/dashboard', icon: 'LayoutDashboard' }],
  },
  {
    label: 'Business Management',
    items: [
      { label: 'Vendors & Restaurants', path: '/vendors', icon: 'Store' },
      { label: 'Users & Access', path: '/users', icon: 'Users' },
      { label: 'Tiffin Service', path: '/tiffin', icon: 'Soup' },
    ],
  },
  {
    label: 'Orders & Delivery',
    items: [
      { label: 'Orders & Deliveries', path: '/orders', icon: 'ShoppingBag' },
      { label: 'Subscriptions & Plans', path: '/subscriptions', icon: 'CalendarCheck' },
    ],
  },
  {
    label: null,
    items: [{ label: 'Marketing & Promotions', path: '/marketing', icon: 'Megaphone' }],
  },
  {
    label: null,
    items: [{ label: 'Support & Disputes', path: '/support', icon: 'LifeBuoy' }],
  },
  {
    label: null,
    items: [{ label: 'Reports & Analytics', path: '/reports', icon: 'BarChart3' }],
  },
  {
    label: null,
    items: [{ label: 'Roles & Access', path: '/roles', icon: 'ShieldCheck' }],
  },
];

export const managementModules = [
  { label: 'Vendors', detail: 'roles & access, approvals', path: '/vendors', icon: 'Store', tone: 'red' },
  { label: 'Payments', detail: 'transactions, settlements & payouts', path: '/payments', icon: 'Wallet', tone: 'green' },
  { label: 'Marketing', detail: 'offers, coupons, banners & campaigns', path: '/marketing', icon: 'Megaphone', tone: 'purple' },
  { label: 'Reports', detail: 'business & performance analytics', path: '/reports', icon: 'BarChart3', tone: 'blue' },
  { label: 'Settings', detail: 'platform, commission & system config', path: '/settings', icon: 'Settings', tone: 'slate' },
  { label: 'Tiffin Providers', detail: 'tiffin providers, menu & capacity', path: '/tiffin', icon: 'ChefHat', tone: 'orange' },
  { label: 'Subscription Plans', detail: 'subscription plans, pricing & status', path: '/subscriptions', icon: 'CalendarCheck', tone: 'rose' },
];

export const quickActions = [
  { label: 'Approve vendors', path: '/vendors', icon: 'BadgeCheck', count: 5 },
  { label: 'Assign delivery', path: '/orders', icon: 'Truck', count: 4 },
  { label: 'Review refunds', path: '/payments', icon: 'RotateCcw', count: 3 },
  { label: 'Open tickets', path: '/support', icon: 'Ticket', count: 3 },
];
