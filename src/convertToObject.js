'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // const result = sourceString
  //   .split(';')
  //   .map((str) => str.split(':'))
  //   .map((str) => str.map((value) => value.trim()))
  //   .map((str) => str.filter((value) => value !== ''))
  //   .filter((str) => str.length !== 0)
  //   .reduce((object, item) => {
  //     object[item[0]] = item[1];

  //     return object;
  //   }, {});

  // return result;
  return sourceString
    .split(';')
    .map((str) => str.split(':').map((value) => value.trim()))
    .filter(([key, value]) => key && value)
    .reduce((object, [key, value]) => ({ ...object, [key]: value }), {});
}

module.exports = convertToObject;
