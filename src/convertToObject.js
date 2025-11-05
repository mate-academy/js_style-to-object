'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const conversionString = sourceString
    .split(';')
    .map((propertyCss) => propertyCss.trim())
    .filter((propertyCss) => propertyCss !== '')
    .map((propertyCss) => propertyCss.split(':').map((part) => part.trim()));

  return Object.fromEntries(conversionString);
}

module.exports = convertToObject;
