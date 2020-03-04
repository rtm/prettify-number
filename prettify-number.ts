/**
 * @file Utility for prettifying numbers.
 * @author Bob Myers
 */

/**
 * Round a number and format to at most one decimal place.
 * @private
 *
 * @param {number} m - number to round.
 * @returns {string} Rounded number with zero or one decimal places.
 */
const round = (m: number) => (Math.round(m * 10) / 10).toFixed(Number.isInteger(m) ? 0 : 1);

/** Prettify a number by taking the first few significant digits and adding a units suffix.
 *
 * @param {number} n - number to be prettified.
 * @returns {string} prettified version of number
 */
export function prettifyNumber(n: number) {
  if (n < 1e6) return n.toString(); // Pass through numbers we don't handle as is.
  if (n < 1e9) return round(n / 1e6) + "M";
  if (n < 1e12) return round(n / 1e9) + "B";
  return round(n / 1e12) + "T";
}
