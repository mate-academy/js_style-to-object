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
  const objStyle = {};

  const styles = sourceString.split(';').map(
    str => str
      .replace(/ +/g, ' ')
      .trim()
      .split(':')
  );

  styles.forEach(prop => {
    if (prop[0] && prop[1]) {
      objStyle[prop[0].trim()] = prop[1].trim();
    }
  });

  return objStyle;
}

module.exports = convertToObject;
