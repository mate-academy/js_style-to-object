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
  const classes = sourceString.split(';');
  const classesCss = classes.reduce((cls, rule) => {
    const clss = rule.split(':');

    return clss[1]
      ? {
        ...cls,
        [clss[0].trim()]: clss[1].trim(),
      }
      : cls;
  }, {});

  return classesCss;
}

module.exports = convertToObject;
