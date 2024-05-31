function convertToObject(sourceString) {
  const filteredArr = sourceString
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item);

  const newArr = filteredArr
    .map((item) => item.split(':'))
    .map((item) => item.map((subItem) => subItem.trim()));

  const resultObject = newArr.reduce((obj, item) => {
    const [key, value] = item;

    obj[key] = value;

    return obj;
  }, {});

  return resultObject;
}

module.exports = convertToObject;
