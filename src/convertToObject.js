'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.trim().split('\n');
  const stylesObject = {};

  for (const item of styles) {
    const stylesPart = item.trim().split(/[ ]+/);
    const validParametrs = [];
    const [property, ...rest] = stylesPart;

    if (property.length <= 1) {
      continue;
    }

    for (const parametr of rest) {
      if (parametr !== ';' && parametr !== ':') {
        validParametrs.push(parametr);
      }
    }

    const joinedParametrs = validParametrs.join(' ');
    const lastChar = joinedParametrs.charAt(joinedParametrs.length - 1);
    const validProperty = property.charAt(property.length - 1) === ':'
      ? property.slice(0, -1)
      : property;

    stylesObject[validProperty] = lastChar === ';'
      ? joinedParametrs.slice(0, -1)
      : joinedParametrs;
  }

  return stylesObject;
}

module.exports = convertToObject;
