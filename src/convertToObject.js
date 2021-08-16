'use strict';

function convertToObject(sourceString) {
  const convertedObj = {};
  let filteredString = sourceString.split('').filter((char, index) => {
    if (char === ' ' && sourceString[index + 1] === ' ') {
      return false;
    }

    return true;
  });

  filteredString = filteredString.join('');

  while (filteredString.includes('\n')) {
    const sliceFrom = filteredString.indexOf('\n');

    filteredString = filteredString.slice(0, sliceFrom)
      + filteredString.slice(sliceFrom + 1);
  }

  filteredString = filteredString.split(';');
  filteredString = filteredString.filter(item => item.includes(':'));
  filteredString = filteredString.map(item => item.split(':'));

  filteredString = filteredString.map(item => {
    const changedItem = item;

    while (changedItem[0][0] === ' ') {
      changedItem[0] = changedItem[0].slice(1);
    }

    while (changedItem[1][0] === ' ') {
      changedItem[1] = changedItem[1].slice(1);
    }

    while (changedItem[0][changedItem[0].length - 1] === ' ') {
      changedItem[0] = changedItem[0].slice(0, -1);
    }

    while (changedItem[1][changedItem[1].length - 1] === ' ') {
      changedItem[1] = changedItem[1].slice(0, -1);
    }

    return changedItem;
  });

  filteredString.forEach(item => {
    convertedObj[item[0]] = item[1];
  });

  return convertedObj;
}

module.exports = convertToObject;
