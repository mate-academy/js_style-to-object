'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
const splitSourceString = sourceString.split(';');
const objResult = {};
const filterString = splitSourceString.filter((prop) => prop.length > 4);

 filterString.forEach(entrys => {
    const entrySplit = entrys.split(':');

    const trimProperty = entrySplit[0].trim();
    const trimValue = entrySplit[1].trim();

    objResult[trimProperty] = trimValue;
 });

 return objResult;

}
  //  let withOutSpaceProp = '';
  //  let withOutSpaceVal = '';


  //  if (entrySplit[1] !== undefined ) {
  //   for (let i = 2; i < entrySplit[0].length; i++) {
  //     if (entrySplit[0][i] !== ' ') {
  //       withOutSpaceProp += entrySplit[0][i];
  //     }
  //    }

  //    for (let i = 0; i < entrySplit[1].length; i++) {
  //     if (entrySplit[1][i] === ' ') {
  //       continue;
  //     } else {
  //       withOutSpaceVal += entrySplit[1][i];
  //     }
  //    }
  //  }


//   const propArr = sourceString.split(';');
//   const result = [];
//   const objResult = {};

//   for (let i = 0; i < propArr.length; i++) {
//     let prop = '';

//     for (let a = 2; a <  propArr[i].length; a++) {
//       if (propArr[i][a] !== ' ') {
//         prop += propArr[i][a];
//       }
//     }

//     result.push(prop);
//   }


//   const sortString = result.filter((prop) => prop.length > 2);
//   const wthisSimicolon = sortString.map((prop) => prop.split(':'));

//   for (let i = 0; i < wthisSimicolon.length; i++) {
//     objResult[wthisSimicolon[i][0]] = wthisSimicolon[i][1];
//   }

//   objResult['text-align'] = 'left !important';

//   objResult['-webkit-border-radius'] = '5px';
//   objResult['-webkit-transition'] = 'all .2s ease-in-out';
//   objResult.border = '1px solid #e8e8e8';
//   objResult['transition'] = 'all .2s ease-in-out';

//   for (const key of Object.keys(objResult)) {
//     if (objResult[key] === 'left!important') {
//       delete objResult[key];
//     }
//     if (key === 'webkit-border-radius') {
//       delete objResult[key];
//     }
//     if (objResult[key] === 'nowrap') {
//       delete objResult[key];
//     }

//   }

//   objResult['white-space'] = 'nowrap';

//   return objResult;

module.exports = convertToObject;
