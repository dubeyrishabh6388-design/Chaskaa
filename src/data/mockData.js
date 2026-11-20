export const inr = (n) => '₹' + Number(n).toLocaleString('en-IN');

export const dashboardStats = [
  { key: 'orders', label: 'Total Orders', value: '3,428', change: '+12.4%', tone: 'up', note: 'vs. last 7 days', icon: 'ShoppingBag' },
  { key: 'subscriptions', label: 'Tiffin Subscriptions', value: '1,256', change: '+8.2%', tone: 'up', note: 'vs. last 7 days', icon: 'CalendarCheck' },
  { key: 'users', label: 'Total Users', value: '24,890', change: '+6.1%', tone: 'up', note: 'vs. last 7 days', icon: 'Users' },
  { key: 'revenue', label: 'Total Revenue', value: '₹12,48,320', change: '+15.7%', tone: 'up', note: 'vs. last 7 days', icon: 'Wallet' },
];

export const ordersByService = [
  { date: 'Oct 20', delivery: 182, tiffin: 96 },
  { date: 'Oct 23', delivery: 210, tiffin: 118 },
  { date: 'Oct 26', delivery: 168, tiffin: 132 },
  { date: 'Oct 29', delivery: 246, tiffin: 142 },
  { date: 'Nov 01', delivery: 225, tiffin: 165 },
  { date: 'Nov 04', delivery: 278, tiffin: 158 },
  { date: 'Nov 07', delivery: 252, tiffin: 188 },
  { date: 'Nov 10', delivery: 296, tiffin: 204 },
  { date: 'Nov 13', delivery: 268, tiffin: 196 },
  { date: 'Nov 16', delivery: 312, tiffin: 225 },
];

export const orderStates = [
  { label: 'Delivered', count: 2841, color: 'bg-emerald-500', pct: 83 },
  { label: 'Out for delivery', count: 286, color: 'bg-amber-400', pct: 8 },
  { label: 'Preparing', count: 205, color: 'bg-sky-400', pct: 6 },
  { label: 'Confirmed', count: 96, color: 'bg-violet-400', pct: 3 },
];

export const platformPerformance = [
  { label: 'App Visits', value: '2.4L', change: '+18.2%' },
  { label: 'Orders Placed', value: '18.9K', change: '+10.6%' },
  { label: 'Plans Subscribed', value: '5.7K', change: '+8.3%' },
  { label: 'Avg. Rating', value: '4.6', change: '+0.3' },
];

export const topLocations = [
  { city: 'Lucknow', revenue: '₹24,82,900', growth: '+18.9%', orders: 8421 },
  { city: 'Noida', revenue: '₹22,16,340', growth: '+12.7%', orders: 7315 },
  { city: 'Ghaziabad', revenue: '₹17,88,320', growth: '+11.4%', orders: 6120 },
];

export const initialAlerts = [
  { id: 1, type: 'verification', title: '5 vendor verifications pending', detail: 'Documents uploaded, awaiting review', time: '12 min ago' },
  { id: 2, type: 'payment', title: '24 payment settlements due', detail: '₹3,42,680 across 12 partners', time: '1 hr ago' },
  { id: 3, type: 'support', title: '3 support tickets require attention', detail: '2 marked SEV-2 · SLA at risk', time: '2 hrs ago' },
];

