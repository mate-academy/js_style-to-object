'use strict';

/**
 * Implement convertToObject function:
 *

 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const normalize = sourceString.split(';').map(propValuePair => {
    return propValuePair.split(':').map(propOrValue =>
      propOrValue.trim()).join(':');
  }).filter(propValuePair => propValuePair.length > 1);

  const result = {};

  normalize.map(propValuePair => {
    const [key, value] = propValuePair.split(':');

    result[key] = value;

    return propValuePair;
  });

  return result;
}

module.exports = convertToObject;
