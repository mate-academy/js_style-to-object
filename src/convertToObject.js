'use strict';

function convertToObject(sourceString) {
  const result = {};
  const array = sourceString.split(';')
    .map(element => element.split(':'))
    .map(element => element.map(subelement => subelement.trim()))
    .filter(element => element.length !== 0);

  for (let i = 0; i < array.length; i++) {
    const [key, value] = array[i];

    if (value) {
      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