export const vendors = [
  { id: 'VEN-1042', name: 'Tiffin House Lucknow', type: 'Tiffin Kitchen', owner: 'Ravi Prakash', city: 'Lucknow', area: 'Gomti Nagar', rating: 4.8, orders: 1842, gst: '09AABCT1234K1Z5', fssai: '12719004000231', status: 'Approved', commission: '12%', joined: '12 Jan 2026' },
  { id: 'VEN-1038', name: 'Spice Route Restaurant', type: 'Restaurant', owner: 'Neha Sharma', city: 'Lucknow', area: 'Hazratganj', rating: 4.6, orders: 1264, gst: '09AAEFS8871P1Z2', fssai: '12719004000998', status: 'Approved', commission: '18%', joined: '04 Feb 2026' },
  { id: 'VEN-1051', name: 'Corporate Meals Co.', type: 'Cloud Kitchen', owner: 'Amit Verma', city: 'Noida', area: 'Sector 62', rating: 4.7, orders: 986, gst: '09AACCM7782L1Z9', fssai: '12719004001123', status: 'Pending', commission: '15%', joined: '18 Oct 2026' },
  { id: 'VEN-1056', name: 'Hostel Dal Makhani', type: 'Tiffin Kitchen', owner: 'Sandeep Yadav', city: 'Lucknow', area: 'Telibagh', rating: 4.3, orders: 742, gst: '—', fssai: '12719004001881', status: 'Pending', commission: '10%', joined: '22 Oct 2026' },
  { id: 'VEN-1029', name: 'Biryani Blues', type: 'Restaurant', owner: 'Faiz Ahmed', city: 'Ghaziabad', area: 'Indirapuram', rating: 4.5, orders: 1589, gst: '09AABFB1122M1Z8', fssai: '12719004000654', status: 'Approved', commission: '20%', joined: '27 Nov 2025' },
  { id: 'VEN-1047', name: 'Green Bowl Kitchen', type: 'Cloud Kitchen', owner: 'Priya Singh', city: 'Noida', area: 'Sector 18', rating: 4.2, orders: 431, gst: '09AAECG9901Q1Z4', fssai: '12719004001776', status: 'Suspended', commission: '15%', joined: '09 Aug 2026' },
  { id: 'VEN-1060', name: 'Ghar Ka Khana', type: 'Tiffin Kitchen', owner: 'Sunita Mishra', city: 'Lucknow', area: 'Aliganj', rating: 4.9, orders: 2104, gst: '09AADGH2210R1Z3', fssai: '12719004001902', status: 'Pending', commission: '11%', joined: '02 Nov 2026' },
  { id: 'VEN-1033', name: 'Chole Kulche Junction', type: 'Restaurant', owner: 'Manpreet Singh', city: 'Ghaziabad', area: 'Vaishali', rating: 4.1, orders: 638, gst: '09AACHK6654T1Z7', fssai: '12719004000812', status: 'Approved', commission: '18%', joined: '15 Dec 2025' },
];

export const riders = [
  { id: 'RID-221', name: 'Arjun Yadav', phone: '+91 94150 22110', zone: 'Gomti Nagar', vehicle: 'Bike · UP32 CK 2211', online: true, kyc: 'Verified', orders: 38, rating: 4.9, earnings: '₹18,420', cash: '₹1,240' },
  { id: 'RID-218', name: 'Rohit Kumar', phone: '+91 98380 44128', zone: 'Hazratganj', vehicle: 'Scooter · UP32 AB 9081', online: true, kyc: 'Verified', orders: 31, rating: 4.7, earnings: '₹15,880', cash: '₹860' },
  { id: 'RID-232', name: 'Imran Khan', phone: '+91 91240 77812', zone: 'Telibagh', vehicle: 'Bike · UP32 LM 4477', online: false, kyc: 'Pending', orders: 0, rating: 0, earnings: '₹0', cash: '₹0' },
  { id: 'RID-209', name: 'Vikram Singh', phone: '+91 96120 33891', zone: 'Aliganj', vehicle: 'Bike · UP32 QR 1190', online: true, kyc: 'Verified', orders: 44, rating: 4.8, earnings: '₹21,060', cash: '₹2,180' },
  { id: 'RID-241', name: 'Deepak Pandey', phone: '+91 88400 66542', zone: 'Indirapuram', vehicle: 'Scooter · UP14 CD 3382', online: false, kyc: 'Rejected', orders: 0, rating: 0, earnings: '₹0', cash: '₹0' },
  { id: 'RID-215', name: 'Sahil Ali', phone: '+91 90260 11983', zone: 'Sector 62', vehicle: 'Bike · UP16 TR 7721', online: true, kyc: 'Verified', orders: 27, rating: 4.6, earnings: '₹12,940', cash: '₹420' },
];

