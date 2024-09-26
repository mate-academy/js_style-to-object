'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString.split(';');

  const styleKeyValuePairs = stylesArray.map((style) => style.split(':'));

  const validStylePairs = styleKeyValuePairs.filter((pair) => pair.length > 1);

  const stylesObj = validStylePairs.reduce((obj, [key, value]) => {
    obj[key.trim()] = value.trim();

    return obj;
  }, {});

  return stylesObj;
}

module.exports = convertToObject;
