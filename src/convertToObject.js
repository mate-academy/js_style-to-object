'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles ([stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const srcCssStyles = sourceString
    .split(';')
    .filter(property => property.includes(':'))
    .reduce((srcObj, property) => {
      const propertySplit = property.split(':');
      const propertyName = propertySplit[0].trim();
      const propertyValue = propertySplit[1].trim();

      srcObj[propertyName] = propertyValue;

      return srcObj;
    }, {});

  return srcCssStyles;
}

module.exports = convertToObject;
