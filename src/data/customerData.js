export const customerBanners = [
  { id: 1, title: '50% OFF up to ₹100', sub: 'On your first food order · CHASKAA30', tone: 'red' },
  { id: 2, title: 'Tiffin Service', sub: 'Healthy • Home Style • On Time', tone: 'amber' },
  { id: 3, title: 'Student Tiffin ₹89/day', sub: 'Daily, Weekly & Monthly plans', tone: 'wine' },
  { id: 4, title: 'Free Gulab Jamun', sub: 'On every order above ₹299', tone: 'amber' },
  { id: 5, title: 'Biryani Fever ₹149', sub: 'Hyderabadi dum · Limited time', tone: 'red' },
];

export const categories = [
  { name: 'Thali', icon: 'Utensils' },
  { name: 'North Indian', icon: 'Soup' },
  { name: 'Chinese', icon: 'Noodles' },
  { name: 'Biryani', icon: 'Utensils' },
  { name: 'Fast Food', icon: 'Sandwich' },
  { name: 'Pizza', icon: 'Pizza' },
  { name: 'South Indian', icon: 'Croissant' },
  { name: 'Rolls', icon: 'Sandwich' },
  { name: 'Beverages', icon: 'Coffee' },
  { name: 'Desserts', icon: 'CakeSlice' },
  { name: 'Ice Cream', icon: 'IceCreamBowl' },
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
  {
    id: 'spice-route', name: 'Spice Route', tags: 'North Indian • Biryani • Curries', rating: 4.5, ratings: '1.2K', eta: '28–33 min', distance: '2.9 km', offer: 'Flat ₹75 OFF', price: '₹220 for two',
    logo: 'SR', color: 'bg-rose-600',
    menu: [
      { id: 's1', name: 'Paneer Butter Masala', desc: 'Rich cashew tomato gravy, tandoor-finished', price: 219, veg: true, category: 'Main Course' },
      { id: 's2', name: 'Veg Biryani', desc: 'Long-grain basmati with vegetables & raita', price: 189, veg: true, category: 'Biryani' },
      { id: 's3', name: 'Rajma Chawal', desc: 'Slow-cooked kidney beans with steamed rice', price: 159, veg: true, category: 'Main Course' },
      { id: 's4', name: 'Butter Naan', desc: 'Brushed with butter, straight from the tandoor', price: 39, veg: true, category: 'Breads' },
    ],
  },
  {
    id: 'dosa-corner', name: 'Dosa Corner', tags: 'South Indian • Breakfast • Snacks', rating: 4.7, ratings: '2.1K', eta: '20–25 min', distance: '1.6 km', offer: '20% OFF | Free Chutney', price: '₹120 for two',
    logo: 'DC', color: 'bg-amber-700',
    menu: [
      { id: 'd1', name: 'Masala Dosa', desc: 'Crisp golden dosa with spiced potato filling', price: 129, veg: true, category: 'South Indian' },
      { id: 'd2', name: 'Idli Sambar', desc: 'Steamed idli with sambar & coconut chutney', price: 89, veg: true, category: 'Breakfast' },
      { id: 'd3', name: 'Paneer Kathi Roll', desc: 'Wrapped with onions, capsicum & mint chutney', price: 149, veg: true, category: 'Rolls' },
    ],
  },
  {
    id: 'pizza-studio', name: 'Pizza Studio', tags: 'Pizza • Fast Food • Italian', rating: 4.3, ratings: '1.6K', eta: '30–35 min', distance: '3.4 km', offer: 'Buy 1 Get 1 Free', price: '₹300 for two',
    logo: 'PS', color: 'bg-violet-600',
    menu: [
      { id: 'p1', name: 'Vegetarian Pizza', desc: 'Loaded with peppers, corn, onion & mozzarella', price: 249, veg: true, category: 'Pizza' },
      { id: 'p2', name: 'Veg Burger', desc: 'Crispy patty with cheese and crunchy lettuce', price: 119, veg: true, category: 'Fast Food' },
      { id: 'p3', name: 'French Fries', desc: 'Golden, salted and served hot', price: 89, veg: true, category: 'Fast Food' },
      { id: 'p4', name: 'Ice Cream', desc: 'Creamy scoop with chocolate garnish', price: 79, veg: true, category: 'Desserts' },
    ],
  },
  {
    id: 'biryani-blues', name: 'Biryani Blues', tags: 'Biryani • Hyderabadi • Rice', rating: 4.6, ratings: '3.4K', eta: '30–40 min', distance: '4.2 km', offer: 'Free Raita on ₹199+', price: '₹250 for two',
    logo: 'BB', color: 'bg-amber-600',
    menu: [
      { id: 'b1', name: 'Hyderabadi Biryani', desc: 'Aromatic dum-cooked basmati with vegetables', price: 199, veg: true, category: 'Biryani' },
      { id: 'b2', name: 'Veg Pulao', desc: 'Fragrant rice with garden vegetables', price: 139, veg: true, category: 'Rice' },
      { id: 'b3', name: 'Gulab Jamun', desc: 'Two warm milk dumplings in cardamom syrup', price: 69, veg: true, category: 'Desserts' },
    ],
  },
  {
    id: 'green-bowl', name: 'Green Bowl Kitchen', tags: 'Healthy • Salads • Bowls', rating: 4.8, ratings: '870+', eta: '22–28 min', distance: '2.1 km', offer: '15% OFF on all bowls', price: '₹180 for two',
    logo: 'GB', color: 'bg-emerald-600',
    menu: [
      { id: 'g1', name: 'Garden Salad', desc: 'Fresh seasonal greens with house dressing', price: 149, veg: true, category: 'Salads' },
      { id: 'g2', name: 'Mixed Veg Bowl', desc: 'Seasonal vegetables with quinoa & herbs', price: 179, veg: true, category: 'Bowl' },
      { id: 'g3', name: 'Paneer Tikka Bowl', desc: 'Char-grilled paneer with rice & mint chutney', price: 199, veg: true, category: 'Bowl' },
    ],
  },
  {
    id: 'chaat-bazaar', name: 'Chaat Bazaar', tags: 'Chaat • Snacks • Street Food', rating: 4.4, ratings: '1.9K', eta: '18–25 min', distance: '1.4 km', offer: '₹50 OFF above ₹199', price: '₹100 for two',
    logo: 'CB', color: 'bg-orange-600',
    menu: [
      { id: 'c1', name: 'Pani Puri', desc: 'Six crisp puris with spicy tangy water', price: 79, veg: true, category: 'Chaat' },
      { id: 'c2', name: 'Samosa', desc: 'Flaky pastry with spiced potato filling', price: 39, veg: true, category: 'Snacks' },
      { id: 'c3', name: 'Masala Lemonade', desc: 'Fresh nimbu pani with a spicy kick', price: 59, veg: true, category: 'Beverages' },
      { id: 'c4', name: 'Chocolate Cake', desc: 'Rich, moist chocolate cake slice', price: 99, veg: true, category: 'Desserts' },
    ],
  },
];

