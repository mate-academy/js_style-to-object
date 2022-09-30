'use strict';

function convertToObject(sourceString) {
  let classes = sourceString.split(';');
  const resultObj = {};

  classes.map(str => {
    classes = str.trim().split(':');

    classes.reduce((prev, current) => {
      resultObj[prev.trim()] = current.trim();
    });
  });

  return resultObj;
}

module.exports = convertToObject;
