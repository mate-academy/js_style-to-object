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
  const result = {};
  const sourceStringSplitInArray = sourceString.split(';');
  const ArrayOfSubArraysPropValue = sourceStringSplitInArray.map(PropValue =>
    PropValue.split(':'));

  function objectFiller(el) {
    if (el.length < 2) {
      return;
    }
    result[el[0].trim()] = el[1].trim();
  }

  ArrayOfSubArraysPropValue.forEach(objectFiller);

  return result;
}

module.exports = convertToObject;