export const popularDishes = [
  { id: 'pd1', name: 'Paneer Butter Masala', desc: 'Creamy tomato gravy · Bhojan Homes', price: 199, veg: true, category: 'Main Course', rating: '4.7', vendor: 'Bhojan Homes' },
  { id: 'pd2', name: 'Veg Biryani', desc: 'Dum-cooked basmati · Biryani Blues', price: 189, veg: true, category: 'Biryani', rating: '4.8', vendor: 'Biryani Blues' },
  { id: 'pd3', name: 'Masala Dosa', desc: 'Crisp & golden · Dosa Corner', price: 129, veg: true, category: 'South Indian', rating: '4.6', vendor: 'Dosa Corner' },
  { id: 'pd4', name: 'Vegetarian Pizza', desc: 'Loaded with veggies · Pizza Studio', price: 249, veg: true, category: 'Pizza', rating: '4.5', vendor: 'Pizza Studio' },
  { id: 'pd5', name: 'Chole Bhature', desc: 'Spicy chickpeas · Rasoi Ghar', price: 169, veg: true, category: 'Main Course', rating: '4.7', vendor: 'Rasoi Ghar' },
  { id: 'pd6', name: 'Paneer Kathi Roll', desc: 'Street-style wrap · Dosa Corner', price: 149, veg: true, category: 'Rolls', rating: '4.4', vendor: 'Dosa Corner' },
  { id: 'pd7', name: 'Garden Salad', desc: 'Fresh & light · Green Bowl Kitchen', price: 149, veg: true, category: 'Salads', rating: '4.8', vendor: 'Green Bowl Kitchen' },
  { id: 'pd8', name: 'Gulab Jamun', desc: 'Warm & syrupy · Bhojan Homes', price: 69, veg: true, category: 'Desserts', rating: '4.9', vendor: 'Bhojan Homes' },
  { id: 'pd9', name: 'Pani Puri', desc: 'Tangy street classic · Chaat Bazaar', price: 79, veg: true, category: 'Chaat', rating: '4.5', vendor: 'Chaat Bazaar' },
  { id: 'pd10', name: 'Ice Cream', desc: 'Creamy scoop · Pizza Studio', price: 79, veg: true, category: 'Ice Cream', rating: '4.6', vendor: 'Pizza Studio' },
];

