'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js)).
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js)).
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const LINE_SEPARATOR = ';';
  const PROPERTY_SEPARATOR = ':';
  const KEY_INDEX = 0;
  const VALUE_INDEX = 1;
  const res = {};
  const propAndVal = sourceString.split(LINE_SEPARATOR);

  propAndVal.forEach(propertyAndValue => {
    const divided = propertyAndValue.split(PROPERTY_SEPARATOR);

    if (divided[KEY_INDEX] !== '' && divided[VALUE_INDEX] !== undefined) {
      const propName = divided[0].trim();
      const propValue = divided[1].trim();

      res[propName] = propValue;
    }
  });

  return res;
}

module.exports = convertToObject;
