var http = require("http")
var util = require("util")

module.exports.rest = function(userdata, userport){
	return (function(data, port) {
		http.createServer((req,res) => {
			res.writeHead(200, {
				"Content-type": "application/json",
				'Content-Encoding': 'utf8',
				'Content-Length': Buffer.byteLength(data)
		})
			res.end(data)
		}).listen(port)
	})(userdata, userport)
}