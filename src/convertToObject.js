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
  // write your code here
  const unfilteredList = sourceString.split('\n');

  unfilteredList.forEach((property, i, list) => {
    list[i] = property.trim().replace(/;/g, '');
  });

  const filteredList = unfilteredList.filter(property => {
    return property.length > 0;
  });

  const stylesList = filteredList.reduce((prev, property) => {
    const splittedProperty = property.split(':');

    prev[splittedProperty[0].trim()] = splittedProperty[1].trim();

    return prev;
  }, {});

  return stylesList;
}

module.exports = convertToObject;
