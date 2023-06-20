'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const finalResult = {};
  const separator = /\s*(?:;|$)\s*/;

  const tempResult1 = sourceString.split(separator)
    .filter(element => element.length > 0);

  for (const a of tempResult1) {
    const tempElement = a.replace(/(\r\n|\n|\r)/gm, '').trim();
    const indexOfDD = tempElement.indexOf(':');

    finalResult[`${tempElement.slice(0, indexOfDD).trim()}`]
    = tempElement.slice(indexOfDD + 1, tempElement.length).trim();
  }

  return finalResult;
}

module.exports = convertToObject;
