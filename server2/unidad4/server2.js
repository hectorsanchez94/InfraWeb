var mongoose = require('mongoose');
var schema = require('./schema');
var express = require('express');
var User = mongoose.model('User',schema,'users');

module.exports = function () {

    var app = express();

    app.get('/',function (req,res) {

        var user = new User({
            name : 'Martin Fowler',
            email : 'martin@martinfowler.com'
        });


        user.save(function (error) {
            if(error){
                console.log(error);
                process.exit(1);
            }

            User.find({email:'martin@martinfowler.com'},function (error,docs) {
                if (error){
                    console.log(error);
                    process.exit(1);
                }

                res.send(docs[0].name);
                //process.exit(0);

            });
        });

    });

    return app;
};
