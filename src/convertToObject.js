'use strict';

function convertToObject(sourceString) {
  const styles = sourceString.split(';');
  const newObject = {};

  styles.forEach(style => {
    const [key, value] = style.split(':');
    const trimmedKey = key.trim();
    const trimmedValue = value ? value.trim() : '';

    if (trimmedKey && trimmedValue) {
      newObject[trimmedKey] = trimmedValue;
    }
  });

  return newObject;
}

module.exports = convertToObject;
