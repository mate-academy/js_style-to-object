'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString.length || (!sourceString.includes(':'))) {
    throw new Error('no styles!');
  }

  const getArrStyles = sourceString
    .split(';')
    .map(item => item.split(':')
      .map(itemWithoutSpaces => itemWithoutSpaces.trim()))
    .filter(style => style.length > 1);

  const resultObject = getArrStyles.reduce((obj, [key, value]) => {
    obj[key] = value;

    return obj;
  }, {});

  return resultObject;
}

module.exports = convertToObject;
