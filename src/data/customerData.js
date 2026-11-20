export const customerBanners = [
  { id: 1, title: '50% OFF up to ₹100', sub: 'On your first food order · CHASKAA30', tone: 'red' },
  { id: 2, title: 'Tiffin Service', sub: 'Healthy • Home Style • On Time', tone: 'amber' },
  { id: 3, title: 'Student Tiffin ₹89/day', sub: 'Daily, Weekly & Monthly plans', tone: 'wine' },
];

export const categories = [
  { name: 'Thali', icon: 'Utensils' },
  { name: 'North Indian', icon: 'Soup' },
  { name: 'Chinese', icon: 'Noodles' },
  { name: 'Fast Food', icon: 'Sandwich' },
  { name: 'Beverages', icon: 'Coffee' },
  { name: 'Desserts', icon: 'CakeSlice' },
  { name: 'Tiffin', icon: 'LunchBox' },
];

export const restaurants = [
  {
    id: 'bhojan-homes', name: 'Bhojan Homes', tags: 'Home Style • Tiffin • Indian', rating: 4.6, ratings: '2.4K', eta: '25–30 min', distance: '2.4 km', offer: '20% OFF | Free Delivery', price: '₹150 for two',
    logo: 'BH', color: 'bg-chaskaa-600',
    menu: [
      { id: 'm1', name: 'Paneer Butter Masala', desc: 'Creamy tomato gravy with soft paneer cubes', price: 199, veg: true, category: 'Main Course' },
      { id: 'm2', name: 'Veg Thali', desc: 'Dal, sabzi, jeera rice, 2 roti, salad', price: 149, veg: true, category: 'Thali' },
      { id: 'm3', name: 'Dal Tadka', desc: 'Yellow dal tempered with ghee and spices', price: 129, veg: true, category: 'Main Course' },
      { id: 'm4', name: 'Jeera Rice', desc: 'Fragrant basmati rice with cumin', price: 99, veg: true, category: 'Rice' },
      { id: 'm5', name: 'Butter Naan', desc: 'Fresh from the tandoor', price: 39, veg: true, category: 'Breads' },
      { id: 'm6', name: 'Gulab Jamun', desc: 'Warm milk dumplings in syrup', price: 69, veg: true, category: 'Desserts' },
    ],
  },
  {
    id: 'rasoi-ghar', name: 'Rasoi Ghar', tags: 'North Indian • Thali', rating: 4.4, ratings: '1.8K', eta: '30–35 min', distance: '3.1 km', offer: '₹100 OFF above ₹299', price: '₹200 for two',
    logo: 'RG', color: 'bg-amber-600',
    menu: [
      { id: 'r1', name: 'Rajdhani Thali', desc: 'Full thali with unlimited roti', price: 249, veg: true, category: 'Thali' },
      { id: 'r2', name: 'Chole Bhature', desc: 'Spicy chickpeas with fluffy bhature', price: 169, veg: true, category: 'Main Course' },
      { id: 'r3', name: 'Aloo Paratha', desc: 'With butter and curd', price: 119, veg: true, category: 'Breads' },
    ],
  },
  {
    id: 'tiffin-express', name: 'Tiffin Express', tags: 'Daily Meals • Healthy • Tiffin', rating: 4.7, ratings: '980+', eta: '20–25 min', distance: '1.8 km', offer: 'Free Delivery', price: '₹120 for two',
    logo: 'TE', color: 'bg-emerald-600',
    menu: [
      { id: 't1', name: 'Veg Thali', desc: 'Balanced daily meal with salad', price: 139, veg: true, category: 'Thali' },
      { id: 't2', name: 'Paneer Tikka Bowl', desc: 'With rice and mint chutney', price: 189, veg: true, category: 'Bowl' },
      { id: 't3', name: 'Mixed Veg Bowl', desc: 'Seasonal vegetables with quinoa', price: 159, veg: true, category: 'Bowl' },
    ],
  },
  {
    id: 'foodies-hub', name: 'Foodies Hub', tags: 'Fast Food • Snacks • Beverages', rating: 4.2, ratings: '3.1K', eta: '30–40 min', distance: '4.0 km', offer: 'Buy 1 Get 1', price: '₹250 for two',
    logo: 'FH', color: 'bg-violet-600',
    menu: [
      { id: 'f1', name: 'Veg Burger', desc: 'Crispy patty with cheese', price: 119, veg: true, category: 'Fast Food' },
      { id: 'f2', name: 'French Fries', desc: 'Salted and crispy', price: 89, veg: true, category: 'Fast Food' },
      { id: 'f3', name: 'Masala Lemonade', desc: 'Refreshing with a spicy kick', price: 59, veg: true, category: 'Beverages' },
    ],
  },
];

