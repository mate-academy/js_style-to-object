'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const distributedByKeyValue = sourceString
    .split(';')
    .map((eachValue) => eachValue.trim())
    .map((eachValue) => eachValue + ';')
    .map((item) => item.split(':'));

  const trimmedValues = distributedByKeyValue.map((item) => {
    return item.map((eachValue) => eachValue.trim());
  });

  const eachSeparateProperty = trimmedValues.filter(checkIfEmpty);

  const finalFilteredString = eachSeparateProperty.reduce(
    (previous, property) => {
      const eachProperty = property.map((Property) => {
        const ourDividedProp = Property.split('');

        return ourDividedProp.join('');
      });

      return previous + `${eachProperty[0]}: ${eachProperty[1]},`;
    },
    '',
  );

  const result = {};

  finalFilteredString
    .replaceAll(';,', ';')
    .split(';')
    .forEach((property) => {
      const splitProperty = property.split(': ');

      result[splitProperty[0]] = splitProperty[1];
    });

  delete result[''];

  return result;
}

function checkIfEmpty(property) {
  const propertyValue = property.filter((eachValue) => eachValue.length);

  if (propertyValue.length && propertyValue[0] !== ';') {
    return true;
  }

  return false;
}

module.exports = convertToObject;
