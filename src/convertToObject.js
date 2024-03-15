'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  // const result = {};
  // const properties = sourceString
  //   .split(';')
  //   .map((property) => property.trim())
  //   .filter((property) => property.length > 0);

  // properties
  //   .map((property) => property.split(':'))
  //   .forEach((property) => {
  //     const key = property[0].trim();
  //     const value = property[1].trim();

  //     result[key] = value;
  //   });

  // return result;

  return sourceString
    .split(';')
    .map((property) => property.trim())
    .filter((property) => property.length > 0)
    .reduce((obj, property) => {
      const [key, value] = property.split(':').map((el) => el.trim());

      obj[key] = value;

      return obj;
    }, {});
}

module.exports = convertToObject;
