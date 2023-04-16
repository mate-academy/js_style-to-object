'use strict';

function convertToObject(sourceString) {
  const styles = sourceString.split(';');

  const properties = styles.map(style => {
    const [key, value] = style.split(':');

    if (key && value) {
      return { [key.trim()]: value.trim() };
    }
  });

  return Object.assign({}, ...properties);
}

module.exports = convertToObject;
