'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let dividedString = sourceString.split(';');

  dividedString = dividedString
    .map((item) => item.trim())
    .filter((item) => item !== '');

  const styles = Object.fromEntries(
    dividedString.map((item) => {
      const [key, value] = item.split(':');

      return [key.trim(), value.trim()];
    }),
  );

  // for (let i = 0; i < dividedString.length; i++) {
  //   const [key, value] = dividedString[i].split(':');

  //   styles[key.trim()] = value.trim();
  // }

  return styles;
}

module.exports = convertToObject;
