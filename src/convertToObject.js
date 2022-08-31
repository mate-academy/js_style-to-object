'use strict';

/**
 * Implement convertToObject function:
 *

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here

  const resObj = sourceString.replace(/\s+/g, ' ')
    .split(';').filter(function(entry) {
      return /\S/.test(entry);
    }).reduce((obj, item) => {
      const [key, value] = item.split(':').map(element => element.trim());

      obj[key] = value;

      return obj;
    }, {});

  return resObj;
}

module.exports = convertToObject;
