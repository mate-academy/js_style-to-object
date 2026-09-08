'use strict';

function convertToObject(sourceString) {
  const convert = sourceString.split(';');
  const save = {};

  convert.map((val) => {
    if (val.trim() === '') {
      return val;
    }

    const sep = val.split(':');

    save[sep[0].trim()] = sep[1].trim();
  });

  return save;
}

module.exports = convertToObject;
