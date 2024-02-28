'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayOfCssValue = sourceString
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
  const resultListOfCssPropertes = {};

  for (const ch of arrayOfCssValue) {
    const cssProperties = ch.split(':');

    resultListOfCssPropertes[cssProperties[0].trim()] = cssProperties[1].trim();
  }

  return resultListOfCssPropertes;
}

module.exports = convertToObject;
