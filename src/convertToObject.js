'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString.length === 0) {
    return {};
  }

  const replacedStyles = sourceString;

  let newStyles = '';

  for (let i = 0; i < replacedStyles.length; i++) {
    newStyles += replacedStyles[i];
  }
  newStyles = newStyles.trim();

  const stylesArray = newStyles.split(';');
  const arr = [];

  for (let i = 0; i < stylesArray.length; i++) {
    if (stylesArray[i].trim().length !== 0) {
      arr.push(stylesArray[i].replace('\n', ''));
    }
  }

  const resultArray = [];

  for (let i = 0; i < arr.length; i++) {
    const part = arr[i].split(': ');

    resultArray.push(part);
  }

  const result = resultArray.reduce((prev, item) => {
    return {
      ...prev,
      [item[0].trim()]: item[1].trim(),
    };
  }, {});

  return result;
}

module.exports = convertToObject;
