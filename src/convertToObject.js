'use strict';

function convertToObject(sourceString) {
  const styles = {};
  const styleArray = sourceString.split('\n')
    .filter(element => element !== '' && element !== '  ;')
    .map(child => child.split('')
      .filter(grandChild => grandChild !== ';')
      .join('').split(':')
      .map(grandChild => grandChild.trim()));

  for (const char of styleArray) {
    styles[char[0]] = char[1];
  }

  return styles;
}

module.exports = convertToObject;
