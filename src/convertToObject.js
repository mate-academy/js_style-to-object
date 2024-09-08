'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourcesArr = sourceString.split(';');

  const resultObj = sourcesArr.reduce((acumulator, item) => {
    const element = item.split(':');
    const elementName = element[0]?.trim();
    const elementValue = element[1]?.trim();

    if (elementName && elementValue) {
      acumulator[elementName] = elementValue;
    }

    return acumulator;
  }, {});

  return resultObj;
}
module.exports = convertToObject;
