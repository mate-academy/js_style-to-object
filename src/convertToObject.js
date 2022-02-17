'use strict';

function convertToObject(sourceString) {
  const styles = sourceString
    .split(';')
    .map(elem => elem.split(':'))
    .filter(elem => elem.length > 1);

  return styles.reduce((previus, [key, value]) => {
    return {
      ...previus,
      [key.trim()]: value.trim(),
    };
  }, {});
}

module.exports = convertToObject;
