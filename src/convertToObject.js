'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrOfProperties
    = sourceString.split(';')
      .map((property) => {
        if (property.indexOf(':') >= 0) {
          const convertedProp = property.split(':');

          convertedProp[0] = convertedProp[0].trim();
          convertedProp[1] = convertedProp[1].trim();

          return convertedProp;
        }
      });

  const objOfProperties = arrOfProperties.reduce((prev, prop) => {
    if (prop === undefined) {
      return {
        ...prev,
      };
    }

    return {
      ...prev, [prop[0]]: prop[1],
    };
  }, {});

  return objOfProperties;
}

module.exports = convertToObject;
