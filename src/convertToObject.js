'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};
  const stylesInArray = sourceString
    .split(';')
    .map(item => item.trim())
    .filter(item => item.length !== 0);

  stylesInArray.forEach((property) => {
    const current = property
      .split(':')
      .map(item => item.trim());

    const [key, value] = current;

    styles[key] = value;
  });

  return styles;
}

module.exports = convertToObject;

// In my opinion, method trim() is better here
