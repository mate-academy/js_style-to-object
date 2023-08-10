'use strict';

function convertToObject(sourceString) {
  const resArray = [];

  sourceString
    .split(';')
    .forEach(line => {
      const vallueArray = [];

      line
        .trim()
        .split(':')
        .forEach(vallue => {
          vallueArray.push(vallue.trim());
        });

      if (vallueArray.length > 1) {
        resArray.push(vallueArray);
      }
    });

  return resArray.reduce((result, line) => {
    result[line[0]] = line[1];

    return result;
  }, {});
}

module.exports = convertToObject;
