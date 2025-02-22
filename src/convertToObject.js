'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resultObject = {};
  const arrayOfStyles = sourceString
    .split(';')
    .filter((style) => style.trim().length > 0);

  arrayOfStyles.forEach((style) => {
    const [key, value] = style.split(':').map((s) => s.trim());

    if (key && value) {
      resultObject[key] = value;
    }
  });

  return resultObject;
}

module.exports = convertToObject;
