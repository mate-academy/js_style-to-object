'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const strSplitted = sourceString.split(';').map((str) => {
    return str.trim().replaceAll('\n', '');
  });

  const strFinal = [];

  strSplitted.forEach((item) => {
    if (item !== '') {
      const itemSplit = item.split(':');
      const pair = [
        itemSplit[0].trim(),
        itemSplit[1].trim().replaceAll(/,/g, ',\n'),
      ];

      strFinal.push(pair);
    }
  });

  const res = strFinal.reduce((obj, pair) => {
    const [key, value] = pair;

    return { ...obj, [key]: value };
  }, {});

  return res;
}

module.exports = convertToObject;
