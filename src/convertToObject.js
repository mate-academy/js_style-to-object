'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const parts = sourceString.split(';').filter((item) => item.trim());

  const objectOfproperties = parts.reduce((nameOfProperties, currentValue) => {
    const [key, value] = currentValue.split(':');

    nameOfProperties[key.trim()] = value.trim();

    return nameOfProperties;
  }, {});

  return objectOfproperties;
}

module.exports = convertToObject;
