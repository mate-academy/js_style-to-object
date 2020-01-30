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
  const obj = {};
  const splited = sourceString.split(',');

  for (let i = 0; i < splited.length; i++) {
    const splited2 = splited[i].split(':');
    let [property, value] = [...splited2];

    if (property === undefined || value === undefined) {
      continue;
    }
    property = property.trim();
    value = value.trim();
    obj[property] = value;
  }

  return obj;
}

module.exports = convertToObject;
