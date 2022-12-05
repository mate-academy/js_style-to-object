'use strict';

function convertToObject(sourceString) {
  const StylesToObject = sourceString
    .split(';')
    .map(style => style.trim())
    .filter(Boolean)
    .map(style => style.split(':'))
    .reduce((previousValue, currentValue) => ({
      ...previousValue,
      [currentValue[0].trim()]: currentValue[1].trim(),
    }), {});

  return StylesToObject;
}
module.exports = convertToObject;
