'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const parsedStyles = sourceString
    .split(';')
    .map((declarationSegment) => declarationSegment.trim())
    .filter((declarationSegment) => declarationSegment !== '')
    .reduce((styleObject, declarationSegment) => {
      const [prop, ...valParts] = declarationSegment.split(':');
      const propertyName = prop && prop.trim();
      const propertyValue = valParts.join(':').trim();

      if (propertyName) {
        styleObject[propertyName] = propertyValue;
      }

      return styleObject;
    }, {});

  return parsedStyles;
}

module.exports = convertToObject;
