'use strict';

function convertToObject(sourceString) {
  const sourceSplitted = sourceString.split(';');
  const sourceProperty = sourceSplitted.map(property => property.split(':'));
  const sourceFiltered = sourceProperty.filter(
    property => property.length === 2);

  const styles = sourceFiltered.reduce((prev, property) => {
    const [key, value] = property;
    const styleKey = key.trim();
    const styleValue = value.trim();

    return {
      ...prev,
      [styleKey]: styleValue,
    };
  }, {});

  return styles;
}

module.exports = convertToObject;
