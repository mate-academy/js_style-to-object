'use strict';

function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .reduce((CSSObject, unparsedRule) => {
      const [property, value]
        = unparsedRule.split(':').map(pair => pair.trim());

      if (property && value) {
        CSSObject[property.toString()] = value.toString();
      }

      return CSSObject;
    }, {});
}

module.exports = convertToObject;
