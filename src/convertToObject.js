'use strict';

/**
 * Implement convertToObject function:
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

//  const stylesString = `
//  background-color:      #fff;
// -webkit-border-radius: 5px;
//  border-radius     : 5px;
//  border: 1px solid #e8e8e8;
//  -webkit-box-sizing: border-box;
//  box-sizing: border-box;
//  clear   : both       ;
//  cursor: pointer;
//  float: left;
//  font-family: inherit;
//      font-size: 14px;
//  font-weight: 400;
//  height: 42px;
//  line-height:    40px;
//  outline: 0;
//  padding-left    : 18px;
//  padding-right: 30px;
//  ;

//  ;
//  position: relative;

//  text-align: left !important;
//  -webkit-transition: all .2s ease-in-out;
//  transition: all .2s ease-in-out;
//  -moz-user-select: none;
//  -ms-user-select: none;
//  user-select: none;

//  white-space: nowrap;
//  width: auto;
// `

function convertToObject(sourceString) {
  const arrStrings = sourceString.split(';')
    .map(el => el.split(':'));
  const styleObj = {};

  arrStrings.forEach(str => {
    const trimStrings = str.map(el => el.trim());

    const key = trimStrings[0];
    const value = trimStrings[1];

    if (key && value) {
      styleObj[key] = value;
    }
  });

  return styleObj;
}

module.exports = convertToObject;
