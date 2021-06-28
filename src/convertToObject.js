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

  const callback = (prev, item) => {
    return {
      ...prev,
      [(item.substr(0, item.indexOf(':'))).trim()]:
        (item.substr(item.indexOf(':') + 1)).trim(),
    };
  };

  const convertedObject = splitedSourceString.reduce(callback, {});

  delete convertedObject[''];

  return convertedObject;
}

module.exports = convertToObject;
