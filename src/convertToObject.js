'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObj = {};

  sourceString
    .split(';')
    .map((line) => line.trim())
    .forEach((element) => {
      const [property, ...value] = element.split(':');
      const valueParts = value.join(':').trim();

      if (property && valueParts) {
        styleObj[property.trim()] = valueParts;
      }
    });

  return styleObj;
}

module.exports = convertToObject;
