'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  sourceString.replace(/\s+:/g, ':')
    .split(';')
    .map(styleCss => styleCss.trim().split(': '))
    .forEach(propertyCss => {
      if (propertyCss[0] !== '') {
        stylesObject[propertyCss[0]] = propertyCss[1].trim();
      }
    });

  return stylesObject;
}
module.exports = convertToObject;
