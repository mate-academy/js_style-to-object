'use strict';

function convertToObject(sourceString) {
  const keyValuePairs = sourceString.split(';')
    .map(line => line.trim())
    .filter(key => key.length > 1)
    .map(solution => solution.split(':'));

  const result = {};

  keyValuePairs.map(([key, value]) => {
    result[key.trim()] = value.trim();
  });

  return result;
};

module.exports = convertToObject;
