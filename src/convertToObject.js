'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resultObject = {};
  const propArray = sourceString.split(';');

  propArray.forEach(function(prop) {
    const key = (prop.split(':')[0]);
    const value = (prop.split(':')[1]);

    if (key !== undefined && value !== undefined) {
      resultObject[key.trim()] = value.trim();
    }
  });

  return resultObject;
}

module.exports = convertToObject;
