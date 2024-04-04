'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // string.split.filter => 1 object[key, value]
  const styles = {};
  const splitedString = sourceString.split(';').filter(Boolean);

  for (const result of splitedString) {
    const [property, value] = result.split(':').map((str) => str.trim());

    styles[property] = value;
  }

  return styles;
}

module.exports = convertToObject;
