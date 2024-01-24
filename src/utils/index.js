/**
 * @function isMobileDevice
 * check for mobile device based on window orientation
 *
 * @returns boolean for mobile device
 */
export const isMobileDevice = () => {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
};

/**
 * @function isMobileSize
 * check if current screen width indicates mobile device
 *
 * @returns boolean mobile screens
 */
export const isMobileSize = () => {
  return window.matchMedia("(max-width: 767px)").matches;
};

/**
 * Convert #ffffff to rgba(255,255,255,1)
 * @param {string} hex
 * @param {integer} opacity
 * @returns {string}
 */
export const hexToRgba = (hex, opacity = 1) => {
  if (!hex) return null;

  if (hex.length < 8 && !/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex))
    throw new Error("Bad Hex");

  const parsedArray = hex.substring(1).split("");

  const base16 = `0x${parsedArray.join("")}`;
  // eslint-disable-next-line no-bitwise
  return `rgba(${[(base16 >> 16) & 255, (base16 >> 8) & 255, base16 & 255].join(
    ", "
  )},${opacity})`;
};

/**
 * Convert #ffffff to rgba(255,255,255)
 * @param {string} hex
 * @returns {string}
 */
export const hexToRgb = (hex) => {
  if (!hex) return null;

  if (hex.length < 8 && !/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex))
    throw new Error("Bad Hex");

  const parsedArray = hex.substring(1).split("");

  const base16 = `0x${parsedArray.join("")}`;
  // eslint-disable-next-line no-bitwise
  return `rgb(${[(base16 >> 16) & 255, (base16 >> 8) & 255, base16 & 255].join(
    ", "
  )})`;
};

/**
 * Random Color Generator
 * @returns {string}
 */
export const getRandomColor = () =>
  Math.floor(Math.random() * 16777215).toString(16);

export default {
  isMobileDevice,
  isMobileSize,
  hexToRgba,
  hexToRgb,
  getRandomColor,
};
