/**
 * Created by qselert on 2016-10-06.
 */

var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req,res){
    //console.log(req);
    res.send('welcome to my API');

});

app.listen(port,function(){
    console.log('Running on PORT : ' + port);

});