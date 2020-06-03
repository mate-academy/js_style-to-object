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
  const styles = sourceString.split(';');

  styles.forEach(item => {
    const style = item.split(':');

    if (style[1]) {
      result[style[0].trim()] = style[1].trim();
    }
  });

  return result;
}

module.exports = convertToObject;
