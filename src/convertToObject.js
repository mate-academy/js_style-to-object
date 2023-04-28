'use strict';

function convertToObject(sourceString) {
  const styles = sourceString.split(';').reduce((styleObject, line) => {
    const [property, value] = line.split(':').map(lines => lines.trim());

    return property && value
      ? {
        ...styleObject,
        [property]: value,
      }
      : styleObject;
  }, {});

  return styles;
}

module.exports = convertToObject;
