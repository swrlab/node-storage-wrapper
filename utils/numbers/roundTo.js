// eslint-disable-file prefer-template
// https://gist.github.com/djD-REK/068cba3d430cf7abfddfd32a5d7903c3
module.exports = (number, decimal = 2) => {
	return Number(Math.round(number + 'e' + decimal) + 'e-' + decimal)
}
