'use strict';

function convertToObject(sourceString) {
  const styles = sourceString
    .trim()
    .split(';')
    .map(style => style
      .split(':')
      .join(' ')
      .trim())
    .filter(style => style !== '')
    .map(style => style.split(' ')
      .filter(char => char !== ''));

  const obj = {};

  styles.forEach(el => {
    const [property, ...value] = el;

    obj[property] = [...value].join(' ');
  });

  return obj;
}

module.exports = convertToObject;
