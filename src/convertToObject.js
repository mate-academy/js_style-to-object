'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const formatedCSSData = {};
  const splitedSource = sourceString.split(';');

  splitedSource
    .map((item) => {
      const formatedPropAndValueObject = item
        .split(':')
        .map((elem) => elem.trim());

      return formatedPropAndValueObject;
    })
    .forEach(([property, value]) => {
      Object.assign(formatedCSSData, { [property]: value });
    });

  return formatedCSSData;
}

module.exports = convertToObject;
