/**
 * Created by qselert on 2016-10-06.
 */

var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://deneme:deneme@ds055626.mlab.com:55626/mongodeneme');

var Book = require('./models/bookModel');
var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var bookRouter = require('./Routes/bookRoutes')(Book);


app.use('/api/books', bookRouter);

app.get('/', function(req,res){
    //console.log(req);
    res.send('welcome to my API...');


});

app.listen(port,function(){
    console.log('Running on PORT : ' + port);

});