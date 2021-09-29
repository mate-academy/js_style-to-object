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
  const styles = {};

  splited.forEach(style => {

    const splitedStyle = style.split(':');

    if (splitedStyle.length > 1) {
      const keyName = splitedStyle[0].trim();
      const value = splitedStyle[1].trim();

      styles[keyName] = value;
    }
  });

  return styles;
}

module.exports = convertToObject;
