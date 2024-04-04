'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylePairs = sourceString
    .split(';')
    .map((pair) => pair.trim())
    .filter((pair) => pair !== '');

  const styleObj = {};

  stylePairs.forEach((pair) => {
    const [property, value] = pair.split(':').map((part) => part.trim());

    styleObj[property] = value;
  });

  return styleObj;
}

module.exports = convertToObject;
