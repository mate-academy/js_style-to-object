'use strict';

function convertToObject(sourceString) {
  const arrStyles = sourceString.split(';').map(style => {
    return style.trim();
  }).filter(style => style.length > 0);

  const result = arrStyles.reduce((prev, current) => {
    const item = current.split(':').map((string) => string.trim());

    return {
      ...prev,
      [item[0]]: item[1],
    };
  }, {});

  return result;
}

module.exports = convertToObject;
