'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const propertiesWithArguments = sourceString.split(';');

  propertiesWithArguments.map((element) => {
    const [property, value] = element.split(':').map((part) => part.trim());

    result[property] = value;
  });

  return result;
}

module.exports = convertToObject;
