'use strict';

function convertToObject(sourceString) {
  const styles = {};
  const stylesFormat = sourceString.split(';')
    .map(prop => prop.split(':').map(char => char.trim()))
    .filter(elem => elem.length > 1);

  stylesFormat.map(style => (styles[style[0]] = style[1]));

  return styles;
}

module.exports = convertToObject;
