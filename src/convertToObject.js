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

  // const object = {};
  // const splitSource = sourceString.split(';');

  // for (const line of splitSource) {
  //   if (!line.trim()) {
  //     continue;
  //   }

  //   const splitLine = line.split(':');
  //   const lineKey = splitLine[0].trim();
  //   const lineValue = splitLine[1].trim();

  //   object[lineKey] = lineValue;
  // }

  // return object;

  // new code
  const splitSource = sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter(Boolean)
    .map((rule) => {
      const newRule = rule.split(':');

      return [newRule[0].trim(), newRule[1].trim()];
    });

  return Object.fromEntries(splitSource);
}

module.exports = convertToObject;
