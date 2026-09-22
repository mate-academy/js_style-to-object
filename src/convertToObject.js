/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter(Boolean)
    .forEach((rule) => {
      const colonIndex = rule.indexOf(':');
      const property = rule.slice(0, colonIndex).trim();
      const value = rule.slice(colonIndex + 1).trim();

      stylesObject[property] = value;
    });

  return stylesObject;
}

module.exports = convertToObject;
