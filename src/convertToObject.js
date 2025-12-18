/* eslint-disable prettier/prettier */
'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  return sourceString.split(';').reduce((prevProp, property) => {
    const parts = property.split(':').map((part) => part.trim());

    return parts[0] === '' || parts[1] === undefined
      ? prevProp
      : {
        ...prevProp,
        [parts[0]]: parts[1],
      };
  }, {});
}

module.exports = convertToObject;
