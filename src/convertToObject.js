'use strict';

/**
 * Implement convertToObject function:
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';');
  const resultObj = {};

  styles.forEach(style => {
    const [ property, value ] = style
      .split(':').map(string => string.trim());

    if (property && value) {
      resultObj[property] = value;
    }
  });

  return resultObj;
}

module.exports = convertToObject;
