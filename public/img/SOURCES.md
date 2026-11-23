# Chaskaa image verification

Every local image was checked against the **exact Wikimedia Commons file title** it came from. No maps, no people, no generic/wrong-dish photos are used for food labels.

| Local file | Exact source photo (Wikimedia Commons) | Used for |
|---|---|---|
| `paneer-butter-masala.jpg` | `Paneer Butter Masala 2.jpg` | Paneer Butter Masala, Paneer Curry |
| `veg-thali.jpeg` | `Vegetarian thali-MA08.jpg` | Veg Thali, Special Thali, Student plans |
| `north-indian-thali.jpg` | `North Indian Veg Thali.jpg` | North Indian category, Rasoi Ghar, Spice Route |
| `dal-tadka.jpg` | `Dal Tadka-Delhi.jpg` | Dal Tadka, Dal Makhani, Dal Fry |
| `jeera-rice.jpg` | `Jeera-rice.JPG` | Jeera Rice, Veg Pulao, Rice |
| `butter-naan.jpg` | `Annapurna Naan.jpg` | Butter Naan, Naan, Roti, Breads |
| `gulab-jamun.jpg` | `Gulab-jamun-wallpaper-1.jpg` | Gulab Jamun |
| `chole-bhature.jpg` | `Chole Bhature from Nagpur.JPG` | Chole Bhature, Chole Kulche |
| `aloo-paratha.jpg` | `Triangle paratha (cropped).JPG` | Aloo Paratha, Paratha |
| `paneer-tikka.jpg` | `Paneer tikka.jpg` | Paneer Tikka, Paneer Tikka Bowl |
| `mixed-veg-bowl.jpg` | `Mixed vegetable curry 1.jpg` | Mixed Veg Bowl, Main Course, veg fallback |
| `veg-burger.jpg` | `The ultimate veggie burger.jpg` | Veg Burger, Fast Food |
| `french-fries.jpg` | `French Fries.JPG` | French Fries, Fries |
| `masala-lemonade.jpg` | `Nimbu Pani.JPG` | Masala Lemonade, Beverages |
| `biryani.jpg` | `"Hyderabadi Dum Biryani".jpg` | Biryani, Biryani Blues |
| `snacks.jpg` | `Samosas, snack food at Wikipedia's 16th Birthday celebration in Chittagong (01).jpg` | Samosa, Snacks |
| `dessert.jpg` | `Desserts.jpg` | Desserts category |
| `noodles.jpg` | `Vegetable Chowmein Served in a Bowl.jpg` | Chinese category (real noodle dish, no person) |
| `rest-indian.jpg` | `Tradtional Thali.jpg` | Indian cuisine / generic restaurants |
| `rest-north-indian.png` | removed | Replaced by `north-indian-thali.jpg` (old file was a map) |
| `rest-tiffin.jpg` | `Typical south Indian dish for lunch packed in tiffin boxes and carried in wire basket bag.jpg` | Tiffin Express, tiffin vendors |
| `hero-tiffin.jpg` | `Dabba.jpg` | Indian tiffin carrier hero |
| `hero-food.jpg` | `Butter Chicken & Butter Naan - Home - Chandigarh - India - 0006.jpg` | Food hero / offer banners |
| `rest-fastfood.jpg` | `Hamburger (12164386105).jpg` | Foodies Hub / fast food |

## Fixed mismatches (second pass)

- **North Indian** was a *Northwest India map* → now a real **North Indian Veg Thali**.
- **Chinese** was *Dalian Noodlemaker* (a man) → now **Vegetable Chowmein in a bowl**.
- **Veg Thali** was *Vegetarian Curry* → now an explicitly named **Vegetarian thali**.
- **Mixed Veg Bowl** was *Lamb Curry* (non-veg) → now **Mixed vegetable curry**.
- **Tiffin restaurant** was *Harry S. Truman Lunch Box* → now a real **Indian tiffin lunch**.
- Also upgraded Paneer Butter Masala, Dal Tadka, Masala Lemonade, Veg Burger and French Fries to exact-named photos.
