'use strict';

function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map(rule => rule.split(':').map(item => item.trim()))
    .filter(rule => rule.length === 2)
    .reduce((stylesList, [property, value]) => {
      stylesList[property] = value;

      return stylesList;
    }, {});
}

module.exports = convertToObject;
