'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString.split(';').reduce((cssProperties, segment) => {
    const cleanSegment = segment.trim();

    if (!cleanSegment) {
      return cssProperties;
    }

    const [property, value] = cleanSegment
      .split(':')
      .map((part) => part.trim());

    if (property && value) {
      cssProperties[property] = value;
    }

    return cssProperties;
  }, {});
}

module.exports = convertToObject;