export const tiffinPlansCustomer = [
  {
    id: 'student-daily', segment: 'Student', name: 'Daily Plan', badge: 'BEST FOR TRYING', price: 89, unit: '/ day', duration: '1 Day', meals: 'Lunch or Dinner',
    highlights: ['Fresh & Hygienic', 'Home Style Meal', 'On-Time Delivery'],
    menu: ['Dal Tadka + Paneer Curry', 'Jeera Rice + Veg Pulao', 'Mix Veg + Salad', 'Roti (2)'],
  },
  {
    id: 'student-weekly', segment: 'Student', name: 'Weekly Plan', badge: 'POPULAR', price: 499, unit: '/ week', duration: '7 Days', meals: 'Lunch & Dinner',
    highlights: ['Balanced & Nutritious', 'Weekly Menu Variety', 'Pause Anytime'],
    menu: ['Dal Tadka + Paneer Curry', 'Jeera Rice + Veg Pulao', 'Mix Veg + Salad', 'Roti (2)'],
  },
  {
    id: 'student-monthly', segment: 'Student', name: 'Monthly Plan', badge: 'SAVE 15%', price: 1999, unit: '/ month', duration: '30 Days', meals: 'Lunch & Dinner',
    highlights: ['Healthy, Tasty & Pocket Friendly', 'Affordable & Nutritious Meals', 'Pause / Resume Anytime'],
    menu: ['Dal Tadka + Paneer Curry', 'Jeera Rice + Veg Pulao', 'Mix Veg + Salad', 'Roti (2)'],
  },
  {
    id: 'corp-daily', segment: 'Corporate', name: 'Daily Plan', badge: 'TEAMS', price: 149, unit: '/ person / day', duration: 'Mon–Fri', meals: 'Lunch',
    highlights: ['Bulk & Customizable', 'Hygienic & On-Time', 'Office Delivery'],
    menu: ['Paneer Masala + Mix Veg', 'Jeera Rice', 'Salad + Roti (2)'],
  },
  {
    id: 'corp-weekly', segment: 'Corporate', name: 'Weekly Plan', badge: 'FLEXIBLE', price: 699, unit: '/ person / week', duration: '5 Days', meals: 'Lunch',
    highlights: ['Dedicated Account Manager', 'Flexible Plan Changes', 'Food Safety Quality'],
    menu: ['Paneer Masala + Mix Veg', 'Jeera Rice', 'Salad + Roti (2)'],
  },
  {
    id: 'corp-monthly', segment: 'Corporate', name: 'Monthly Plan', badge: 'BEST VALUE', price: 2699, unit: '/ person / month', duration: '30 Days (Mon–Fri)', meals: 'Lunch',
    highlights: ['Reliable Bulk Meals', 'GST Billing', 'Dedicated Support'],
    menu: ['Paneer Masala + Mix Veg', 'Jeera Rice', 'Salad + Roti (2)'],
  },
];

export const weeklyMenu = [
  { day: 'Mon', lunch: 'Dal Tadka, Paneer Curry, Jeera Rice', dinner: 'Mix Veg, Roti, Salad' },
  { day: 'Tue', lunch: 'Rajma Chawal, Salad', dinner: 'Paneer Butter Masala, Naan' },
  { day: 'Wed', lunch: 'Chole, Pulao, Roti', dinner: 'Dal Makhani, Jeera Rice' },
  { day: 'Thu', lunch: 'Paneer Tikka Bowl', dinner: 'Veg Curry, Rice, Roti' },
  { day: 'Fri', lunch: 'Dal Tadka, Mix Veg, Roti', dinner: 'Pulao, Salad, Raita' },
  { day: 'Sat', lunch: 'Special Thali', dinner: 'Light Dinner Bowl' },
  { day: 'Sun', lunch: 'Holiday / Light Meal', dinner: 'Light Meal' },
];

export const paymentMethods = [
  { id: 'upi', name: 'UPI', sub: 'GPay, PhonePe, Paytm, etc.', icon: 'Smartphone' },
  { id: 'card', name: 'Debit / Credit card', sub: 'Visa, Mastercard, RuPay', icon: 'CreditCard' },
  { id: 'wallet', name: 'Chaskaa Wallet', sub: 'Balance ₹350', icon: 'Wallet' },
  { id: 'cod', name: 'Cash on Delivery', sub: 'Pay when your order arrives', icon: 'Banknote' },
];
