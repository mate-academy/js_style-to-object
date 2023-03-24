'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 * @param {string} sourceString
 *
 * @return {object}
 */

// const stylesString = `
//   background-color:      #fff;
// -webkit-border-radius: 5px;
//   border-radius     : 5px;
//   border: 1px solid #e8e8e8;
//   -webkit-box-sizing: border-box;
//   box-sizing: border-box;
//   clear   : both       ;
//   cursor: pointer;
//   float: left;
//   font-family: inherit;
//       font-size: 14px;
//   font-weight: 400;
//   height: 42px;
//   line-height:    40px;
//   outline: 0;
//   padding-left    : 18px;
//   padding-right: 30px;
//   ;

//   ;
//   position: relative;

//   text-align: left !important;
//   -webkit-transition: all .2s ease-in-out;
//   transition: all .2s ease-in-out;
//   -moz-user-select: none;
//   -ms-user-select: none;
//   user-select: none;

//   white-space: nowrap;
//   width: auto;
// `;

function convertToObject(sourceString) {
  const stylesObject = {};

  sourceString
    .split(';')
    .map(elem => elem.trim())
    .filter(item => item !== '')
    .map(style => style.split(':').map(elem => elem.trim()))
    .forEach(elem => (stylesObject[elem[0]] = elem[1]));

  return stylesObject;
}

module.exports = convertToObject;
