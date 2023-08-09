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

      if (vallueArray.length === 2) {
        resArray.push(vallueArray);
      }
    });

  const res = {};

  resArray.forEach(line => {
    res[line[0]] = line[1];
  });

  return res;
}

module.exports = convertToObject;
