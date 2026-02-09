/**
 * 🥬 Sabzi Mandi Shopping Cart - Array Basics
 *
 * Amma sabzi mandi gayi hain. Unka shopping cart (array) hai.
 * Items add karna, remove karna, check karna — sab array basic methods se.
 * Tu Amma ka digital thela bana!
 *
 * Methods to explore: .push(), .pop(), .unshift(), .indexOf(),
 *   .includes(), .length, .concat(), Array.isArray()
 *
 * Functions:
 *
 *   1. addToCart(cart, item)
 *      - .push() se item ko cart ke end mein add karo
 *      - Return: new cart length (push returns this automatically)
 *      - Agar cart Array nahi hai (Array.isArray use karo), return -1
 *      - Agar item empty string hai ya string nahi hai, return cart.length without adding
 *      - Example: addToCart(["tamatar", "pyaaz"], "mirchi") => 3
 *
 *   2. addUrgentItem(cart, item)
 *      - .unshift() se item ko cart ke BEGINNING mein add karo (pehle khareedna hai!)
 *      - Return: updated cart array
 *      - Agar cart not array, return []
 *      - Agar item valid string nahi hai, return cart unchanged
 *      - Example: addUrgentItem(["pyaaz", "mirchi"], "dhaniya") => ["dhaniya", "pyaaz", "mirchi"]
 *
 *   3. removeLastItem(cart)
 *      - .pop() se last sabzi remove karo
 *      - Return: the removed item
 *      - Agar cart not array ya empty hai, return undefined
 *      - Example: removeLastItem(["tamatar", "pyaaz", "mirchi"]) => "mirchi"
 *
 *   4. isInCart(cart, item)
 *      - .includes() se check karo ki item cart mein hai ya nahi
 *      - Agar cart not array, return false
 *      - Example: isInCart(["tamatar", "pyaaz"], "pyaaz") => true
 *      - Example: isInCart(["tamatar", "pyaaz"], "mirchi") => false
 *
 *   5. mergeCarts(cart1, cart2)
 *      - .concat() se do carts ko combine karo
 *      - Return: new merged array
 *      - Agar koi bhi array nahi hai, usse empty array [] maan lo
 *      - Example: mergeCarts(["tamatar"], ["mirchi", "adrak"]) => ["tamatar", "mirchi", "adrak"]
 *
 * @example
 *   addToCart(["tamatar", "pyaaz"], "mirchi")        // => 3
 *   addUrgentItem(["pyaaz"], "dhaniya")              // => ["dhaniya", "pyaaz"]
 *   removeLastItem(["tamatar", "pyaaz", "mirchi"])   // => "mirchi"
 */

const isValidItem = (item) => item && typeof item === 'string';
const isValidCart = (cart) => Array.isArray(cart);

export function addToCart(cart, item) {
  if (!isValidCart(cart)) {
    return -1;
  }

  if (!isValidItem(item)) {
    return cart.length;
  }

  cart.push(item);

  return cart.length;
}

export function addUrgentItem(cart, item) {

  if (!isValidCart(cart)) {
    return [];
  }

  if (!isValidItem(item)) {
    return cart;
  }

  cart.unshift(item);

  return cart;
}

export function removeLastItem(cart) {
  if (!isValidCart(cart)) {
    return undefined;
  }

  return cart.pop();
}

export function isInCart(cart, item) {
  if (!isValidCart(cart) || !cart.length) {
    return false
  }

  return cart.includes(item);
}

export function mergeCarts(cart1, cart2) {
  const isCart1Valid = isValidCart(cart1);
  const isCart2Valid = isValidCart(cart2);

  if (!isCart1Valid && !isCart2Valid) {
    return [];
  }

  const validCart1 = isCart1Valid ? cart1 : [];
  const validCart2 = isCart2Valid ? cart2 : [];

  return validCart1.concat(validCart2);
}
