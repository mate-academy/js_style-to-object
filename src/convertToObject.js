/* eslint-disable quotes */
"use strict";

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const styleObg = {};
  const stylePairs = sourceString.trim().split(";");

  stylePairs.forEach((style) => {
    const [key, value] = style.split(":").map((part) => part.trim());

    if (key && value) {
      styleObg[key] = value;
    }
  });

  return styleObg;
}

module.exports = convertToObject;
