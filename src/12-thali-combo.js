/**
 * 🍽️ Thali Combo Platter - Mixed Methods Capstone
 *
 * Grand Indian Thali restaurant mein combo platter system banana hai.
 * String, Number, Array, aur Object — sab methods mila ke ek complete
 * thali banao. Yeh capstone challenge hai — sab kuch combine karo!
 *
 * Data format: thali = {
 *   name: "Rajasthani Thali",
 *   items: ["dal baati", "churma", "papad"],
 *   price: 250,
 *   isVeg: true
 * }
 *
 * Functions:
 *
 *   1. createThaliDescription(thali)
 *      - Template literal, .join(", "), .toUpperCase(), .toFixed(2) use karo
 *      - Format: "{NAME} (Veg/Non-Veg) - Items: {items joined} - Rs.{price}"
 *      - name ko UPPERCASE karo, price ko 2 decimal places tak
 *      - isVeg true hai toh "Veg", false hai toh "Non-Veg"
 *      - Agar thali object nahi hai ya required fields missing hain, return ""
 *      - Required fields: name (string), items (array), price (number), isVeg (boolean)
 *      - Example: createThaliDescription({name:"Rajasthani Thali", items:["dal","churma"], price:250, isVeg:true})
 *                 => "RAJASTHANI THALI (Veg) - Items: dal, churma - Rs.250.00"
 *
 *   2. getThaliStats(thalis)
 *      - Array of thali objects ka stats nikalo
 *      - .filter() se veg/non-veg count
 *      - .reduce() se average price
 *      - Math.min/Math.max se cheapest/costliest
 *      - .map() se saare names
 *      - Return: { totalThalis, vegCount, nonVegCount, avgPrice (2 decimal string),
 *                  cheapest (number), costliest (number), names (array) }
 *      - Agar thalis array nahi hai ya empty hai, return null
 *
 *   3. searchThaliMenu(thalis, query)
 *      - .filter() + .includes() se search karo (case-insensitive)
 *      - Thali match karti hai agar name ya koi bhi item query include kare
 *      - Agar thalis array nahi hai ya query string nahi hai, return []
 *      - Example: searchThaliMenu(thalis, "dal") => thalis with "dal" in name or items
 *
 *   4. generateThaliReceipt(customerName, thalis)
 *      - Template literals + .map() + .join("\n") + .reduce() se receipt banao
 *      - Format:
 *        "THALI RECEIPT\n---\nCustomer: {NAME}\n{line items}\n---\nTotal: Rs.{total}\nItems: {count}"
 *      - Line item: "- {thali name} x Rs.{price}"
 *      - customerName UPPERCASE mein
 *      - Agar customerName string nahi hai ya thalis array nahi hai/empty hai, return ""
 *
 * @example
 *   createThaliDescription({name:"Rajasthani Thali", items:["dal"], price:250, isVeg:true})
 *   // => "RAJASTHANI THALI (Veg) - Items: dal - Rs.250.00"
 */
export function createThaliDescription(thali) {
  if (!thali || typeof thali !== 'object') {
    return ''
  }

  const { name, items, price, isVeg } = thali;

  if (!name || !items || !price || typeof isVeg !== 'boolean') {
    return '';
  }

  const thaliName = name.toUpperCase();
  const typeOfThali = isVeg ? 'Veg' : 'Non-Veg';
  const itemsList = items.join(', ');
  const thaliPrice = `Rs.${price.toFixed(2)}`

  return `${thaliName} (${typeOfThali}) - Items: ${itemsList} - ${thaliPrice}`
}

export function getThaliStats(thalis) {
  if (!thalis || !thalis.length || !Array.isArray(thalis)) {
    return null;
  }

  const totalThalis = thalis.length;
  const vegCount = thalis.filter(({ isVeg }) => isVeg).length;
  const nonVegCount = thalis.filter(({ isVeg }) => !isVeg).length;
  const avgPrice = thalis.reduce((acc, thali) => acc + thali.price, 0) / totalThalis;
  const allThaliPrices = thalis.map(({ price }) => price);
  const cheapest = Math.min(...allThaliPrices);
  const costliest = Math.max(...allThaliPrices);
  const names = thalis.map(({ name }) => name);


  return { totalThalis, vegCount, nonVegCount, avgPrice: avgPrice.toFixed(2), cheapest, costliest, names };
}

export function searchThaliMenu(thalis, query) {
  if (!thalis || !Array.isArray(thalis) || !thalis.length || typeof query !== 'string') {
    return [];
  }

  const isMatchedByName = thalis.filter((thali) => thali.name.toLowerCase().includes(query.toLowerCase()));
  const isMatchedByItem = thalis.filter((thali) => thali.items.some((item) => item.toLowerCase().includes(query.toLowerCase())));

  return [...isMatchedByName, ...isMatchedByItem];

}

export function generateThaliReceipt(customerName, thalis) {
  if (typeof customerName !== 'string' || !thalis || !Array.isArray(thalis) || thalis.length <= 0) {
    return ''
  }

  const lineItem = thalis.map((thali) => `- ${thali.name} x Rs.${thali.price}`);
  const total = thalis.reduce((acc, { price }) => acc + price, 0);

  return `THALI RECEIPT\n---\nCustomer: ${customerName.toUpperCase()}\n${lineItem}\n---\nTotal: Rs.${total}\nItems: ${thalis.length}`
}
