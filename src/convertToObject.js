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
  const filteredArr = sourceString
    .split(';')
    .filter(item => (!!item.trim()))
    .map(el => el.split(':'));

  const cssObject = filteredArr.reduce((acc, styles) => {
    const key = styles[0].trim();
    const value = styles[1].trim();

    return {
      ...acc,
      [key]: value,
    };
  }, {});

  return cssObject;
}

module.exports = convertToObject;
