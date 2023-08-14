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
  const styles = sourceString
    .split(';')
    .reduce((acc, element) => {
      const property = element.split(':');

      if (property[0].trim().length !== 0) {
        const propertyName = property[0].trim();
        const propertyValue = property[1].trim();

        return {
          ...acc,
          [propertyName]: propertyValue,
        };
      }

      return acc;
    }, {});

  return styles;
}

module.exports = convertToObject;
