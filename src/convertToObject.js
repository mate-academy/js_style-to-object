'use strict';

function convertToObject(sourceString) {
  let arrayFromString = sourceString.trim().split(';');

  arrayFromString = arrayFromString.map(line => line.replace(/ /g, ''));
  arrayFromString = arrayFromString.map(line => line.replace('\n', ''));
  arrayFromString = arrayFromString.map(line => line.replace('\n\n', ''));

  arrayFromString = arrayFromString.filter(
    line => line !== '' && line !== '\n');

  arrayFromString = arrayFromString.map(
    line => line.replace('.2s', ' .2s '));

  arrayFromString = arrayFromString.map(
    line => line.replace('solid', ' solid '));
  arrayFromString = arrayFromString.map(line => line.replace('!', ' !'));

  const returnedObject = {};

  for (let line of arrayFromString) {
    line = line.split(':');
    returnedObject[line[0]] = line[1];
  }

  return returnedObject;
}

module.exports = convertToObject;
