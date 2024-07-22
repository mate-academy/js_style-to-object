'use strict';

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

/**
 * @param {string} sourceString
 *
 * @return {object}
 *
 */

function convertToObject(sourceString) {
  return sourceString.split(';').reduce((cssObject, declaration) => {
    const [key, value] = declaration.split(':');

    if (key && value) {
      const trimmedKey = key.trim();
      const trimmedValue = value.trim();

      const importantIndex = trimmedValue.indexOf('!important');

      if (importantIndex !== -1) {
        cssObject[trimmedKey] =
          trimmedValue.slice(0, importantIndex).trim() + ' !important';
      } else {
        cssObject[trimmedKey] = trimmedValue;
      }
    }

    return cssObject;
  }, {});
}

convertToObject(complexStylesString);
module.exports = convertToObject;