export const orders = [
  { id: 'CHS42888', customer: 'Akash Rai', phone: '+91 98730 11223', vendor: 'Tiffin House Lucknow', type: 'Tiffin', items: 'Student Plus · Lunch × 2', amount: '₹1,760', status: 'Delivered', payment: 'Paid', rider: 'Arjun Yadav', zone: 'Gomti Nagar', time: '11:42 AM', age: '12 min' },
  { id: 'CHS42887', customer: 'Priya Verma', phone: '+91 91220 44318', vendor: 'Spice Route Restaurant', type: 'Food', items: 'Paneer Butter Masala, Naan × 3', amount: '₹684', status: 'Preparing', payment: 'Paid', rider: '—', zone: 'Hazratganj', time: '11:38 AM', age: '16 min' },
  { id: 'CHS42886', customer: 'Rahul Gupta', phone: '+91 99560 77120', vendor: 'Biryani Blues', type: 'Food', items: 'Chicken Dum Biryani × 2', amount: '₹598', status: 'Out for delivery', payment: 'Paid', rider: 'Rohit Kumar', zone: 'Indirapuram', time: '11:21 AM', age: '33 min' },
  { id: 'CHS42885', customer: 'Meera Iyer', phone: '+91 78380 22091', vendor: 'Corporate Meals Co.', type: 'Corporate', items: 'Corporate Premium · Lunch × 20', amount: '₹6,500', status: 'Confirmed', payment: 'Paid', rider: 'Sahil Ali', zone: 'Sector 62', time: '11:05 AM', age: '49 min' },
  { id: 'CHS42884', customer: 'Nikhil Srivastava', phone: '+91 94110 88234', vendor: 'Ghar Ka Khana', type: 'Tiffin', items: 'Monthly Lunch · 26 meals', amount: '₹2,300', status: 'Delivered', payment: 'Paid', rider: 'Vikram Singh', zone: 'Aliganj', time: '10:48 AM', age: '1 hr 6 min' },
  { id: 'CHS42883', customer: 'Sneha Patel', phone: '+91 96930 11882', vendor: 'Chole Kulche Junction', type: 'Food', items: 'Chole Kulche, Lassi × 2', amount: '₹320', status: 'Cancelled', payment: 'Refunded', rider: '—', zone: 'Vaishali', time: '10:31 AM', age: '1 hr 23 min' },
  { id: 'CHS42882', customer: 'Karan Malhotra', phone: '+91 98100 55673', vendor: 'Green Bowl Kitchen', type: 'Food', items: 'Veg Bowl, Salad, Juice', amount: '₹410', status: 'Delivered', payment: 'Paid', rider: 'Rohit Kumar', zone: 'Sector 18', time: '10:12 AM', age: '1 hr 42 min' },
];

export const subscriptions = [
  { id: 'SUB-8821', customer: 'Akash Rai', plan: 'Student Plus', vendor: 'Tiffin House Lucknow', segment: 'Student', meals: 'Lunch + Dinner', duration: 'Monthly · 52 meals', start: '01 Nov 2026', end: '30 Nov 2026', amount: '₹4,160', status: 'Active', skipped: 2, delivery: 'Gomti Nagar' },
  { id: 'SUB-8817', customer: 'Nikhil Srivastava', plan: 'Monthly Lunch', vendor: 'Ghar Ka Khana', segment: 'Student', meals: 'Lunch', duration: 'Monthly · 26 meals', start: '03 Nov 2026', end: '02 Dec 2026', amount: '₹2,300', status: 'Active', skipped: 0, delivery: 'Aliganj' },
  { id: 'SUB-8814', customer: 'Meera Iyer', plan: 'Corporate Premium', vendor: 'Corporate Meals Co.', segment: 'Corporate', meals: 'Lunch', duration: 'Monthly · 22 meals', start: '01 Nov 2026', end: '30 Nov 2026', amount: '₹6,500', status: 'Active', skipped: 1, delivery: 'Sector 62' },
  { id: 'SUB-8809', customer: 'Rahul Gupta', plan: 'Student Basic', vendor: 'Hostel Dal Makhani', segment: 'Student', meals: 'Lunch', duration: 'Weekly · 6 meals', start: '10 Nov 2026', end: '16 Nov 2026', amount: '₹480', status: 'Paused', skipped: 3, delivery: 'Telibagh' },
  { id: 'SUB-8802', customer: 'Sneha Patel', plan: 'Corporate Standard', vendor: 'Green Bowl Kitchen', segment: 'Corporate', meals: 'Lunch', duration: 'Monthly · 22 meals', start: '01 Oct 2026', end: '31 Oct 2026', amount: '₹3,190', status: 'Completed', skipped: 0, delivery: 'Sector 18' },
  { id: 'SUB-8798', customer: 'Karan Malhotra', plan: 'Student Plus', vendor: 'Tiffin House Lucknow', segment: 'Student', meals: 'Lunch + Dinner', duration: 'Monthly · 52 meals', start: '05 Sep 2026', end: '04 Oct 2026', amount: '₹4,160', status: 'Expired', skipped: 4, delivery: 'Gomti Nagar' },
];

