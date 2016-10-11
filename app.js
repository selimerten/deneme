/**
 * Created by qselert on 2016-10-06.
 */

var express = require('express'),
    mongoose = require('mongoose');

var db = mongoose.connect('mongodb://deneme:deneme@ds055626.mlab.com:55626/mongodeneme');

var Book = require('./models/bookModel');
var app = express();

var port = process.env.PORT || 3000;

var bookRouter = express.Router();

bookRouter.route('/Books')
    .get(function(req,res){

        Book.find(function(err,books){
            if(err)
                console.log(err);
            else
                res.json(books);
        })

    });


app.use('/api', bookRouter);

app.get('/', function(req,res){
    //console.log(req);
    res.send('welcome to my API...');


});

app.listen(port,function(){
    console.log('Running on PORT : ' + port);

});