'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const object = {};

  const datas = sourceString.split(';').filter(function (el) {
    return el !== '' && el !== ' ';
  });

  datas.map((data) => {
    if (data.length >= 2) {
      const splitData = data.split(':').map((item) => item.trim());

      object[splitData[0]] = splitData[1];
    }
  });

  return object;
}

module.exports = convertToObject;
