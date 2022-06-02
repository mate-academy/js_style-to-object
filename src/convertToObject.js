'use strict';

function convertToObject(sourceString) {
  const styles = {};
  const sourceSplitted = sourceString.split(';');
  const sourceProperty = sourceSplitted.map(property => property.split(':'));

  sourceProperty.forEach(property => {
    if (property.length === 2) {
      const key = property[0].trim();
      const value = property[1].trim();

      styles[key] = value;
    }
  });

  return styles;
}

module.exports = convertToObject;
