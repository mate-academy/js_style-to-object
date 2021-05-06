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
  const objCss = {};
  let properties = sourceString.split(';');

  properties = properties.map(
    (prop) => prop.split(':')
  );

  let items = properties.map(
    (item) => item.map(
      (string) => string.trim()
    )
  );

  items = items.filter(
    (item) => item.every(
      (string) => string.length !== 0
    )
  );

  items.forEach(
    (item) => {
      objCss[item[0]] = item[1];
    }
  );

  return objCss;
}

module.exports = convertToObject;
