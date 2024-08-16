'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const styleObject = {};
  const filtredArr = sourceString
    .replace(/\n/g, '')
    .split(';')
    .filter((element) => element.trim().length > 2);

  const pairs = filtredArr.map((el) => {
    const indexEl = el.indexOf(':');
    const key = el.slice(0, indexEl).replace(/\s+/g, '');
    const value = el
      .slice(indexEl, el.length)
      .slice(1)
      .trim()
      .replace(/,\s{2,}/g, ',\n          ');

    return [key, value];
  });

  pairs.forEach((pair) => {
    styleObject[pair[0]] = pair[1];
  });

  return styleObject;
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

convertToObject(`
      box-shadow:
          inset 0 -3em 3em rgb(0 200 0 / 30%),
          0 0 0 2px white,
          0.3em 0.3em 1em rgb(200 0 0 / 60%);
    `);

module.exports = convertToObject;
