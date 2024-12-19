'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let formatData = sourceString.split(';').map((item) => item.split(':'));

  formatData = formatData.map((item) => {
    for (let i = 0; i < item.length; i++) {
      if (item[i].includes('\n')) {
        do {
          item[i] = item[i].replace('\n', '');
        } while (item[i].includes('\n'));
      }
    }

    return item;
  });

  formatData = formatData.map((item) => item.map((el) => el.trim()));

  formatData = formatData.filter((item) => item.length > 1);

  formatData = formatData.reduce((acc, [key, value]) => {
    acc[key] = value;

    return acc;
  }, {});

  return formatData;
}

// console.log(
//   convertToObject(`
//   background-color:      #fff;
// -webkit-border-radius: 5px;
//   border-radius     : 5px;
//   border: 1px solid #e8e8e8;
//   -webkit-box-sizing: border-box;
//   box-sizing: border-box;
//   clear   : both       ;
//   cursor: pointer;
//   float: left;
//   font-family: inherit;
//       font-size: 14px;
//   font-weight: 400;
//   height: 42px;
//   line-height:    40px;
//   outline: 0;
//   padding-left    : 18px;
//   padding-right: 30px;
//   ;

//   ;
//   position: relative;

//   text-align: left !important;
//   -webkit-transition: all .2s ease-in-out;
//   transition: all .2s ease-in-out;
//   -moz-user-select: none;
//   -ms-user-select: none;
//   user-select: none;

//   white-space: nowrap;
//   width: auto;
// `),
// );

module.exports = convertToObject;
