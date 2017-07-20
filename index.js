/**
 * Created by Seth on 7/20/2017.
 */
var express = require('express');

var app = express();

app.use(express.static('front'));


var port = process.env.PORT || 50561;
app.listen(port, function(){
    console.log('listening on port ' + port + '...');
});