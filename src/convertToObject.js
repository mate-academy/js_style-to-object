'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object
 * where CSS properties are keys
 * and values are the
 * values of related CSS proper
 * ties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const styleObject = {};
  const arrayOfProperties = sourceString.split(';');
  const arrayWithoutWhitespaces = arrayOfProperties.filter((property) =>
    property.includes(':')
  );

  arrayWithoutWhitespaces.forEach((element) => {
    const splittedPair = element.split(':');
    const pairProperty = splittedPair[0].trim();
    const pairValue = splittedPair[1].trim();

    styleObject[pairProperty] = pairValue.trim();
  });

  return styleObject;
}

module.exports = convertToObject;
