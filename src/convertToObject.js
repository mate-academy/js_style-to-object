'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString) {
    return {};
  }

  const arrayOfStyles = sourceString
    .trim()
    .split(';')
    .filter((el) => el.trim().length > 0 && !el.includes(';'));
  const stylesObject = {};

  arrayOfStyles.forEach((el) => {
    const [key, value] = el.split(':').filter((elem) => elem.length > 0);

    stylesObject[key.trim()] = value.trim();
  });

  return stylesObject;
}

module.exports = convertToObject;
