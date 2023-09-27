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
  const resultObj = {};
  // const properties = [];
  // const styles = [];
  const stylesArr = sourceString.split(';');

  for (const property of stylesArr) {
    const splittesProperty = property.split(':');

    if (splittesProperty[0].trim().length
    && splittesProperty[1].trim().length > 0) {
      resultObj[splittesProperty[0].trim()] = splittesProperty[1].trim();
      // properties.push(splittesProperty[0].trim());
      // styles.push(splittesProperty[1].trim());
    }
  }

  return resultObj;
}

module.exports = convertToObject;
