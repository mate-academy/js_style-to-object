'use strict';

function convertToObject(sourceString) {
  return sourceString.split(';')
    .map(pair => {
      return pair.split(':').map(item => item.trim());
    })
    .filter(item => item.length === 2)
    .reduce((object, [key, value]) => {
      object[key] = value;

      return object;
    }, {});
};

module.exports = convertToObject;
