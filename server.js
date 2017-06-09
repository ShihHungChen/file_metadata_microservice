var express = require('express')
var app = express()
var multer  = require('multer')
var upload = multer()
 
app.post('/profile', upload.single(), function (req, res, next) {
  res.end();
})
app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})