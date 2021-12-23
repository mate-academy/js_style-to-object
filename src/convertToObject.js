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
  const tagValue = sourceString.split(';');
  const tagWithValue = tagValue.map(item => item.split(':'));
  const css = {};

  tagWithValue.map(item => {
    item[0] = item[0].trim();

    if (item[1]) {
      item[1] = item[1].trim();
      css[item[0]] = item[1];
    }

    return item;
  });

  return css;
}

module.exports = convertToObject;
