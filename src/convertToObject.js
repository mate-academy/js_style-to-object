'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};
  const stylesInArray = sourceString.split(';')
    .map(item => item.trim())
    .filter(item => item.length !== 0);

  for (const property of stylesInArray) {
    const current = property.split(':').map(item => item.trim());

    const [key, value] = current;

    styles[key] = value;
  }

  return styles;
}

module.exports = convertToObject;
