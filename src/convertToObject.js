'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

// const t = require('./stylesString');

// function convertToObject(sourceString) {
//   let test = sourceString.split(';')
//     .map(a => a.trim())
//     .filter(a => a !== '')

//     // console.log(test);
//   let test2 = []

//   for (let i = 0; i < test.length; i++) {
//     // console.log(test[i]);
//     test2.push('$');

//     for (let j = 0; j < test[i].length; j++) {
//       // console.log(test[i][j]);
//       // console.log(test[i][j + 1])
//       if (test[i][j] === ' ' && test[i][j + 1] === ' ' ) {
//         continue;
//       } else {
//         // вроде то что нужно но все по буквенно
//         // test2.push(test[i][j] )
//         test2.push(test[i][j] )
//       }

//     }

//   }

//     // console.log(test2.join(''));
//     console.log(test2.join('').split('$'));
// }

// console.log(convertToObject(t));
// const t = require('./stylesString');

// function convertToObject(sourceString) {
//   // console.log(sourceString);
//   // return sourceString.split(';')
//   // все элементы тут есть
//   //   .map(a => a.trim())
//   //   .filter(a => a !== '')

//   // let test = sourceString.split(';')
//   //   .map(a => a.trim())
//   //   .filter(a => a !== '')
//   //   .map(a => a.replace(/\s/g, ''))

//   let test = sourceString.split(';')
//     .map(a => a.trim())
//     .filter(a => a !== '')
//     // .map(a => a.replace(/\s/g, ''))
//     // ниже рабочее
//     .map(a => a.replace(/\s{3}/g, ''))
//     // вроде пробелы ушли
//     .map(a => a.replace(/\s{2}/g, ''))
//     // .join(':')
//     // .split(':')

//     console.log(test);
//     // let obj = {}

//     // for (let i = 0; i < test.length; i++) {
//     //   obj[test[i]] = test[i]

//     // }

//     // console.log(obj );
//     // return Object.assign({}, test)
// }
// console.log(convertToObject(t));

// след функция!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function convertToObject(sourceString) {
//   let test = sourceString.split(';')
//     .map(a => a.trim())
//     .filter(a => a !== '')

//     // console.log(test);
//   let test2 = []

//   for (let i = 0; i < test.length; i++) {
//     // console.log(test[i]);
//     test2.push('$');

//     for (let j = 0; j < test[i].length; j++) {
//       // console.log(test[i][j]);
//       // console.log(test[i][j + 1])
//       if (test[i][j] === ' ' && test[i][j + 1] === ' ') {
//         continue;
//       } else {
//         // вроде то что нужно но все по буквенно
//         // test2.push(test[i][j] )
//         test2.push(test[i][j] )
//       }

//     }

//   }
//    // console.log(test2.join(''));
//     console.log(test2.join('').split('$'));
// }

// это новая функция
// const t = require('./stylesString');

// function convertToObject(sourceString) {

//   let test = sourceString.split(';')
//     .map(a => a.trim())
//     .filter(a => a !== '')
//     // .map(a => a.replace(/\s/g, ''))
//     // ниже рабочее
//     .map(a => a.replace(/\s{2,}/g, ''))

//     // console.log(test);

//   // console.log(Object.entries(test));
//   let obj = {}
//     for (let i = 0; i < test.length; i++) {
//       // не получается нормально настроить
//       obj[test[i].slice(0, test[i].indexOf(':'))] =
//  test[i].slice(test[i].indexOf(':') + 1)

//     }

//     console.log(obj);

// }
// console.log(convertToObject(t));
// module.exports = convertToObject;

// const t = require('./stylesString');

// function convertToObject(sourceString) {

//   let test = sourceString.split(';')
//     .map(a => a.trim())
//     .filter(a => a !== '')
//     // .map(a => a.replace(/\s/g, ''))
//     // ниже рабочее
//     .map(a => a.replace(/\s{2,}/g, ''))
//     .join(':')
//     .split(':')
//     .map(a => a.trim())

//     // идеально со всех сторон почисчено
//     console.log(test);
//   let obj = {}

//     // не понимаю почему куски кавычек слетают
//     // for (let i = 0; i < test.length; i+=2) {
//     //   obj[test[i].trim()] = test[i+1].trim()
//     //   // i--
//     // }

//     // console.log(obj);

// }

// console.log(convertToObject(t));

// const t = require('./stylesString');

function convertToObject(sourceString) {
  const stringToObject = sourceString.split(';')
    .map(a => a.trim())
    .filter(a => a !== '')
    .join(':')
    .split(':')
    .map(a => a.trim());

  // идеально со всех сторон почисчено
  // console.log(test);

  const obj = {};

  // не понимаю почему куски кавычек слетают
  for (let i = 0; i < stringToObject.length; i += 2) {
    obj[stringToObject[i]] = stringToObject[i + 1];
    // i--
  }

  return obj;
  // console.log(Object.assign({}, test));

  // console.log(obj);
}

// console.log(convertToObject(t));
module.exports = convertToObject;
