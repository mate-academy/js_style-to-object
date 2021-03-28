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
  const props = sourceString.split(';').filter((prop) => prop.includes(':'));

  return props.reduce((object, propStr) => {
    const colon = propStr.indexOf(':');
    const prop = propStr.slice(0, colon).trim();
    const value = propStr.slice(colon + 1).trim();

    return {
      ...object,
      [prop]: value,
    };
  }, {});
}

module.exports = convertToObject;
