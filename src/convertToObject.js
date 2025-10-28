/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  sourceString
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item)
    .forEach((item) => {
      const parts = item.split(':');

      if (parts.length > 2) {
        return;
      }

      const key = parts[0].trim();
      const value = parts.slice(1).join(':').trim();

      styleObject[key] = value;
    });

  return styleObject;
}

module.exports = convertToObject;
