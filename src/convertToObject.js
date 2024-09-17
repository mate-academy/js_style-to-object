'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const allStyles = sourceString.trim().split(';');
  allStyles.pop();

  const styles = {};

  allStyles.forEach(element => {
    const property = element.split(':');
    styles[property[0].trim()] = property[1].trim();
  });

  return styles;
}

module.exports = convertToObject;
