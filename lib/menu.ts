export type MenuItem = {
  name: string;
  price: string;
  category: string;
  bestseller?: boolean;
};

/* =========================
   TIKKAGO SPECIAL
========================= */
export const menu: MenuItem[] = [
  { name: "Chicken Volcano", price: "₹85", category: "TikkaGo Special", bestseller: true },
  { name: "Veg Volcano", price: "₹80", category: "TikkaGo Special", bestseller: true },

/* =========================
   TIKKAGO SPECIAL TACOS
========================= */
  { name: "Veg Taco", price: "₹70", category: "Tacos" },
  { name: "Chicken Taco", price: "₹75", category: "Tacos", bestseller: true },
  { name: "Supreme Taco", price: "₹105", category: "Tacos", bestseller: true },

/* =========================
   KATHI WRAPS
========================= */
  { name: "Veg Kathi Wrap", price: "₹70", category: "Wraps" },
  { name: "Chicken Kathi Wrap", price: "₹75", category: "Wraps", bestseller: true },
  { name: "Prawns Kathi Wrap", price: "₹95", category: "Wraps" },
  { name: "Fish Kathi Wrap", price: "₹85", category: "Wraps" },
  { name: "Double Egg Wrap", price: "₹50", category: "Wraps" },

/* =========================
   KOLKATA ROLLS
========================= */
  { name: "Veg Roll", price: "₹45", category: "Kolkata Roll" },
  { name: "Paneer Roll", price: "₹65", category: "Kolkata Roll" },
  { name: "Egg Paneer Roll", price: "₹70", category: "Kolkata Roll" },
  { name: "Egg Roll", price: "₹40", category: "Kolkata Roll" },
  { name: "Chicken Roll", price: "₹60", category: "Kolkata Roll" },
  { name: "Egg Chicken Roll", price: "₹70", category: "Kolkata Roll" },
  { name: "Chicken Tikka Roll", price: "₹120", category: "Kolkata Roll", bestseller: true },
  { name: "Egg Chicken Tikka Roll", price: "₹130", category: "Kolkata Roll" },
  { name: "Cheese Extra", price: "₹20", category: "Add-ons" },
  { name: "Mayonnaise", price: "₹10", category: "Add-ons" },

/* =========================
   SANDWICH & SIDES
========================= */
  { name: "Veg Cheese Sandwich", price: "₹55", category: "Sandwich" },
  { name: "Egg Cheese Sandwich", price: "₹65", category: "Sandwich" },
  { name: "Chicken Cheese Sandwich", price: "₹70", category: "Sandwich" },
  { name: "Club Sandwich Veg", price: "₹75", category: "Sandwich" },
  { name: "Club Sandwich Egg / Chicken", price: "₹85", category: "Sandwich" },
  { name: "French Fry", price: "₹40", category: "Sides" },

/* =========================
   MOMOS
========================= */
  { name: "Veg Steam Momo (6 pcs)", price: "₹60", category: "Momo" },
  { name: "Veg Fried Momo (6 pcs)", price: "₹65", category: "Momo" },
  { name: "Veg Pan Fried Momo (6 pcs)", price: "₹75", category: "Momo" },
  { name: "Chicken Steam Momo (6 pcs)", price: "₹65", category: "Momo" },
  { name: "Chicken Fried Momo (6 pcs)", price: "₹70", category: "Momo" },
  { name: "Chicken Pan Fried Momo (6 pcs)", price: "₹80", category: "Momo" },

/* =========================
   TANDOORI & KEBABS
========================= */
  { name: "Amritsar Chicken Tikka (6 pcs)", price: "₹190", category: "Tandoori", bestseller: true },
  { name: "Reshmi Malai Kebab (6 pcs)", price: "₹220", category: "Tandoori", bestseller: true },
  { name: "Extra Malai", price: "₹50", category: "Add-ons" },
  { name: "Zaffrani Chicken Tikka (6 pcs)", price: "₹200", category: "Tandoori" },
  { name: "Haryali Chicken Tikka (6 pcs)", price: "₹200", category: "Tandoori" },
  { name: "Tandoori Chicken Full", price: "₹420", category: "Tandoori" },
  { name: "Tandoori Chicken Half", price: "₹250", category: "Tandoori" },

/* =========================
   BIRYANI & RICE
========================= */
  { name: "Steam Rice", price: "₹50", category: "Rice" },
  { name: "Jeera Rice", price: "₹65", category: "Rice" },
  { name: "Aloo Biryani", price: "₹60", category: "Biryani" },
  { name: "Anda Biryani", price: "₹70", category: "Biryani" },
  { name: "Chicken Biryani", price: "₹95", category: "Biryani", bestseller: true },
  { name: "Anda & Chicken Biryani", price: "₹110", category: "Biryani" },
  { name: "TikkaGo Special Chicken Biryani", price: "₹150", category: "Biryani", bestseller: true },
  { name: "Mutton Biryani", price: "₹170", category: "Biryani" },
  { name: "TikkaGo Special Mutton Biryani", price: "₹270", category: "Biryani" },

/* =========================
   CHINESE – CHICKEN
========================= */
  { name: "Chicken 65", price: "₹110", category: "Chinese" },
  { name: "Chicken Manchurian", price: "₹100", category: "Chinese" },
  { name: "Chicken Lollipop (6 pcs)", price: "₹120", category: "Chinese", bestseller: true },
  { name: "Chicken Drumstick (6 pcs)", price: "₹100", category: "Chinese" },

/* =========================
   INDIAN GRAVY – NON VEG
========================= */
  { name: "Chicken Tikka Butter Masala", price: "₹200", category: "Indian Non-Veg", bestseller: true },
  { name: "Kadhai Chicken", price: "₹200", category: "Indian Non-Veg" },
  { name: "Mutton Kasa", price: "₹280", category: "Indian Non-Veg" },

/* =========================
   INDIAN GRAVY – VEG
========================= */
  { name: "Paneer Butter Masala", price: "₹180", category: "Indian Veg" },
  { name: "Kadhai Paneer", price: "₹200", category: "Indian Veg" },
  { name: "Dal Makhani", price: "₹100", category: "Indian Veg" },
];
