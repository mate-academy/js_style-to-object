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

  const formatedStyles = {};

  styles.forEach(el => {
    const [property, ...value] = el;

    formatedStyles[property] = [...value].join(' ');
  });

  return formatedStyles;
}

module.exports = convertToObject;
