'use strict';

function convertToObject(sourceString) {
  const splittedVariable = sourceString.split('\n');
  const slicedVariable = splittedVariable.slice(1);
  const reduceVariable = slicedVariable.reduce((prev, item) => {
    const [key, value] = item.split(':');

    if (key && value) {
      prev[key.trim()] = value.slice(0, -1).trim();
    };

    return prev;
  }, {});

  return reduceVariable;
}

module.exports = convertToObject;
