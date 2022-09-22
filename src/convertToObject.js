'use strict';

function convertToObject(sourceString) {
  const stylesAsObject = {};

  sourceString
    .split(';')
    .map(item => item.split(':'))
    .map(props => props
      .map(item => item
        .trim()))
    .forEach(item => {
      if (item[0]) {
        stylesAsObject[item[0]] = item[1];
      }
    });

  return stylesAsObject;
}

module.exports = convertToObject;
