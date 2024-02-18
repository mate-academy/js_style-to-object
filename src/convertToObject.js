'use strict';

function convertToObject(sourceString) {
  const splitted = sourceString.split('\n');
  const sliced = splitted.slice(1);
  const reduced = sliced.reduce((prev, item) => {
    const [key, value] = item.split(':');

    if (key && value) {
      prev[key.trim()] = value.slice(0, -1).trim();
    };

    return prev;
  }, {});

  return reduced;
}

module.exports = convertToObject;
