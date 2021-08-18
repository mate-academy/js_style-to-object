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
  const res = sourceString.split(';').map(el => el.split(':'));

  const clear = res.map(element =>
    element.map(part => part.trim())
  );

  const filtered = clear.filter((item) => (
    item.length > 1
  ));

  return Object.fromEntries(filtered);
}

module.exports = convertToObject;
