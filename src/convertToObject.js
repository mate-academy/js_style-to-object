'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const masivStrings = sourceString.split('\n');

  const onlyWithProperties = masivStrings.filter((string) => string.length > 3);

  const callback = (string) => {
    const result = string.split(':');

    return result;
  };

  const keyWithProrertiesInMasiv = onlyWithProperties.map(callback);

  const callb = (prev, masiv) => {
    const newM = [];

    for (const key in masiv) {
      const str = masiv[key];
      const stringWithoutSpaces = str.trim();

      newM.push(stringWithoutSpaces);
    }

    const first = newM[0];
    const second = newM[1];
    const x = second.slice(0, -1);
    const y = x.trim();

    return {
      ...prev,
      [first]: y,
    };
  };

  const newObj = keyWithProrertiesInMasiv.reduce(callb, {});

  return newObj;
}

module.exports = convertToObject;
