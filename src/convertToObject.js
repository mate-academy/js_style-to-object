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
  const styles = sourceString.trim().split(';');
  styles.pop();
  const res = {};

  styles.forEach(element => {
    const property = element.split(':');
    res[property[0].trim()] = property[1].trim();
  });

  return res;
}

module.exports = convertToObject;
