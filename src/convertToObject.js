'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const pairs = sourceString.split(';');
  const keyValueArr = pairs.map((pair) => pair.split(':'));

  const result = {};

  keyValueArr.forEach((pair) => {
    const clearKey = pair[0].trim();
    const clearValue = pair[1]?.trim();

    if (!clearKey || !clearValue) {
      return;
    }

    result[clearKey] = clearValue;
  });

  return result;
}

//    key:     value    ;
// key: value,

module.exports = convertToObject;
