'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let result = sourceString.split(';');

  result = result.filter((item) => item !== '');
  result = result.map((item) => item.split(':').map((elem) => elem.trim()));

  result = result.reduce((acc, item) => {
    acc[item[0]] = item[1];

    return acc;
  }, {});

  return result;
}

module.exports = convertToObject;
