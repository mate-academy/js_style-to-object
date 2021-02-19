'use strict';

function convertToObject(sourceString) {
  const stylesSet = new Set(sourceString.split(';'));

  const styles = [...stylesSet]
    .map(style => style.replace(['\n'], ''))
    .map(style => style.split(':'))
    .map(style => style.map(word => word.trim()));
  const result = {};

  for (const style of styles) {
    if (style.length === 2) {
      result[style[0]] = style[1];
    }
  }

  return result;
}

module.exports = convertToObject;