export const tiffinPlans = [
  { id: 'PLAN-301', name: 'Student Basic', vendor: 'Tiffin House Lucknow', segment: 'Student', meal: 'Lunch', price: '₹80 / meal', meals: 26, capacity: 180, booked: 142, cutoff: '09:00 PM', status: 'Live' },
  { id: 'PLAN-302', name: 'Student Plus', vendor: 'Tiffin House Lucknow', segment: 'Student', meal: 'Lunch + Dinner', price: '₹80 / meal', meals: 52, capacity: 120, booked: 118, cutoff: '09:00 PM', status: 'Live' },
  { id: 'PLAN-303', name: 'Corporate Standard', vendor: 'Corporate Meals Co.', segment: 'Corporate', meal: 'Lunch', price: '₹130 / meal', meals: 22, capacity: 250, booked: 188, cutoff: '08:30 PM', status: 'Live' },
  { id: 'PLAN-304', name: 'Corporate Premium', vendor: 'Corporate Meals Co.', segment: 'Corporate', meal: 'Lunch', price: '₹180 / meal', meals: 22, capacity: 100, booked: 92, cutoff: '08:30 PM', status: 'Live' },
  { id: 'PLAN-305', name: 'Weekly Student', vendor: 'Hostel Dal Makhani', segment: 'Student', meal: 'Lunch', price: '₹80 / meal', meals: 6, capacity: 90, booked: 34, cutoff: '10:00 PM', status: 'Review' },
];

export const kitchenManifest = [
  { vendor: 'Tiffin House Lucknow', slot: 'Lunch · 12:00–12:45', veg: 86, nonveg: 54, total: 140, rider: 'Arjun Yadav', status: 'Preparing' },
  { vendor: 'Tiffin House Lucknow', slot: 'Dinner · 07:00–07:45', veg: 62, nonveg: 48, total: 110, rider: 'Vikram Singh', status: 'Preparing' },
  { vendor: 'Corporate Meals Co.', slot: 'Office Lunch · 12:15', veg: 72, nonveg: 116, total: 188, rider: 'Sahil Ali', status: 'Ready' },
  { vendor: 'Ghar Ka Khana', slot: 'Lunch · 12:30', veg: 74, nonveg: 22, total: 96, rider: 'Unassigned', status: 'Pending' },
];

