'use strict';

function convertToObject(sourceString) {
  const stringSplit = sourceString.split(';');

  const styles = stringSplit
    .map((style) =>
      style
        .split(':')
        .filter((str) => str.length > 1)
        .map((strProperty) => strProperty.trim())
    )
    .filter((property) => property.length > 1);
  const convertString = Object.fromEntries(styles);

  return convertString;
}

module.exports = convertToObject;
