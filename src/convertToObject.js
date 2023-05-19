'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objectOfStyles = {};
  const arrayOfStyles = splitAndTrim(sourceString, ';')
    .filter(style => style.length > 0);
  const splitedStyles = arrayOfStyles.map(style => splitAndTrim(style, ':'));

  splitedStyles.map(function makeObj(style) {
    objectOfStyles[style[0]] = style[1];
  });

  return objectOfStyles;
}

function splitAndTrim(arr, char) {
  return arr.split(char).map(str => str.trim());
}

convertToObject(`
background-color:      #fff;
-webkit-border-radius: 5px;
border-radius     : 5px;
border: 1px solid #e8e8e8;
-webkit-box-sizing: border-box;
box-sizing: border-box;
clear   : both       ;
cursor: pointer;
float: left;
font-family: inherit;
    font-size: 14px;
font-weight: 400;
height: 42px;
line-height:    40px;
outline: 0;
padding-left    : 18px;
padding-right: 30px;
;

;
position: relative;


text-align: left !important;
-webkit-transition: all .2s ease-in-out;
transition: all .2s ease-in-out;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;


white-space: nowrap;
width: auto;
`);

module.exports = convertToObject;
