'use strict';

function convertToObject(sourceString) {
  const stylesArray = sourceString
    .split(';')
    .map((item) => item.trim())
    .join(';')
    .split(':')
    .map((item) => item.trim())
    .join(':')
    .split(';')
    .filter((item) => item.length > 0);

  return stylesArray.reduce((prev, item) => {
    const [property, value] = item.split(':');

    return {
      ...prev,
      [property]: value,
    };
  }, {});
}

module.exports = convertToObject;
