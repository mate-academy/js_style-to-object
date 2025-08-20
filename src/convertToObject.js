'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  let styleObject = {};
  const styleArray = sourceString.trim().split(';');

  styleObject = Object.fromEntries(
    styleArray.map((couple) => couple.split(':').map((item) => item.trim())),
  );

  return styleObject;
}

module.exports = convertToObject;
