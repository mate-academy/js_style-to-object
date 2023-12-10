'use strict';

function convertToObject(sourceString) {
  const styles = sourceString.split(';');
  const styleObject = {};

  for (const style of styles) {
    const [property, value] = style.split(':');

    if (property && value) {
      styleObject[property.trim()] = value.trim();
    }
  }

  return styleObject;
}

module.exports = convertToObject;
