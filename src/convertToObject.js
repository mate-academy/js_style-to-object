'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // перетворити рядок на масив де елемент це правило css
  // перевірити чи рядок не порожній

  const listStyles = sourceString
    .split(';')
    .filter((string) => string.trim() !== '');

  const stylesObject = {};

  listStyles.forEach((entry) => {
    const [key, value] = entry.split(':').map((el) => el.trim());

    if (key && value) {
      stylesObject[key] = value;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
