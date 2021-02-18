'use strict';

function convertToObject(sourceString) {
  const stylesSet = new Set(sourceString.split(';'));

  stylesSet.delete('\n  ');
  stylesSet.delete('\n');

  const styles = [...stylesSet]
    .map(x => x.replace(['\n'], ''))
    .map(x => x.split(':'))
    .map(x => x.map(y => y.trim()));
  const result = {};

  for (const style of styles) {
    if (style.length === 2) {
      result[style[0]] = style[1];
    }
  }

  return result;
}

module.exports = convertToObject;
