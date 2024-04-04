'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
	const stylePairs = sourceString
		.trim()
		.split(';')
		.map((pair) => pair.split(':'));

	const styleObj = {};

	stylePairs.forEach((pair) => {
		const [property, value] = pair.map(part => part.trim());

		styleObj[property] = value;
	});

	return styleObj;
}

module.exports = convertToObject;
