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
const convertToObject = (sourceString) => {
  const array = sourceString
    .split(';')
    .filter(style => style.length > 5)
    .map(style => style.split(':'));

  const styles = array.reduce((object, [key, value]) => ({
    ...object, [key.trim()]: value.trim(),
  }), {});

  return styles;
};

module.exports = convertToObject;
