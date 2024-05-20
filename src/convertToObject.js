'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
const convertToObject = (sourceString) => {
  const splittedSource = sourceString.split(';');
  const resultObj = {};

  for (const element of splittedSource) {
    const resultArray = element.replace(/[[\n\t]/g, '').split(':');

    if (resultArray.length === 2) {
      resultObj[resultArray[0].trim()] = resultArray[1]
        .replace(/[',']/g, ',\n')
        .trim();
    }
  }

  return resultObj;
};

module.exports = convertToObject;
