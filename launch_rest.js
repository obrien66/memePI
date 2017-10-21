var http = require("http")
var util = require("util")

module.exports = function(userdata, userport){
	return (function(data, port) {
		http.createServer((req,res) => {
			res.writeHead(200, {"content-type": "application/json"})
			res.end(util.inspect(data))
		}).listen(port)
	})(userdata, userport)
}