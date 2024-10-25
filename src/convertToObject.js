'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newObject = {};

  sourceString.split(';').forEach((rule) => {
    let [property, value] = rule.split(':');

    if (property && value) {
      property = property.trim();
      value = value.trim();
    }

    newObject[property] = value;
  });

  return newObject;
}

module.exports = convertToObject;
