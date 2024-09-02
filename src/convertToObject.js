'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleDeclarations = sourceString.trim().split(/\s*;\s*/);

  const styleObject = {};

  const styleArray = styleDeclarations.map((item) => item.split(':'));

  styleArray.map((item) => {
    if (item.length < 2) {
      return 0;
    }

    const key = item[0].trim();
    const value = item[1].trim();

    styleObject[key] = value;
  });

  return styleObject;
}

module.exports = convertToObject;
