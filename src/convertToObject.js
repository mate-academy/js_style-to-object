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
  const splitedSourceString = sourceString.split(';');

  const callback = (previousValue, currentValue) => {
    const key = (currentValue.substr(0, currentValue.indexOf(':'))).trim();
    const value = (currentValue.substr(currentValue.indexOf(':') + 1)).trim();

    return {
      ...previousValue,
      [key]: value,
    };
  };

  const convertedObject = splitedSourceString.reduce(callback, {});

  delete convertedObject[''];

  return convertedObject;
}

module.exports = convertToObject;
