'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(str) {
  const resultStyles = {};
  const listStyle = str.split(';');

  for (const listStyleElement of listStyle) {
    const styleItem = listStyleElement.trim();

    if (styleItem) {
      const [property, ...itemParts] = styleItem.split(':');

      if (property && itemParts.length > 0) {
        const item = itemParts.join(':').trim();

        resultStyles[property.trim()] = item;
      }
    }
  }

  return resultStyles;
}

module.exports = convertToObject;
