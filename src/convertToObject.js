'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const styleDeclarations = sourceString.trim().split(';');
  const styleObject = {};

  styleDeclarations.forEach((element) => {
    const [key, value] = element.split(':').map((item) => item.trim());

    styleObject[key] = value;
  });

  return styleObject;
}

module.exports = convertToObject;
