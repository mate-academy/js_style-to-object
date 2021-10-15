'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let sourceArray = [];

  sourceArray = sourceString.split(';');

  let trimmedSourceArray = [...sourceArray];

  trimmedSourceArray = 
  trimmedSourceArray.map(line =>
    line.split('').slice(2).join('').trim());

  let filteredProperties = [...trimmedSourceArray];

  filteredProperties = filteredProperties.filter(x => x.length > 0);

  let arrayOfProperties = [...filteredProperties];

  arrayOfProperties = 
  arrayOfProperties.map(property =>
    property.split(':').map(x => x.trim()));

  const resultObject = {};

  arrayOfProperties.map(element => {
    resultObject[element[0]] = element[1];
  });

  return resultObject;
}

module.exports = convertToObject;
