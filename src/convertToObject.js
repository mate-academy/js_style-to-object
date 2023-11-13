'use strict';

function convertToObject(sourceString) {
  const returnedObject = {};
  const arrayFromString = sourceString.trim().split(';')
    .map(line => line.replace(/(\.2s|solid)(?!\s)/g, ' $1 ')
      .replace(/\s+/g, ' ')
      .replace(/\n/g, '')
      .replace(/ ! (\w+)/g, '!$1'))
    .filter(line => line !== '' && line !== '\n');

  for (const line of arrayFromString) {
    const [key, value] = line.split(':');

    if (key.trim() !== '') {
      returnedObject[key.trim()] = value.trim();
    }
  }

  return returnedObject;
}

module.exports = convertToObject;
