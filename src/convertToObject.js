'use strict';

function convertToObject(sourceString) {
  return sourceString.split(';')
    .filter(Boolean)
    .reduce((stylesObject, declaration) => {
      const [property, value] = declaration.split(':').map(part => part.trim());

      if (property && value) {
        stylesObject[property] = value;
      }

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
