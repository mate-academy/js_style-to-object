'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';')
    .map(style => style.trim())
    .filter(style => style !== '');
  const result = {};

  styles.forEach(style => {
    const stylePropertyAndValue = style.split(':').map(item => item.trim());
    const styleProperty = stylePropertyAndValue[0];
    const styleValue = stylePropertyAndValue[1];

    result[styleProperty] = styleValue;
  });

  return result;
}

module.exports = convertToObject;
