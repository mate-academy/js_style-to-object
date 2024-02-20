'use strict';

function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .reduce((cssObject, rule) => {
      const [property, value] = rule.split(':').map((part) => part.trim());

      if (property && value) {
        cssObject[property] = value;
      }

      return cssObject;
    }, {});
}

module.exports = convertToObject;
