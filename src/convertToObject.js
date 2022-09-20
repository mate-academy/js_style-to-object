'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  let stylesArray = sourceString.split('\n');

  stylesArray = stylesArray.filter(style => style.length > 3);

  stylesArray.forEach(element => {
    let newElement = element
      .substring(0, element.length - 1)
      .split(':');

    newElement[0] = newElement[0].trim();
    newElement[1] = newElement[1].trim();

    newElement = newElement.join(':');

    const index = newElement.indexOf(':');
    const property = newElement.slice(0, index);
    const propertyValue = newElement.slice(index + 1);

    stylesObject[property] = propertyValue;
  });

  return stylesObject;
}

module.exports = convertToObject;
