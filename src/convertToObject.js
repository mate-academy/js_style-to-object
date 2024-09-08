'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleDeclarations = sourceString.split(';');

  const resultObject = styleDeclarations.reduce((acumulator, item) => {
    const element = item.split(':');
    const elementName = element[0]?.trim();
    const elementValue = element[1]?.trim();

    if (elementName && elementValue) {
      acumulator[elementName] = elementValue;
    }

    return acumulator;
  }, {});

  return resultObject;
}
module.exports = convertToObject;
