'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // const styleObj = {};
  // const arr1 = sourceString.split(';\n');
  // const arr2 = arr1.filter(el => el.includes(':'));
  // const arr3 = arr2.map(el => el.trim('\n') || el.trim('\n\n')
  //   || el.trim('      ') || el.trim('     ')
  //   || el.trim('    ') || el.trim('   ') || el.trim('  ')
  //   || el.trim(' '));

  // for (let i = 0; i < arr3.length; i++) {
  //   arr3[i] = arr3[i].split(':');
  // }

  // for (const item of arr3) {
  //   if (!styleObj[item[0].trim(' ')]) {
  //     styleObj[item[0].trim(' ')] = item[1].trim(' ');
  //   }
  // }

  // return styleObj;

  const values = sourceString
    .split(';\n')
    .map(phrase => phrase.split(':').map(el => el.trim()))
    .filter(pair => pair.length === 2);

  return Object.fromEntries(values);
}

module.exports = convertToObject;
