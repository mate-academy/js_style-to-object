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
  const styles = sourceString
    .split(';')
    .map(prop => prop.trim())
    .filter(prop => prop !== '')
    .map(prop => prop.split(':').map(value => value.trim()));

  const properties = styles.reduce((prev, prop) => {
    return {
      ...prev,
      [prop[0]]: prop[1],
    };
  }, {});

  return properties;
}

module.exports = convertToObject;
