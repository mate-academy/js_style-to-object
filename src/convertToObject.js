'use strict';

const SEMIKOLON = ';';
const COLON = ':';

function convertToObject(sourceString) {
  const stylesArr = sourceString
    .trim()
    .split(SEMIKOLON);

  const styleObject = stylesArr
    .reduce((acc, property) => {
      const [key, value] = property
        .split(COLON)
        .map(item => item.trim());

      if (key && value) {
        acc[key] = value;
      }

      return acc;
    }, {});

  return styleObject;
}

module.exports = convertToObject;
