/* Local food photography for every dish, restaurant, category and promo.
   All files live in public/img so the app works without an internet connection. */

export const dishImageMap = {
  'Paneer Butter Masala': '/img/paneer-butter-masala.jpg',
  'Shahi Paneer': '/img/paneer-butter-masala.jpg',
  'Veg Thali': '/img/veg-thali.jpeg',
  'Rajdhani Thali': '/img/veg-thali.jpeg',
  'Special Thali': '/img/veg-thali.jpeg',
  'Dal Tadka': '/img/dal-tadka.jpg',
  'Dal Makhani': '/img/dal-tadka.jpg',
  'Dal Fry': '/img/dal-tadka.jpg',
  'Jeera Rice': '/img/jeera-rice.jpg',
  'Veg Pulao': '/img/jeera-rice.jpg',
  'Butter Naan': '/img/butter-naan.jpg',
  'Naan': '/img/butter-naan.jpg',
  'Roti': '/img/butter-naan.jpg',
  'Gulab Jamun': '/img/gulab-jamun.jpg',
  'Chole Bhature': '/img/chole-bhature.jpg',
  'Chole Kulche': '/img/chole-bhature.jpg',
  'Aloo Paratha': '/img/aloo-paratha.jpg',
  'Paratha': '/img/aloo-paratha.jpg',
  'Paneer Tikka Bowl': '/img/paneer-tikka.jpg',
  'Paneer Tikka': '/img/paneer-tikka.jpg',
  'Paneer Curry': '/img/paneer-butter-masala.jpg',
  'Mixed Veg Bowl': '/img/mixed-veg-bowl.jpg',
  'Mix Veg': '/img/mixed-veg-bowl.jpg',
  'Veg Bowl': '/img/mixed-veg-bowl.jpg',
  'Veg Burger': '/img/veg-burger.jpg',
  'Burger': '/img/veg-burger.jpg',
  'French Fries': '/img/french-fries.jpg',
  'Fries': '/img/french-fries.jpg',
  'Masala Lemonade': '/img/masala-lemonade.jpg',
  'Lemonade': '/img/masala-lemonade.jpg',
  'Biryani': '/img/biryani.jpg',
  'Chicken Dum Biryani': '/img/biryani.jpg',
  'Veg Biryani': '/img/biryani.jpg',
  'Hyderabadi Biryani': '/img/biryani.jpg',
  'Samosa': '/img/snacks.jpg',
  'Masala Dosa': '/img/masala-dosa.jpg',
  'Dosa': '/img/masala-dosa.jpg',
  'Idli Sambar': '/img/idli-sambar.jpg',
  'Idli': '/img/idli-sambar.jpg',
  'Paneer Kathi Roll': '/img/paneer-roll.jpg',
  'Veg Roll': '/img/paneer-roll.jpg',
  'Vegetarian Pizza': '/img/veg-pizza.jpg',
  'Veg Pizza': '/img/veg-pizza.jpg',
  'Margherita Pizza': '/img/veg-pizza.jpg',
  'Garden Salad': '/img/veg-salad.jpg',
  'Veg Salad': '/img/veg-salad.jpg',
  'Ice Cream': '/img/ice-cream.jpg',
  'Chocolate Cake': '/img/chocolate-cake.jpg',
  'Pani Puri': '/img/pani-puri.jpg',
  'Chaat': '/img/pani-puri.jpg',
  'Rajma Chawal': '/img/rajma-chawal.jpg',
  'Rajma Rice': '/img/rajma-chawal.jpg',
};

const keywordImages = [
  ['paneer butter', '/img/paneer-butter-masala.jpg'],
  ['paneer tikka', '/img/paneer-tikka.jpg'],
  ['paneer', '/img/paneer-butter-masala.jpg'],
  ['bhature', '/img/chole-bhature.jpg'],
  ['chole', '/img/chole-bhature.jpg'],
  ['thali', '/img/veg-thali.jpeg'],
  ['dal', '/img/dal-tadka.jpg'],
  ['biryani', '/img/biryani.jpg'],
  ['dosa', '/img/masala-dosa.jpg'],
  ['idli', '/img/idli-sambar.jpg'],
  ['pizza', '/img/veg-pizza.jpg'],
  ['roll', '/img/paneer-roll.jpg'],
  ['kathi', '/img/paneer-roll.jpg'],
  ['pani puri', '/img/pani-puri.jpg'],
  ['chaat', '/img/pani-puri.jpg'],
  ['salad', '/img/veg-salad.jpg'],
  ['ice cream', '/img/ice-cream.jpg'],
  ['cake', '/img/chocolate-cake.jpg'],
  ['rajma', '/img/rajma-chawal.jpg'],
  ['jeera', '/img/jeera-rice.jpg'],
  ['pulao', '/img/jeera-rice.jpg'],
  ['rice', '/img/jeera-rice.jpg'],
  ['naan', '/img/butter-naan.jpg'],
  ['paratha', '/img/aloo-paratha.jpg'],
  ['gulab', '/img/gulab-jamun.jpg'],
  ['jamun', '/img/gulab-jamun.jpg'],
  ['burger', '/img/veg-burger.jpg'],
  ['fries', '/img/french-fries.jpg'],
  ['lemonade', '/img/masala-lemonade.jpg'],
  ['samosa', '/img/snacks.jpg'],
  ['dessert', '/img/dessert.jpg'],
  ['sweet', '/img/dessert.jpg'],
  ['salad', '/img/mixed-veg-bowl.jpg'],
  ['veg', '/img/mixed-veg-bowl.jpg'],
  ['curry', '/img/mixed-veg-bowl.jpg'],
];

