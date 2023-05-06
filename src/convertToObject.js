'use strict';

function convertToObject(sourceString) {
  const styles = sourceString
    .split(';')
    .map(style => style.trim())
    .filter(style => style !== '')
    .reduce((acc, style) => {
      const [key, value] = style.split(':').map(str => str.trim());

      return {
        ...acc,
        [key]: value,
      };
    }, {});

  return styles;
}

module.exports = convertToObject;