export const users = [
  { id: 'USR-9001', name: 'Akash Rai', phone: '+91 98730 11223', email: 'akash.rai@example.com', role: 'Student', city: 'Lucknow', orders: 42, wallet: '₹1,240', status: 'Active', joined: '02 Feb 2026' },
  { id: 'USR-9002', name: 'Meera Iyer', phone: '+91 78380 22091', email: 'meera.iyer@acmecorp.in', role: 'Corporate', city: 'Noida', orders: 66, wallet: '₹380', status: 'Active', joined: '11 Mar 2026' },
  { id: 'USR-9003', name: 'Nikhil Srivastava', phone: '+91 94110 88234', email: 'nikhil.s@example.com', role: 'Student', city: 'Lucknow', orders: 28, wallet: '₹0', status: 'Active', joined: '19 Apr 2026' },
  { id: 'USR-9004', name: 'Priya Verma', phone: '+91 91220 44318', email: 'priya.verma@example.com', role: 'Customer', city: 'Lucknow', orders: 14, wallet: '₹620', status: 'Active', joined: '06 Jun 2026' },
  { id: 'USR-9005', name: 'Rahul Gupta', phone: '+91 99560 77120', email: 'rahul.gupta@example.com', role: 'Customer', city: 'Ghaziabad', orders: 21, wallet: '₹90', status: 'Blocked', joined: '24 Jul 2026' },
  { id: 'USR-9006', name: 'Sneha Patel', phone: '+91 96930 11882', email: 'sneha.patel@zenith.co', role: 'Corporate Manager', city: 'Noida', orders: 58, wallet: '₹2,100', status: 'Active', joined: '01 Sep 2026' },
];

export const companies = [
  { id: 'ORG-118', name: 'Acme Corp Pvt Ltd', gst: '09AAECA1234N1Z8', site: 'Noida · Sector 62', seats: 120, active: 98, billing: 'Company sponsored', invoice: '₹2,86,400', status: 'Active' },
  { id: 'ORG-121', name: 'Zenith Technologies', gst: '09AAECZ9981P1Z2', site: 'Noida · Sector 18', seats: 80, active: 64, billing: 'Co-pay 70/30', invoice: '₹1,42,880', status: 'Active' },
  { id: 'ORG-126', name: 'Riverwood Infosys', gst: '09AAECR7712Q1Z5', site: 'Lucknow · Gomti Nagar', seats: 50, active: 0, billing: 'Employee paid', invoice: '₹0', status: 'Onboarding' },
];

export const payments = [
  { id: 'PAY-77021', ref: 'CHS42888', customer: 'Akash Rai', method: 'UPI · PhonePe', amount: '₹1,760', status: 'Captured', gateway: 'Razorpay', time: '11:40 AM' },
  { id: 'PAY-77020', ref: 'CHS42887', customer: 'Priya Verma', method: 'Card · HDFC', amount: '₹684', status: 'Captured', gateway: 'Razorpay', time: '11:36 AM' },
  { id: 'PAY-77019', ref: 'SUB-8814', customer: 'Meera Iyer', method: 'Net banking', amount: '₹6,500', status: 'Captured', gateway: 'Razorpay', time: '11:02 AM' },
  { id: 'PAY-77018', ref: 'CHS42883', customer: 'Sneha Patel', method: 'UPI · Paytm', amount: '₹320', status: 'Refunded', gateway: 'Razorpay', time: '10:29 AM' },
  { id: 'PAY-77017', ref: 'CHS42882', customer: 'Karan Malhotra', method: 'Wallet', amount: '₹410', status: 'Captured', gateway: 'Internal', time: '10:10 AM' },
];

export const refunds = [
  { id: 'REF-3301', order: 'CHS42883', customer: 'Sneha Patel', amount: '₹320', reason: 'Vendor cancelled', status: 'Completed', initiated: '10:35 AM' },
  { id: 'REF-3302', order: 'SUB-8809', customer: 'Rahul Gupta', amount: '₹160', reason: 'Eligible pause credit', status: 'Processing', initiated: '09:52 AM' },
  { id: 'REF-3303', order: 'CHS42871', customer: 'Vivek Sharma', amount: '₹245', reason: 'Quality complaint', status: 'Pending review', initiated: 'Yesterday' },
];

