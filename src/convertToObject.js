'use strict';

function convertToObject(sourceString) {
  const transformedString = sourceString.split(';')
    .map(pair => {
      return pair.split(':').map(item => item.trim());
    })
    .filter(item => item.length === 2)
    .reduce((object, [key, value]) => {
      object[key] = value;

      return object;
    }, {});

  return transformedString;
};

module.exports = convertToObject;
