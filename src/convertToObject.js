'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
// function convertToObject(sourceString) {
//   const filtered = sourceString.split(';').filter((elem) => elem !== '');

//   const obj = {};

//   for (let i = 0; i < filtered.length; i++) {
//     const splited = filtered[i]
//       .split(':')
//       .filter((elem) => elem !== ' ' && elem !== '');
//     const trimmedKey = splited[0].trim();
//     const trimmedValue = splited[1].trim();

//     obj[trimmedKey] = trimmedValue;
//   }

//   return obj;
// }

function convertToObject(sourceString) {
  const obj = {};

  sourceString
    .split(';')
    .filter((el) => el.trim() !== '')
    .forEach((pair) => {
      const [key, value] = pair.split(':');

      obj[key.trim()] = value.trim();
    });

  return obj;
}

module.exports = convertToObject;
