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
  const styleCss = sourceString.split(';').filter(
    (style) => style.includes(':')).map(
    (style) => style.split(':'));

  const addProperty = (object, [key, value]) => {
    return {
      ...object,
      [key.trim()]: value.trim(),
    };
  };

  return styleCss.reduce(addProperty, {});
}

module.exports = convertToObject;
