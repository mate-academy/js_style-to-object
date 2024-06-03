'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const filteredStylesList = sourceString
    .split(';')
    .filter((style) => /\S/.test(style));
  const resultObject = {};

  for (const styleItem of filteredStylesList) {
    const keyValue = styleItem.split(':').map((item) => item.trim());
    const [property, value] = [...keyValue];

    resultObject[property] = value;
  }

  return resultObject;
}

module.exports = convertToObject;
