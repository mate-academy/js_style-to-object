'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const property = {};

  const cssProperties = sourceString
    .split(';')
    .map((element) => element.trim());

  cssProperties.forEach((element) => {
    const indexOfColon = element.indexOf(':');

    if (indexOfColon !== -1) {
      const key = element.slice(0, indexOfColon);
      const value = element.slice(indexOfColon + 1);

      property[key.trim()] = value.trim();
    }
  });

  return property;
}

module.exports = convertToObject;
