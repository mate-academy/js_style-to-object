'use strict';

function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .reduce((cssRulesObject, unparsedRule) => {
      const [property, value]
        = unparsedRule.split(':').map(ruleItem => ruleItem.trim());

      if (property && value) {
        cssRulesObject[property] = value;
      }

      return cssRulesObject;
    }, {});
}

module.exports = convertToObject;
