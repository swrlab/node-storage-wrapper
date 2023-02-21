// load config
const { name, version } = require('../../package.json')

const userAgent = `${name.replace('@', '')}/${version}`

module.exports = {
	keepAliveTimeout: 30e3,
	headersTimeout: 0,
	bodyTimeout: 0,
	headers: {
		'user-agent': process.env.USER_AGENT || userAgent,
	},
}
