/**
 * @file Utility for prettifying numbers.
 * @author Bob Myers
 */

/**
 * Round a number and format to at most one decimal place.
 * @private
 *
 * @param {number} m - number to process
 * @returns {string} Rounded number with zero or one decimal places.
 *
 * See {@link docs/DESIGN-NOTES.md|design notes}
 */
const round = (m: number) => {
  const rounded = Math.round(m * 10) / 10;

  return rounded.toFixed(Number.isInteger(rounded) ? 0 : 1);
};

/** Prettify a number by taking the first few significant digits and adding a units suffix.
 * Numbers under one million, including negative numbers, are returned as is.
 * The odd-looking "-5e4" and "-5e7" ensure that numbers such as 999,999,999 are
 * formatted as 1B, and not 1000M.
 *
 * @param {number} n - number to be prettified.
 * @returns {string} prettified version of number
 */
export function prettifyNumber(n: number) {
  if (n < 1e6) return n.toString();
  if (n < 1e9 - 5e4) return round(n / 1e6) + "M";
  if (n < 1e12 - 5e7) return round(n / 1e9) + "B";
  return round(n / 1e12) + "T";
}
