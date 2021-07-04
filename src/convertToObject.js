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
  const styles = sourceString.split(';');

  const getObject = function(prev, style) {
    const propertyAndValue = style.split(':');
    const result = (propertyAndValue[1] !== undefined)
      ? {
        ...prev,
        [propertyAndValue[0].trim()]: propertyAndValue[1].trim(),
      }
      : { ...prev };

    return result;
  };

  const object = styles.reduce(getObject, {});

  return object;
}

module.exports = convertToObject;
