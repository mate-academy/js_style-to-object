'use strict';

function convertToObject(sourceString) {
  const styles = sourceString
    .split(';')
    .filter(style => style.length > 1 && style.includes(':'));

  return styles.reduce((objectCss, property) => {
    const [key, value] = property.split(':');

    objectCss[key.trim()] = value.trim();

    return objectCss;
  }, {});
}

module.exports = convertToObject;
