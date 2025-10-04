'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  // write your code here
  const res = {};
  
  sourceString.split(';').map(part => part.trim()).filter(Boolean).forEach(part => {
    const [key, ...valueParts] = part.split(':');
    if (key && valueParts.length > 0) {
      const value = valueParts.join(':').trim();
      res[key.trim()] = value;
    }
  });

  return res;
}

module.exports = convertToObject;
