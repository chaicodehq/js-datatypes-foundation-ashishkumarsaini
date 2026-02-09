/**
 * ☕ Chai Tapri Order System - String Basics
 *
 * Guddu ki chai tapri hai college ke bahar. Customers order dete hain,
 * aur Guddu ko string methods use karke orders handle karne hain.
 * Tu Guddu ka helper hai — basic string methods seekh aur orders process kar!
 *
 * Methods to explore: .length, .toUpperCase(), .toLowerCase(),
 *   .trim(), .includes(), .charAt(), .at()
 *
 * Functions:
 *
 *   1. getChaiOrderLength(order)
 *      - Pehle .trim() se extra spaces hatao, phir .length se count karo
 *      - Agar order string nahi hai, return -1
 *      - Example: getChaiOrderLength("  masala chai  ") => 11
 *
 *   2. shoutChaiOrder(order)
 *      - Guddu apne helper ko UPPERCASE mein order shout karta hai
 *      - Pehle .trim() karo, phir .toUpperCase()
 *      - Agar order string nahi hai ya trim ke baad empty hai, return ""
 *      - Example: shoutChaiOrder("masala chai") => "MASALA CHAI"
 *
 *   3. whisperChaiOrder(order)
 *      - Jab koi secretly order karta hai, lowercase mein likho
 *      - Pehle .trim() karo, phir .toLowerCase()
 *      - Agar order string nahi hai ya trim ke baad empty hai, return ""
 *      - Example: whisperChaiOrder("ADRAK CHAI") => "adrak chai"
 *
 *   4. hasSpecialIngredient(order, ingredient)
 *      - Check karo ki order mein koi special ingredient hai ya nahi
 *      - Dono ko .toLowerCase() karo, phir .includes() use karo
 *      - Agar koi bhi string nahi hai, return false
 *      - Example: hasSpecialIngredient("Elaichi Masala Chai", "elaichi") => true
 *
 *   5. getFirstAndLastChar(order)
 *      - .charAt(0) se pehla character aur .at(-1) se aakhri character nikalo
 *      - Pehle .trim() karo
 *      - Return: { first, last }
 *      - Agar order string nahi hai ya trim ke baad empty hai, return null
 *      - Example: getFirstAndLastChar("masala chai") => { first: "m", last: "i" }
 *
 * @example
 *   getChaiOrderLength("  masala chai  ")  // => 11
 *   shoutChaiOrder("masala chai")          // => "MASALA CHAI"
 *   hasSpecialIngredient("Elaichi Chai", "elaichi")  // => true
 */
const isValidOrder = (order) => order && typeof order === 'string';
const isValidIngredient = (ingredient) => ingredient && typeof ingredient === 'string';
const isOnlyWhiteSpaces = (order) => !Boolean(order.trim());

export function getChaiOrderLength(order) {
  if (!isValidOrder(order)) {
    return -1;
  }

  return order.trim().length;
}

export function shoutChaiOrder(order) {
  if (!isValidOrder(order)) {
    return '';
  }
  return order.trim().toUpperCase();
}

export function whisperChaiOrder(order) {
  if (!isValidOrder(order)) {
    return '';
  }

  return order.trim().toLowerCase();
}

export function hasSpecialIngredient(order, ingredient) {
  if (!isValidOrder(order) || !isValidIngredient(ingredient)) {
    return false;
  }

  return order.trim().toLowerCase().includes(ingredient.toLowerCase());
}

export function getFirstAndLastChar(order) {
  if (!isValidOrder(order)) {
    return null;
  }

  if (isOnlyWhiteSpaces(order)) {
    return null;
  }

  const finalOrder = order.trim();

  return {
    first: finalOrder.charAt(0),
    last: finalOrder.at(-1)
  }
}
