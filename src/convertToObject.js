'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const finalVersion = {};

  const styles = sourceString
    .split(';')
    .map((prop) => prop.split(':'))
    .filter((item) => item.length > 1);

  for (const style of styles) {
    finalVersion[style[0].trim()] = style[1].trim();
  }

  return finalVersion;
}

module.exports = convertToObject;
