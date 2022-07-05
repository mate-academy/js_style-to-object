'use strict';

function convertToObject(sourceString) {
  const styles = {};
  const styleArray = sourceString.split(';')
    .filter(element => element !== '')
    .map(child => child.split('')
      .filter(grandChild => grandChild !== '\n')
      .join('').split(':')
      .map(grandChild => grandChild.trim()));

  for (const char of styleArray) {
    if (char.length !== 1) {
      styles[char[0]] = char[1];
    }
  }

  return styles;
}

module.exports = convertToObject;
