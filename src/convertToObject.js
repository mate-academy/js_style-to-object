'use strict';

function convertToObject(sourceString) {
  const returnedObject = {};
  const arrayFromString = sourceString.trim().split(';')
    .map(line => line.replace(/ /g, '')
      .replace(/\n/g, '')
      .replace('.2s', ' .2s ')
      .replace('solid', ' solid ')
      .replace('!', ' !'))
    .filter(line => line !== '' && line !== '\n');

  for (let line of arrayFromString) {
    line = line.split(':');
    returnedObject[line[0]] = line[1];
  }

  return returnedObject;
}

module.exports = convertToObject;
