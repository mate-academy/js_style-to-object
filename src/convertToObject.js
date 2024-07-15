'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString.split(';').reduce((resultObj, segment) => {
    const cleanSegment = segment.trim();

    if (!cleanSegment) {
      return resultObj;
    }

    const [key, data] = cleanSegment.split(':').map((part) => part.trim());

    if (key && data) {
      resultObj[key] = data;
    }

    return resultObj;
  }, {});
}

module.exports = convertToObject;