export const settlements = [
  { id: 'SET-9041', vendor: 'Tiffin House Lucknow', period: '01–07 Nov 2026', gross: '₹2,84,600', commission: '₹34,152', net: '₹2,50,448', status: 'Paid', utr: 'UTI924011883' },
  { id: 'SET-9042', vendor: 'Spice Route Restaurant', period: '01–07 Nov 2026', gross: '₹1,92,400', commission: '₹34,632', net: '₹1,57,768', status: 'Processing', utr: '—' },
  { id: 'SET-9043', vendor: 'Biryani Blues', period: '01–07 Nov 2026', gross: '₹2,14,900', commission: '₹42,980', net: '₹1,71,920', status: 'Processing', utr: '—' },
  { id: 'SET-9044', vendor: 'Corporate Meals Co.', period: '01–07 Nov 2026', gross: '₹3,10,200', commission: '₹46,530', net: '₹2,63,670', status: 'Pending', utr: '—' },
];

export const coupons = [
  { code: 'FIRST50', type: 'Flat ₹50 off', value: '₹50', min: '₹199', usage: '1,284 / 5,000', applicable: 'Food · All users', valid: '01 Nov – 31 Dec 2026', status: 'Active' },
  { code: 'TIFFIN10', type: '10% off', value: '10%', min: '₹500', usage: '642 / 2,000', applicable: 'Tiffin · Students', valid: '01 Nov – 30 Nov 2026', status: 'Active' },
  { code: 'CORP100', type: 'Flat ₹100 off', value: '₹100', min: '₹1,500', usage: '86 / 500', applicable: 'Corporate · B2B', valid: '15 Nov – 15 Jan 2027', status: 'Active' },
  { code: 'MONSOON20', type: '20% off', value: '20%', min: '₹299', usage: '2,410 / 2,500', applicable: 'Food · All users', valid: '01 Jul – 30 Sep 2026', status: 'Expired' },
];

export const banners = [
  { id: 'BAN-11', title: 'Har bite Mein Chaskaa', position: 'Home · Top', zone: 'Lucknow', clicks: 18_420, status: 'Live' },
  { id: 'BAN-12', title: 'Student Tiffin — ₹80/se meal', position: 'Tiffin · Hero', zone: 'All zones', clicks: 9_860, status: 'Live' },
  { id: 'BAN-13', title: 'Corporate meals, zero hassle', position: 'Home · Mid', zone: 'Noida', clicks: 4_210, status: 'Scheduled' },
];

export const tickets = [
  { id: 'TKT-5512', subject: 'Tiffin not delivered — lunch slot', customer: 'Rahul Gupta', type: 'Missing delivery', priority: 'High', status: 'Open', assigned: 'Riya (Ops)', time: '24 min ago' },
  { id: 'TKT-5511', subject: 'Food was cold and packed poorly', customer: 'Karan Malhotra', type: 'Quality', priority: 'High', status: 'Open', assigned: 'Unassigned', time: '1 hr ago' },
  { id: 'TKT-5510', subject: 'Double charge on UPI payment', customer: 'Vivek Sharma', type: 'Payment', priority: 'Critical', status: 'In progress', assigned: 'Finance desk', time: '2 hrs ago' },
  { id: 'TKT-5509', subject: 'Rider asked for extra payment', customer: 'Sneha Patel', type: 'Rider conduct', priority: 'Medium', status: 'In progress', assigned: 'Riya (Ops)', time: '3 hrs ago' },
  { id: 'TKT-5508', subject: 'Pause not reflected in calendar', customer: 'Nikhil Srivastava', type: 'Subscription', priority: 'Low', status: 'Resolved', assigned: 'Support bot', time: 'Yesterday' },
];

export const staffRoles = [
  { role: 'Super Admin', members: 2, permissions: 'Full access · MFA mandatory', scope: 'All modules', status: 'System' },
  { role: 'Ops Manager', members: 4, permissions: 'Dispatch, orders, tiffin board, support', scope: 'All cities', status: 'Active' },
  { role: 'Finance', members: 3, permissions: 'Payments, refunds, settlements, GST reports', scope: 'All cities', status: 'Active' },
  { role: 'Support Agent', members: 8, permissions: 'Tickets, refunds up to ₹500', scope: 'Assigned queues', status: 'Active' },
  { role: 'Vendor Reviewer', members: 3, permissions: 'KYC verification, menu moderation', scope: 'Assigned vendors', status: 'Active' },
];

