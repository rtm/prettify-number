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
 *
 * See design notes in `docs/DESIGN_NOTES.md.
 */
const round = (m: number) => (Math.round(m * 10) / 10).toFixed(Number.isInteger(m) ? 0 : 1);

/** Prettify a number by taking the first few significant digits and adding a units suffix.
 *
 * @param {number} n - number to be prettified.
 * @returns {string} prettified version of number
 */
export function prettifyNumber(n: number) {
  // These strange looking "995" values are designed to ensure that numbers which will be
  // rounded up are treated correctly. We want 999,999,999 to display as 1.0B, not 1000M.
  if (n < 995e3) return n.toString(); // Pass through numbers we don't handle as is.
  if (n < 995e6) return round(n / 1e6) + "M";
  if (n < 995e9) return round(n / 1e9) + "B";
  return round(n / 1e12) + "T";
}
