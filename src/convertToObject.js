'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssProperties = {};
  const properties = sourceString.match(/.+:.+(?=;)/gmi);

  const clearPairs = properties.map(i => i.replace(/\s{,2}/gm, '').split(':'));

  clearPairs.forEach((propery) => {
    cssProperties[propery[0].trim()] = propery[1].trim();
  });

  return cssProperties;
}

module.exports = convertToObject;
