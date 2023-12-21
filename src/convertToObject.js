'use strict';

function convertToObject(sourceString) {
  const result = {};

  sourceString
    .split(';')
    .forEach(element => {
      const [property, value] = element.split(':');

      if (property && value) {
        const formatProperty = property
          .replace('\n', '')
          .trim();

        result[formatProperty] = value.trim();
      }
    });

  return result;
}

module.exports = convertToObject;
