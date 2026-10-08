'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssObjectList = {};
  const cssArrayList = sourceString.split(';');

  cssArrayList.forEach((characteristic) => {
    const [property, value] = characteristic
      .split(':')
      .map((item) => item.trim());

    if (value !== '' && value !== undefined) {
      cssObjectList[property] = value;
    }
  });

  return cssObjectList;
}

module.exports = convertToObject;
