'use strict';

function convertToObject(sourceString) {
  const arrFromSourse = sourceString.split(';');

  const arrWhithoutBrakes = arrFromSourse.map(el => {
    return el
      .split('')
      .filter((item) => item !== '\n')
      .join('');
  });

  const result = arrWhithoutBrakes.reduce((acc, item) => {
    const arrFromEl = item.split(':');
    const [property, value] = arrFromEl;

    if (property && value) {
      return {
        ...acc,
        [property.trim()]: value.trim(),
      };
    }

    return { ...acc };
  }, {});

  return result;
}

module.exports = convertToObject;
