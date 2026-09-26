/**
 * @param {string} stylesString
 *
 * @returns {Object}
 */
function convertToObject(stylesString) {
  return stylesString
    .split(';')
    .filter((style) => style.trim() !== '')
    .reduce((stylesObject, style) => {
      const colonIndex = style.indexOf(':');

      if (colonIndex !== -1) {
        const key = style.slice(0, colonIndex).trim();
        const value = style.slice(colonIndex + 1).trim();
        stylesObject[key] = value;
      }

      return stylesObject;
    }, {});
}

module.exports = convertToObject;