'use strict';

function convertToObject(sourceString) {
  const styles = sourceString
    .split(';')
    .filter(style => style.length > 1 && style.includes(':'));

  return styles.reduce((stylesObj, style) => {
    const [key, value] = style.split(':');

    stylesObj[key.trim()] = value.trim();

    return stylesObj;
  }, {});
}

module.exports = convertToObject;
