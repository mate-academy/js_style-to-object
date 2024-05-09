'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objStyle = sourceString.split(';');

  return objStyle.reduce((acc, item) => {
    const prop = item.split(':');

    if (prop.length === 2) {
      const key = prop[0].trim();
      const value = prop[1].trim();

      acc[key] = value;
    }

    return acc;
  }, {});
}

module.exports = convertToObject;
