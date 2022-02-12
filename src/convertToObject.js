'use strict';

function convertToObject(sourceString) {
  const answer = {};

  const result = sourceString
    .split(';')
    .map(el => el.trim())
    .filter(el => el.length > 1)
    .map(el => el
      .split(':')
      .map(word => word.trim())
    );

  result.forEach((word) => {
    answer[word[0]] = word[1];
  });

  return answer;
}

module.exports = convertToObject;
