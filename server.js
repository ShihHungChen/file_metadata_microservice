var express = require('express');
var multer  = require('multer');
var upload = multer();

var app = express();

app.use(express.static(__dirname + '/Public')); // Note: the path should totally correct, 'Public' != 'public'
 
app.post('/upload', upload.single('fileupload'), function(req, res){
  res.json({size : req.file.size});
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})