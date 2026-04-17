'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const pairs = sourceString.split(';');
  const keyValuePairs = pairs.map((pair) => pair.split(':'));

  const stylesMap = {};

  keyValuePairs.forEach((pair) => {
    const clearKey = pair[0].trim();
    const clearValue = pair[1]?.trim();

    if (!clearKey || !clearValue) {
      return;
    }

    stylesMap[clearKey] = clearValue;
  });

  return stylesMap;
}

//    key:     value    ;
// key: value,

module.exports = convertToObject;
