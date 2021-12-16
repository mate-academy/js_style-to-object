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
  const result = {};
  const styles = sourceString.replace(/(\r\n|\n|\r)/gm, '').split(';');
  const newStyles = styles.map(a => a.trim()).filter(a => a !== '');

  for (const style of newStyles) {
    result[style.split(':')[0].trim()] = style.split(':')[1].trim();
  }

  return result;
}

module.exports = convertToObject;
