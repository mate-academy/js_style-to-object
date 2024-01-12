'use strict';

function convertToObject(sourceString) {
  const stylesObject = sourceString.split(';')
    .reduce((obj, rules) => {
      const ruleEntities = rules.split(':').map(rule => rule.trim());

      (ruleEntities.length === 2) && (obj[ruleEntities[0]] = ruleEntities[1]);

      return obj;
    }, {});

  return stylesObject;
}

module.exports = convertToObject;
