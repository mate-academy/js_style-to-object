'use strict';
/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let declarationsArr = sourceString
    .split(';')
    .map((declaration) => {
      return declaration.replace(/\r\n|\n|\r/gm, '', '').replace(':', ': '); // erase whitespaces, then add one after ':'
    })
    .filter((e) => e); // We filter out empty array values

  const obj = {};

  for (const declaration of declarationsArr) {
    const keyValue = declaration.split(':');
    const key = keyValue[0].trim();
    const value = keyValue[1];
    if (key.trim().length > 0) {
      obj[key.trim()] = value.trim();
    }
  }
  return obj;
}

const complexStylesString = `
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
`;

console.log(convertToObject(complexStylesString));
