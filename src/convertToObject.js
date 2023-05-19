'use strict';

function convertToObject(sourceString) {
  const styleObject = {};

  const styles = sourceString
    .split(';')
    .map(style => style.trim())
    .filter(style => style !== '');

  styles.forEach(style => {
    const [property, value] = style.split(':').map(item => item.trim());

    styleObject[property] = value;
  });

  return styleObject;
}

module.exports = convertToObject;
