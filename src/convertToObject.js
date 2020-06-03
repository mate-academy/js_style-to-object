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
  const objectWithCss = {};
  const styles = sourceString.split(';');

  styles.forEach(style => {
    const properties = style.split(':');

    if (properties[1]) {
      objectWithCss[properties[0].trim()] = properties[1].trim();
    }
  });

  return objectWithCss;
}

module.exports = convertToObject;
