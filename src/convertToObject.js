'use strict';

function convertToObject(sourceString) {
  const styles = sourceString.split(';').reduce((start, line) => {
    const [key, value] = line.split(':').map(lines => lines.trim());

    return key && value
      ? {
        ...start,
        [key]: value,
      }
      : start;
  }, {});

  return styles;
}

module.exports = convertToObject;
