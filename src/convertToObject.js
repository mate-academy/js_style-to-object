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
  const splited = sourceString.split(';');
  const obj = {};

  splited.forEach(style => {
    const styles = style.split(':');

    if (styles.length > 1) {
      const keyName = styles[0].trim();
      const value = styles[1].trim();

      obj[keyName] = value;
    }
  });

  return obj;
}

module.exports = convertToObject;
