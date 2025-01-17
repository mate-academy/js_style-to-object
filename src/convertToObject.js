'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayOfCss = sourceString.split(';');
  const trimingAndFiltering = arrayOfCss
    .filter((item) => item.trim() !== '')
    .map((item) => item.trim());

  const dividing = trimingAndFiltering.map((item) => {
    const parts = item.split(':');
    const trimmedParts = parts.map((part) => part.trim());

    return trimmedParts;
  });
  // variant 1
  // const objecting = {};

  // dividing.forEach(([key, value]) => {
  //   objecting[key] = value;
  // });

  // variant 2

  const objecting = dividing.reduce((acc, [key, value]) => {
    acc[key] = value;

    return acc;
  }, {});

  // variant 3
  // const styleObject = Object.fromEntries(keyValuePairs);

  return objecting;
}

// const obj = {};
// array.forEach(([key, value]) => {
//   obj[key] = value;
// });

module.exports = convertToObject;
