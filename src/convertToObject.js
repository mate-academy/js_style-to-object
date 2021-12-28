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
  const styles = sourceString.split(';');

  const allStyles = styles.map(style => style.split(':'));
  const styleContainer = {};

  allStyles.map(item => {
    item[0] = item[0].trim();

    if (item[0].length < 2) {
      return;
    }

    if (item[1]) {
      item[1] = item[1].trim();

      if (item[1].length < 2) {
        item[1] = '0';
      }

      styleContainer[item[0]] = item[1];
    } else {
      styleContainer[item[0]] = item[0];
    }

    return item;
  });

  return styleContainer;
}

module.exports = convertToObject;
