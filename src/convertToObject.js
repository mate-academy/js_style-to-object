'use strict';

function convertToObject(sourceString) {
  const styles = sourceString.split(';').reduce((start, line) => {
    const [property, value] = line.split(':').map(lines => lines.trim());

    return property && value
      ? {
        ...start,
        [property]: value,
      }
      : start;
  }, {});

  return styles;
}

module.exports = convertToObject;
