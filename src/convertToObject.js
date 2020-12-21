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

// const addClass = (el, classToAdd) => {
//   el.className += ` ${classToAdd}`;
//
//   const classes = el.className.split(' ');
//
//   let final = [...new Set(classes)];
//
//   final = final.filter(word => word !== '');
//
//   el.className = final.join(' ');
// };
function convertToObject(sourceString) {
  // write your code here

  const styles = sourceString
    .split(';')
    .map(rule => rule
      .trim()
      .split(':').map(
        style => style.trim()
      )
    )
    .filter(arr => arr[0] !== '');

  return Object.fromEntries(styles);
}

module.exports = convertToObject;
