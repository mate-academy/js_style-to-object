'use strict';

function convertToObject(sourceString) {
  return sourceString.split('\n').slice(1).reduce((prev, item) => {
    const [key, value] = item.split(':');

    if (key && value) {
      prev[key.trim()] = value.slice(0, -1).trim();
    };

    return prev;
  }, {});
}

module.exports = convertToObject;
