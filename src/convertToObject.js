'use strict';

function convertToObject(sourceString) {
  const styleInObject = sourceString
    .split(';')
    .map(style => style.trim())
    .filter(style => style.length > 0)
    .map(style => style
      .split(`:`)
      .map(item => item.trim())
    )
    .reduce((prev, [key, value]) => {
      return {
        ...prev, [key]: value,
      };
    }, {});

  return styleInObject;
}

module.exports = convertToObject;
