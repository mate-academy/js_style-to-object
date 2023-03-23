'use strict';

function convertToObject(sourceString) {
  return sourceString.split(';')
    .map(style => style.trim().split(':'))
    .reduce((objectStyles, [property, value]) => {
      if (property && value) {
        objectStyles[property.trim()] = value.trim();
      }

      return objectStyles;
    }, {});
}

module.exports = convertToObject;
