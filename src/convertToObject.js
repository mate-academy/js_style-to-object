'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
 function convertToObject(sourceString) {
  const result = {}

  const firstSplit = sourceString.split(';')
  const secondSplit = firstSplit.map((i) => i.split(':'));

  const arrTrim = secondSplit.map((i) => i.map((n) => n.trim()));

  arrTrim.forEach((item) => {
    if (item.length === 2) {
      result[item[0]] = item[1];
    }
  });

  return result;
}


module.exports = convertToObject;
