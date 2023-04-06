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
  // write your code here
  const style = {};
  let dividedProperties = sourceString.split(';');
  const propertiesSplited = [];

  dividedProperties = dividedProperties.filter(
    element => element.trim().length > 3
  );

  dividedProperties.forEach(
    element => propertiesSplited.push(element.split(':'))
  );

  const propertiesFixed = propertiesSplited.filter(
    element => element[1] !== undefined
  );

  propertiesFixed.forEach(
    element => (style[element[0].trim()] = element[1].trim())
  );
  // for (let i = 0; i < propertiesSplited.length; i++) {
  //   style[propertiesFixed[i][0].trim()] = propertiesFixed[i][1].trim();
  // }

  return style;
}

module.exports = convertToObject;

// for (let i = 0; i < propertiesSplited.length; i++) {
//   if (propertiesSplited[i][1] !== undefined) {
//     style[propertiesSplited[i][0].trim()] = propertiesSplited[i][1].trim();
//   }
// }