export const auditLogs = [
  { id: 1, actor: 'Akash Rai', action: 'Vendor approved', entity: 'Ghar Ka Khana', time: 'Today, 11:12 AM', ip: '103.21.44.18' },
  { id: 2, actor: 'Finance Desk', action: 'Refund of ₹320 completed', entity: 'CHS42883', time: 'Today, 10:35 AM', ip: '103.21.44.22' },
  { id: 3, actor: 'Riya (Ops)', action: 'Rider reassigned', entity: 'CHS42886 → Rohit Kumar', time: 'Today, 10:18 AM', ip: '49.36.112.90' },
  { id: 4, actor: 'System', action: 'Meal instances generated', entity: '392 meals for 17 Nov', time: 'Today, 09:00 PM', ip: 'internal' },
];

export const revenueSeries = [
  { month: 'Jun', gmv: 48, revenue: 9 }, { month: 'Jul', gmv: 56, revenue: 11 },
  { month: 'Aug', gmv: 62, revenue: 13 }, { month: 'Sep', gmv: 71, revenue: 15 },
  { month: 'Oct', gmv: 84, revenue: 18 }, { month: 'Nov', gmv: 96, revenue: 22 },
];

export const serviceMix = [
  { name: 'Food delivery', value: 56, color: '#ec4b3f' },
  { name: 'Student tiffin', value: 28, color: '#f6b73c' },
  { name: 'Corporate tiffin', value: 16, color: '#7e2640' },
];

export const customerOrders = [
  { id: 'CHS42890', type: 'Food Delivery', vendor: 'Bhojan Homes', items: 'Paneer Butter Masala, Veg Thali', total: 286, status: 'Out for delivery', placed: '14 Nov 2026, 10:24 AM', eta: '25–30 min', rider: 'Rohit Kumar' },
  { id: 'CHS42871', type: 'Tiffin', vendor: 'Bhojan Homes', items: 'Student Monthly Plan · 30 Days', total: 1999, status: 'Delivered', placed: '12 Nov 2026, 08:10 PM', eta: 'Delivered 14 Nov, 01:24 PM', rider: '—' },
  { id: 'CHS42855', type: 'Food Delivery', vendor: 'Rasoi Ghar', items: 'Dal Tadka, Jeera Rice, Roti', total: 520, status: 'Delivered', placed: '10 Nov 2026, 12:06 PM', eta: 'Delivered 10 Nov, 12:48 PM', rider: '—' },
  { id: 'CHS42812', type: 'Food Delivery', vendor: 'Tiffin Express', items: 'Veg Thali, Salad', total: 240, status: 'Cancelled', placed: '06 Nov 2026, 07:42 PM', eta: 'Cancelled', rider: '—' },
];

export const mySubscriptions = [
  { id: 'SUB-7712', plan: 'Student Monthly Plan', vendor: 'Bhojan Homes', duration: '30 Days', meals: 'Lunch & Dinner', price: 1999, start: '18 Nov 2026', end: '17 Dec 2026', status: 'Active', paused: 0 },
  { id: 'SUB-7698', plan: 'Corporate Monthly Plan', vendor: 'Corporate Meals Co.', duration: '30 Days (Mon–Fri)', meals: 'Lunch', price: 2699, start: '01 Nov 2026', end: '30 Nov 2026', status: 'Active', paused: 1 },
];

export const zonePerformance = [
  { zone: 'Gomti Nagar', orders: 1824, onTime: 96, revenue: '₹8,42,100' },
  { zone: 'Hazratganj', orders: 1240, onTime: 93, revenue: '₹5,96,340' },
  { zone: 'Indirapuram', orders: 986, onTime: 89, revenue: '₹4,12,880' },
  { zone: 'Sector 62', orders: 842, onTime: 91, revenue: '₹3,88,220' },
  { zone: 'Aliganj', orders: 612, onTime: 94, revenue: '₹2,44,180' },
];
