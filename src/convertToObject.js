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
  const arrayOfAttributesWithValue = sourceString.split(';');
  const trimmedArrayOfCouples
    = arrayOfAttributesWithValue.map(line => line.trim().split(':'));
  const filtredEmptyElements
    = trimmedArrayOfCouples.filter(value => value.length !== 1);

  const styles = filtredEmptyElements.reduce((prev, attribute) => {
    return {
      ...prev,
      [attribute[0].trim()]: attribute[1].trim(),
    };
  }, {});

  return styles;
}

module.exports = convertToObject;
