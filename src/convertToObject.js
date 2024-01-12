'use strict';

function convertToObject(sourceString) {
  const styleRulesArray = sourceString.split(';')
    .map(fullRule => fullRule.split(':'))
    .map(rule => rule.map(partOfTheRule => partOfTheRule.trim()));

  const stylesObject = {};

  styleRulesArray.forEach(rule => {
    (rule.length === 2) && (stylesObject[rule[0]] = rule[1]);
  });

  return stylesObject;
}

module.exports = convertToObject;
