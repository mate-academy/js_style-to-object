'use strict';

function convertToObject(styleString) {
  const styleObject = {};
  const declarations = styleString.split(';');
  

  for (const declaration of declarations) {
    const trimmedDeclaration = declaration.trim();
    if (trimmedDeclaration) {
      const parts = trimmedDeclaration.split(':');
      if (parts.length === 2) {
        const property = parts[0].trim();
        const value = parts[1].trim();
        styleObject[property] = value;
      }
    }
  }

  return styleObject;
}

const complexStylesString = `  background-color:      #fff;-webkit-border-radius: 5px;  border-radius     : 5px;  border: 1px solid #e8e8e8;  -webkit-box-sizing: border-box;  box-sizing: border-box;  clear   : both       ;  cursor: pointer;  float: left;  font-family: inherit;      font-size: 14px;  font-weight: 400;  height: 42px;  line-height:    40px;  outline: 0;  padding-left    : 18px;  padding-right: 30px;  ;  ;  position: relative;  text-align: left !important;  -webkit-transition: all .2s ease-in-out;  transition: all .2s ease-in-out;  -moz-user-select: none;  -ms-user-select: none;  user-select: none;  white-space: nowrap;  width: auto;`;
const result = convertToObject(complexStylesString);
console.log(result);

console.log(result == {
  'background-color': '#fff',
  '-webkit-border-radius': '5px',
  'border-radius': '5px',
  border: '1px solid #e8e8e8',
  '-webkit-box-sizing': 'border-box',
  'box-sizing': 'border-box',
  clear: 'both',
  cursor: 'pointer',
  float: 'left',
  'font-family': 'inherit',
  'font-size': '14px',
  'font-weight': '400',
  height: '42px',
  'line-height': '40px',
  outline: '0',
  'padding-left': '18px',
  'padding-right': '30px',
  position: 'relative',
  'text-align': 'left !important',
  '-webkit-transition': 'all .2s ease-in-out',
  transition: 'all .2s ease-in-out',
  '-moz-user-select': 'none',
  '-ms-user-select': 'none',
  'user-select': 'none',
  'white-space': 'nowrap',
  width: 'auto',
});
