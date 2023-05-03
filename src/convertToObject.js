'use strict';

function convertToObject(sourceString) {
  const styles = sourceString
    .split(';')
    .map(style => style.trim())
    .filter(style => style !== '');

  const styleObject = {};

  styles.forEach(style => {
    const [key, value] = style.split(':').map(str => str.trim());

    styleObject[key] = value;
  });

  return styleObject;
}

module.exports = convertToObject;
