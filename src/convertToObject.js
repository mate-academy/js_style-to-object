'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const rules = sourceString.split(';').filter(Boolean);

  return rules.reduce((acc, item) => {const [key, value] = item.split(':');
    acc[key] = value;
    return acc }, {});
}

module.exports = convertToObject;
