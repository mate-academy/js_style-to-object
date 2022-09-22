'use strict';

function convertToObject(sourceString) {
  const objectAsStyles = {};

  sourceString
    .split(';')
    .map(item => item.split(':'))
    .map(props => props
      .map(item => item
        .trim()))
    .forEach(item => {
      if (item[0]) {
        objectAsStyles[item[0]] = item[1];
      }
    });

  return objectAsStyles;
}

module.exports = convertToObject;
