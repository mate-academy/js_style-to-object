'use strict';

function convertToObject(sourceString) {
  const sourceArr = sourceString.split(';\n');
  const sourceObj = {};

  sourceArr.map(property => {
    if (property !== '') {
      const propArray = property.split(':');
      const propertyName = propArray[0].trim();

      if (propArray[1] !== undefined) {
        const propertyValue = propArray[1].trim();

        sourceObj[propertyName] = propertyValue;
      }
    }
  });

  return sourceObj;
}

module.exports = convertToObject;
