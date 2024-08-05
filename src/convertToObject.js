'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // if the sourceString is empty return an empty object
  if (!sourceString) {
    return {};
  }

  // remove all tab and new line characters
  // replaceAll doesn't work on this version of Node
  const clearedString = sourceString.replace(/[\t\n]/g, '');
  const stylesArr = clearedString.split(';');
  const stylesObj = {};

  stylesArr.forEach((style) => {
    let [name, value] = style.split(':');

    // name and value can be empty or undefined
    if (name && value) {
      name = name.trim();
      value = value.trim();
      // add a new line character where it is needed
      value = value.replace(/,/g, ',\n');
      stylesObj[name] = value;
    }
  });

  return stylesObj;
}

module.exports = convertToObject;
