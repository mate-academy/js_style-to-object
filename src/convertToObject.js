'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here

  // create an empty object
  const result = {};

  // split the string
  const splitedString = sourceString.split(';'); // has crated an array

  // iterate the array
  splitedString.forEach((stringOfArray) /* name of keyword is up to you */ => {
    // check if the word exists before colon and skip if doesnt exist
    if (stringOfArray.indexOf(':') > 0) {
      // cut the word before colon with .slice()
      // and skip any spaces before and after the word with .trim()
      const key = stringOfArray.slice(0, stringOfArray.indexOf(':')).trim();
      // cut the word after colon with .slice()
      // and the same way with spaces by .trim()
      const value = stringOfArray.slice(stringOfArray.indexOf(':') + 1).trim();

      // add property with value to the object wich was created before
      result[key] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
