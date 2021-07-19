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
  const cssArr = sourceString.split(';')
    .map(el => el.split(':')
      .map(prop => prop.trim()));

  const cssObj = cssArr.filter(elem => elem.length === 2)
    .reduce((prev, prop) => {
      return {
        ...prev,
        [prop[0]]: prop[1],
      };
    }, {});

  return cssObj;
}

module.exports = convertToObject;