export const offerCoupons = [
  { code: 'CHASKAA30', title: '30% OFF up to ₹100', sub: 'On your first food order', img: '/img/hero-food.jpg', tone: 'from-[#b00528] to-[#760219]' },
  { code: 'TIFFIN50', title: '₹50 OFF Tiffin', sub: 'On weekly & monthly plans', img: '/img/hero-tiffin.jpg', tone: 'from-[#730216] to-[#b00528]' },
  { code: 'FREESWEET', title: 'Free Gulab Jamun', sub: 'On orders above ₹299', img: '/img/gulab-jamun.jpg', tone: 'from-[#9a3412] to-[#b00528]' },
  { code: 'BIRYANI149', title: 'Biryani at ₹149', sub: 'Limited time offer', img: '/img/biryani.jpg', tone: 'from-[#7c2d12] to-[#b00528]' },
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
  {
    id: 'student-breakfast', segment: 'Student', name: 'Breakfast Plan', badge: 'NEW', price: 449, unit: '/ week', duration: '7 Days', meals: 'Breakfast',
    image: '/img/idli-sambar.jpg',
    highlights: ['Idli, Dosa & Paratha', 'Fresh chutney & sambar', 'Fuel for a busy day'],
    menu: ['Idli Sambar', 'Masala Dosa', 'Aloo Paratha', 'Masala Lemonade'],
  },
  {
    id: 'student-family', segment: 'Student', name: 'Family Plan', badge: 'FOR 2', price: 3499, unit: '/ month', duration: '30 Days', meals: 'Lunch & Dinner · 2 people',
    image: '/img/rajma-chawal.jpg',
    highlights: ['Two full meals daily', 'Rotating weekly menu', 'Save ₹900 every month'],
    menu: ['Rajma Chawal', 'Dal Tadka + Paneer Curry', 'Mix Veg + Salad', 'Roti (4)'],
  },
  {
    id: 'corp-trial', segment: 'Corporate', name: 'Trial Pack', badge: 'TRY FIRST', price: 999, unit: '/ 3 days', duration: '3 Days', meals: 'Lunch · 10 people',
    image: '/img/veg-salad.jpg',
    highlights: ['Taste before you subscribe', 'Same-day setup', 'Dedicated coordinator'],
    menu: ['Paneer Masala + Mix Veg', 'Jeera Rice', 'Garden Salad + Roti (2)'],
  },
  {
    id: 'corp-executive', segment: 'Corporate', name: 'Executive Plan', badge: 'PREMIUM', price: 3999, unit: '/ person / month', duration: '30 Days (Mon–Fri)', meals: 'Lunch · Premium menu',
    image: '/img/north-indian-thali.jpg',
    highlights: ['Premium rotating menu', 'GST billing & invoices', 'Priority delivery slots'],
    menu: ['Paneer Butter Masala', 'Veg Biryani + Raita', 'Garden Salad', 'Gulab Jamun'],
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
