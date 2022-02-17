'use strict';

function convertToObject(sourceString) {
  const stylesLine = sourceString.replace(/\s+/g, ' ').trim().split(';');
  const styles = {};

  for (const style of stylesLine) {
    const [key, value] = style.split(':');

    if (key && value) {
      styles[key.trim()] = value.trim();
    }
  }

  return styles;
}

module.exports = convertToObject;
