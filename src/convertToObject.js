'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const styleKeys = trimmedProperties(sourceString, /(.+?)(?=:)/g);
  const styleValues = trimmedProperties(sourceString, /(?<=:)(.+?)(?=;)/g);

  function trimmedProperties(array, pattern) {
    return array.match(pattern)
      .map(item => item.trim())
      .filter(item => !!item);
  };

  styleKeys.forEach((item, i) => {
    result[styleKeys[i]] = styleValues[i];
  });

  return result;
}

module.exports = convertToObject;
