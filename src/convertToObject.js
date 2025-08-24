'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
   return sourceString
    .split(';')
    .filter(entry => entry.trim() !== '') // відкидаємо порожні
    .reduce((styles, entry) => {
  const [key, value] = entry.split(':', 2);

  if (value === undefined) {
    return styles; // пропускаємо некоректний запис
  }

  styles[key.trim()] = value.trim();
  return styles;
}, {});
}


module.exports = convertToObject;