export const categoryImageMap = {
  'Main Course': '/img/mixed-veg-bowl.jpg',
  Thali: '/img/veg-thali.jpeg',
  Rice: '/img/jeera-rice.jpg',
  Breads: '/img/butter-naan.jpg',
  Desserts: '/img/dessert.jpg',
  'Fast Food': '/img/veg-burger.jpg',
  Beverages: '/img/masala-lemonade.jpg',
  Bowl: '/img/mixed-veg-bowl.jpg',
  Snacks: '/img/snacks.jpg',
  'South Indian': '/img/masala-dosa.jpg',
  Pizza: '/img/veg-pizza.jpg',
  Biryani: '/img/biryani.jpg',
  Rolls: '/img/paneer-roll.jpg',
  Salads: '/img/veg-salad.jpg',
  'Ice Cream': '/img/ice-cream.jpg',
  Chaat: '/img/pani-puri.jpg',
  Breakfast: '/img/idli-sambar.jpg',
};

/* Exact name first, then dish keywords, then category fallback. */
export function dishImage(name = '', category = '') {
  if (dishImageMap[name]) return dishImageMap[name];
  const needle = String(name).toLowerCase();
  for (const [keyword, img] of keywordImages) if (needle.includes(keyword)) return img;
  return categoryImageMap[category] || '/img/hero-food.jpg';
}

export const restaurantImages = {
  'bhojan-homes': '/img/rest-indian.jpg',
  'rasoi-ghar': '/img/north-indian-thali.jpg',
  'tiffin-express': '/img/rest-tiffin.jpg',
  'foodies-hub': '/img/rest-fastfood.jpg',
  'spice-route': '/img/north-indian-thali.jpg',
  'dosa-corner': '/img/masala-dosa.jpg',
  'pizza-studio': '/img/veg-pizza.jpg',
  'biryani-blues': '/img/biryani.jpg',
  'green-bowl': '/img/veg-salad.jpg',
  'chaat-bazaar': '/img/pani-puri.jpg',
};

export const restaurantImage = (r) => restaurantImages[r?.id] || '/img/rest-indian.jpg';

export const categoryImages = {
  Thali: '/img/veg-thali.jpeg',
  'North Indian': '/img/north-indian-thali.jpg',
  Chinese: '/img/noodles.jpg',
  Biryani: '/img/biryani.jpg',
  'Fast Food': '/img/rest-fastfood.jpg',
  Pizza: '/img/veg-pizza.jpg',
  'South Indian': '/img/masala-dosa.jpg',
  Rolls: '/img/paneer-roll.jpg',
  Beverages: '/img/masala-lemonade.jpg',
  Desserts: '/img/dessert.jpg',
  'Ice Cream': '/img/ice-cream.jpg',
  Tiffin: '/img/hero-tiffin.jpg',
};

export const planImages = {
  Student: '/img/veg-thali.jpeg',
  Corporate: '/img/rest-indian.jpg',
};

export const bannerImages = {
  1: '/img/hero-food.jpg',
  2: '/img/hero-tiffin.jpg',
  3: '/img/veg-thali.jpeg',
  4: '/img/gulab-jamun.jpg',
  5: '/img/biryani.jpg',
};

export function bannerImageFor(banner = {}) {
  const title = String(banner.title || '').toLowerCase();
  if (title.includes('tiffin') || title.includes('student')) return bannerImages[2];
  if (title.includes('corporate') || title.includes('plan')) return bannerImages[3];
  return bannerImages[1];
}

/* Admin vendor cards / tables: pick a representative photo by business type. */
export function vendorImage(name = '') {
  const n = String(name).toLowerCase();
  if (n.includes('biryani')) return '/img/biryani.jpg';
  if (n.includes('dosa') || n.includes('south')) return '/img/masala-dosa.jpg';
  if (n.includes('pizza')) return '/img/veg-pizza.jpg';
  if (n.includes('chaat')) return '/img/pani-puri.jpg';
  if (n.includes('chole')) return '/img/chole-bhature.jpg';
  if (n.includes('dal')) return '/img/dal-tadka.jpg';
  if (n.includes('green bowl')) return '/img/mixed-veg-bowl.jpg';
  if (n.includes('corporate')) return '/img/rest-indian.jpg';
  if (n.includes('spice route')) return '/img/north-indian-thali.jpg';
  if (n.includes('tiffin') || n.includes('ghar ka khana')) return '/img/rest-tiffin.jpg';
  return '/img/rest-indian.jpg';
}
