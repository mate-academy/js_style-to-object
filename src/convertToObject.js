'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertString = sourceString.split(';').reduce((allStyle, keyValue) => {
    const [key, value] = keyValue.split(':').map((space) => space.trim());

    if (key && value) {
      allStyle[key] = value;
    }

    return allStyle;
  }, {});

  // console.log('convertString: ', convertString);
  // console.log('sourceString: ', sourceString, typeof sourceString);

  return convertString;
}

module.exports = convertToObject;
