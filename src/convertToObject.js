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
  const arrayOfProperties = sourceString.split(';');
  const separatePropertyValue = arrayOfProperties.map(row => row.split(':'));
  const styles = {};

  separatePropertyValue.map(row => {
    row[0] = row[0].trim();

    if (row[1]) {
      row[1] = row[1].trim();
      styles[row[0]] = row[1];
    }

    return row;
  });

  return styles;
}

module.exports = convertToObject;
