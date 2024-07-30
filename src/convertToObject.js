'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // make an array with strings of sourceString
  const properties = sourceString.split(';').filter((str) => str !== '');

  // make an object with properties
  const propObj = {};

  properties.forEach((str) => {
    const prop = str
      .trim()
      .split(':')
      .map((val) => val.trim());

    propObj[prop[0]] = prop[1];
  });

  return propObj;
}

module.exports = convertToObject;
