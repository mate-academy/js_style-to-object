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

  const styleToArray = sourceString
    .split(';\n')
    .filter(name => name.length > 0);
  const newArrayOfStyles = [];

  for (let i = 0; i < styleToArray.length; i++) {
    if (styleToArray[i].length > 5) {
      const items = styleToArray[i].split(': ');

      newArrayOfStyles.push(items);
    }
  }

  for (const items of newArrayOfStyles) {
    const chank = items[0].split(' ')
      .filter(name => name.length > 0);

    if (chank.length > 1) {
      items[0] = chank[1];
    } else {
      items[0] = chank[0];
    }

    const value = items[1].split(' ')
      .filter(name => name.length > 0);

    items[1] = value.join(' ');

    stylesObject[items[0]] = items[1];
  }

  return stylesObject;
}

module.exports = convertToObject;
