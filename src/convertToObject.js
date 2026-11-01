'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  // const object = {};
  // const splitSource = sourceString.split(';');

  // for (const line of splitSource) {
  //   // line = line.trim();

  //   if (!line.trim()) {
  //     continue;
  //   }

  //   const splitLine = line.split(':');
  //   const lineKey = splitLine[0].trim();
  //   const lineValue = splitLine[1].trim();

  //   object[lineKey] = lineValue;
  // }

  // return object;

  const object = {};
  const splitSource = sourceString.split(';');

  for (const line of splitSource) {
    if (!line.trim()) {
      continue;
    }

    const splitLine = line.split(':');
    const lineKey = splitLine[0].trim();
    const lineValue = splitLine[1].trim();

    object[lineKey] = lineValue;
  }

  return object;
}

module.exports = convertToObject;
