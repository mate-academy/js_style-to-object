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
  const styles = {};
  const arrFromStr = sourceString.split(';');

  arrFromStr.forEach(item => {
    const subArr = item.split(':');

    if (subArr.length === 2) {
      const key = subArr[0].toString().trim();
      const value = subArr[1].toString().trim();

      styles[key] = value;
    }
  });

  return styles;
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
