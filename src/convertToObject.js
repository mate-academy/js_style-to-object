'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const lines = sourceString
    .split(/[;]/)
    .map((line) => line.trim())
    .filter((line) => line !== '' && line.indexOf(':') !== -1 && line !== ';');

  const style = {};

  lines.forEach((line) => {
    const i = line.indexOf(':');

    const key = line.slice(0, i).trim();
    const value = line.slice(i + 1).trim();

    style[key] = value;
  });

  return style;
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
