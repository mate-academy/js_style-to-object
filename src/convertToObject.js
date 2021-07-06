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
  const attributesWithValue = sourceString.split(';');
  const trimmedCouples
    = attributesWithValue.map(line => line.trim().split(':'));
  const filtredEmptyElements
    = trimmedCouples.filter(value => value.length !== 1);

  const styles = filtredEmptyElements.reduce((prev, [attribute, value]) => {
    return {
      ...prev,
      [attribute.trim()]: value.trim(),
    };
  }, {});

  return styles;
}

module.exports = convertToObject;
