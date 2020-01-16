var express = require('express')
, path = require('path')
, serveStatic = require('serve-static')
, app = express();

app.use(serveStatic(path.join(__dirname, "/dist")));
var port = process.env.PORT || 5000
app.listen(port)

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

console.log('server started ' + port)
