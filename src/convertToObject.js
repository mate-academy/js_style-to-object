'use strict';

function convertToObject(sourceString) {
  const styles = sourceString
    .split(';')
    .map(style => style.trim())
    .filter(style => style !== '');

  const styleObject = styles.reduce((acc, style) => {
    const [key, value] = style.split(':').map(str => str.trim());

    acc[key] = value;

    return acc;
  }, {});

  return styleObject;
}

module.exports = convertToObject;
