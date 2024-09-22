'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString.length) {
    return {};
  }

  const rawLines = sourceString.split(';');

  // filter lines without letters
  const noEmptyLines = rawLines
    .map((line) => {
      return line.trim();
    })
    .filter((item) => item.length > 0);

  const aggregatedLines = [];

  for (const line of noEmptyLines) {
    if (line.includes(':')) {
      aggregatedLines.push(line);
    } else {
      aggregatedLines[aggregatedLines.length - 1] += line;
    }
  }

  let separatedRules = [];

  for (const line of aggregatedLines) {
    if (line.split(':').length >= 3) {
      separatedRules = [...separatedRules, ...line.split(';')];
    } else {
      separatedRules.push(line);
    }
  }

  separatedRules = separatedRules.filter((item) => item.length > 1);

  const convertStrToObj = separatedRules.map((item) => {
    const [property, value] = item.split(':');

    return { [property]: value };
  });

  // remove ';'
  convertStrToObj.forEach((item, index, array) => {
    const key = Object.keys(item)[0];
    const newValue = item[key].split(';').join('');

    array[index] = { [key]: newValue };
  });

  // trim
  convertStrToObj.forEach((item, index, array) => {
    const oldKey = Object.keys(item)[0];
    const newKey = oldKey.trim();
    const newValue = item[oldKey].trim();

    array[index] = { [newKey]: newValue };
  });

  const convertToObj = convertStrToObj.reduce((prev, item) => {
    return { ...prev, ...item };
  }, {});

  return convertToObj;
}

module.exports = convertToObject;
