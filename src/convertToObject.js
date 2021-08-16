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
  const stylesObject = {};

  const breakToListStyles = sourceString.split(';')
    .map(style => style.split(':')
      .map(prop => prop.trim())
    ).filter(item => item.length > 1);

  for (const properties of breakToListStyles) {
    const key = properties[0];
    const values = properties[1];

    stylesObject[key] = values;
  }

  return stylesObject;
}

module.exports = convertToObject;
