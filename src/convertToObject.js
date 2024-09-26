'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesCss = {};

  sourceString.split(';').forEach(item => {
    if (item.split(':')[1] === undefined) {
      return false;
    }
    stylesCss[item.split(':')[0].trim()] = item.split(':')[1].trim();
  });

  return stylesCss;
}

module.exports = convertToObject;
