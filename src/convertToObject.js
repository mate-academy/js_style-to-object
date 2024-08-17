'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const styleObject = {};
  const filtredArr = sourceString.split(';');

  filtredArr.forEach((pair) => {
    const [property, value] = pair.split(':').map((item) => item.trim());

    if (property && value) {
      styleObject[property] = value;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
