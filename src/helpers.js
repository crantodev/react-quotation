/**
 *
 * @param {integer} year The car year selected
 */
export function YearDiff(year) {
  return new Date().getFullYear() - year;
}

/**
 *
 * @param {string} brand The car brand selected
 */
export function calculateBrand(brand) {
  let increment;

  switch (brand) {
    case "eurupean":
      increment = 1.3;
      break;
    case "american":
      increment = 1.15;
      break;
    case "asian":
      increment = 1.05;
      break;
    default:
      break;
  }

  return increment;
}

/**
 *
 * @param {string} plan The plan selected
 */
export function getPlan(plan) {
  return plan === "basico" ? 1.2 : 1.5;
}

/**
 * 
 * @param {string} word The word
 */
export function capitilize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
