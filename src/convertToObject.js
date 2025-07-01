'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString.split(';').forEach((newObj) => {
    const objIndex = newObj.indexOf(':');

    if (objIndex !== -1) {
      const objKey = newObj.slice(0, objIndex).trim();
      const objValue = newObj.slice(objIndex + 1).trim();

      result[objKey] = objValue; // <-- this creates the object key/value
    }
  });

  return result;
}

const stringo = 'background-color: red; font-size: 16px; margin-top: 10px';

convertToObject(stringo);

module.exports = convertToObject;
