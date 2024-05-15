'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(
  sourceString = `
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
`,
) {
  // write your code here
  const arr = sourceString.split(';');

  arr.forEach((el) => el.trim());

  const newArr = arr.filter((el) => el !== undefined);

  const newObj = {};

  newArr.forEach((el) => {
    const [key, value] = el.split(':');

    if (key && value) {
      newObj[key.trim()] = value.trim();
    }
  });

  return newObj;
}

module.exports = convertToObject;
