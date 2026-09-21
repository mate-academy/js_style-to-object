'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

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

function convertToObject(sourceString) {
  const res = {};

  const source = sourceString.replace(/\r/g, '').replace(/\t/g, ' ');

  const rules = source.split(';');

  rules.forEach((rule) => {
    const line = rule.trim();

    if (!line || !line.includes(':')) {
      return;
    }

    const colonIndex = line.indexOf(':');

    const property = line.slice(0, colonIndex).trim();
    const value = line.slice(colonIndex + 1).trim();

    if (!property || !value) {
      return;
    }

    res[property] = value;
  });

  return res;
}

convertToObject(complexStylesString);

module.exports = convertToObject;
