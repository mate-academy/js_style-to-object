'use strict';

function convertToObject(sourceString) {
  const result = {};

  sourceString
    .split(';')
    .map(item => item.split(':'))
    .map(props => props
      .map(item => item
        .trim()))
    .forEach(item => {
      if (item[0]) {
        result[item[0]] = item[1];
      }
    });

  return result;
}

module.exports = convertToObject;
