'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const normalizedString = sourceString.replace(/;+/g, ';').replace(/;$/, '');

  const stringToArr = normalizedString.split(';');
  const resultingObject = {};

  stringToArr.map((prop) => {
    const [key, ...valueParts] = prop.split(':');

    if (key && valueParts.length > 0) {
      resultingObject[key.trim()] = valueParts.join().trim();
    }
  });

  return resultingObject;
}

module.exports = convertToObject;
